'use strict';

const sinon = require('sinon');
const mockery = require('mockery');
const expect = require('chai').expect;
const _ = require('lodash');

describe('lib/utilities/do-not-syndicate.js', () => {
    let assetData;
    let constants;
    let aggregateCommander;
    let doNotSyndicate;
    let promiseAll;
    let getByIdAsync;

    beforeEach(() => {
        mockery.enable({ useCleanCache: true });

        assetData = {
            notForSyndicationAssets: [ 'image-1', 'image-2', 'image-1' ],
            userId: 'userId',
            systemId: 'systemId'
        };
        promiseAll = sinon.stub(Promise, 'all').resolves();

        mockery.registerMock('lodash', {
            isEmpty: _.isEmpty,
            uniq: _.uniq
        });
        mockery.registerMock('util', {
            promisify: sinon.stub().returnsArg(0)
        });
        mockery.registerMock('../domain/constants.js', constants = {
            DO_NOT_SYNDICATE_SYSTEM_TAG_ID: 'do-not-syndicate-system-tag-id'
        });
        mockery.registerMock('../domain/aggregate-commander.js', aggregateCommander = {
            sendCommand: sinon.stub()
        });
        mockery.registerMock('../repository-2.js', {
            getById: getByIdAsync = sinon.stub()
        });
        mockery.registerAllowable('../../../lib/utilities/do-not-syndicate.js');

        doNotSyndicate = require('../../../lib/utilities/do-not-syndicate.js');
    });

    afterEach(() => {
        promiseAll.restore();
        mockery.deregisterAll();
        mockery.disable();
    });

    describe('removeSystemTagsFromAssociatedAssets', () => {
        let associatedAssetIds;

        beforeEach(() => {
            associatedAssetIds = [ 'img-1', 'img-2', 'img-1' ];
        });

        it('should call Promise.all with associatedAssetIds', () => {
            sinon.stub(doNotSyndicate, '_removeSystemTag').resolves();
            getByIdAsync.resolves({});

            doNotSyndicate.removeSystemTagsFromAssociatedAssets(associatedAssetIds, assetData.userId, assetData.systemId);

            expect(promiseAll.calledOnce).to.eql(true);
        });

        it('should call getByIdAsync with requested parameters for all unique aggregate id', () => {
            getByIdAsync.resolves({});

            doNotSyndicate.removeSystemTagsFromAssociatedAssets(associatedAssetIds, assetData.userId, assetData.systemId);

            expect(getByIdAsync.args).to.eql([ [ 'img-1', null ], [ 'img-2', null ] ]);
        });

        it('should not call _removeSystemTag if getByIdAsync does not return domain model', () => {
            const _removeSystemTag = sinon.stub(doNotSyndicate, '_removeSystemTag');
            getByIdAsync.resolves({});

            doNotSyndicate.removeSystemTagsFromAssociatedAssets(associatedAssetIds, assetData.userId, assetData.systemId);

            expect(_removeSystemTag.callCount).to.eql(0);
        });

        it('should not call _removeSystemTag if getByIdAsync return domain model and isOneTimeUse is true', () => {
            const _removeSystemTag = sinon.stub(doNotSyndicate, '_removeSystemTag');
            getByIdAsync.resolves({ _domainModel: { aggregateName: 'image', isOneTimeUse: true } });

            doNotSyndicate.removeSystemTagsFromAssociatedAssets(associatedAssetIds, assetData.userId, assetData.systemId);

            expect(_removeSystemTag.callCount).to.eql(0);
        });

        it('should not call _removeSystemTag if getByIdAsync return domain model, isOneTimeUse is false but does not have DNS tag', () => {
            const _removeSystemTag = sinon.stub(doNotSyndicate, '_removeSystemTag');
            getByIdAsync.resolves({ _domainModel: { aggregateName: 'image', isOneTimeUse: false, systemTags: [ 'invalid-tag' ] } });

            doNotSyndicate.removeSystemTagsFromAssociatedAssets(associatedAssetIds, assetData.userId, assetData.systemId);

            expect(_removeSystemTag.callCount).to.eql(0);
        });

        it('should call _removeSystemTag if getByIdAsync return domain model, isOneTimeUse is false and has DNS tag', () => {
            const _removeSystemTag = sinon.stub(doNotSyndicate, '_removeSystemTag');
            getByIdAsync.resolves({ _domainModel: { aggregateName: 'image', isOneTimeUse: false, systemTags: [ constants.DO_NOT_SYNDICATE_SYSTEM_TAG_ID ] } });
            const expectedArgs = [
                [ 'img-1', assetData.userId, assetData.systemId ],
                [ 'img-2', assetData.userId, assetData.systemId ]
            ];

            return doNotSyndicate.removeSystemTagsFromAssociatedAssets(associatedAssetIds, assetData.userId, assetData.systemId)
                .then(() => {
                    expect(_removeSystemTag.args).to.eql(expectedArgs);
                });
        });
    });

    describe('hasSystemTag', () => {
        it('should return true if aggregate has DO_NOT_SYNDICATE_SYSTEM_TAG_ID', () => {
            expect(doNotSyndicate.hasSystemTag({
                _domainModel: { systemTags: [
                    'do-not-syndicate-system-tag-id'
                ] }
            })).to.equal(true);
        });

        it('should return false if aggregate has does not have DO_NOT_SYNDICATE_SYSTEM_TAG_ID', () => {
            expect(doNotSyndicate.hasSystemTag({
                _domainModel: { systemTags: [
                    'do-not-syndicate-system-tag-id-is-not-here'
                ] }
            })).to.equal(false);
        });
    });

    describe('_removeSystemTag', () => {
        it('should call sendCommand with removeSystemTag for image id', () => {
            aggregateCommander.sendCommand.resolves();

            doNotSyndicate._removeSystemTag(assetData.notForSyndicationAssets[0], assetData.userId, assetData.systemId);

            expect(aggregateCommander.sendCommand.calledOnceWithExactly({
                aggregateId: assetData.notForSyndicationAssets[0],
                commandName: 'removeSystemTag',
                commandArguments: [ constants.DO_NOT_SYNDICATE_SYSTEM_TAG_ID ],
                userId: assetData.userId,
                systemId: assetData.systemId
            })).to.equal(true);
        });

        it('should call sendCommand with afterNewCommands for image in notForSyndicationAssets', () => {
            aggregateCommander.sendCommand.resolves();

            return doNotSyndicate._removeSystemTag(assetData.notForSyndicationAssets[0], assetData.userId, assetData.systemId)
                .then(() => {
                    expect(aggregateCommander.sendCommand.args[1]).to.eql([
                        {
                            aggregateId: assetData.notForSyndicationAssets[0],
                            commandName: 'afterNewCommands',
                            commandArguments: [ { commands: [] } ],
                            userId: assetData.userId,
                            systemId: assetData.systemId
                        }
                    ]);
                });
        });
    });
});
