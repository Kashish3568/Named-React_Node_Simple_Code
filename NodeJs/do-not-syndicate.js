'use strict';

const _ = require('lodash');
const util = require('util');
const constants = require('../domain/constants.js');
const sendCommandAsync = util.promisify(require('../domain/aggregate-commander.js').sendCommand);
const getByIdAsync = util.promisify(require('../repository-2.js').getById);

let doNotSyndicateUtil;

module.exports = doNotSyndicateUtil = {
    hasSystemTag (aggregate) {
        return aggregate._domainModel // The aggregate._domainModel check ensures that it is a Presto Next aggregate
            && aggregate._domainModel.systemTags
            && aggregate._domainModel.systemTags.some((tagId) => tagId === constants.DO_NOT_SYNDICATE_SYSTEM_TAG_ID);
    },
    removeSystemTagsFromAssociatedAssets (associatedAssetIds, userId, systemId) {
        const uniqueAssetIds = _.uniq(associatedAssetIds);
        return Promise.all(uniqueAssetIds.map((aggregateId) => {
            return getByIdAsync(aggregateId, null)
                .then((aggregate) => {
                    if (aggregate._domainModel
                        && aggregate._domainModel.aggregateName === 'image'
                        && !aggregate._domainModel.isOneTimeUse
                        && doNotSyndicateUtil.hasSystemTag(aggregate)) {
                        return doNotSyndicateUtil._removeSystemTag(aggregateId, userId, systemId);
                    }

                    return Promise.resolve({ });
                });
        }));
    },
    _removeSystemTag (aggregateId, userId, systemId) {
        return sendCommandAsync({
            aggregateId,
            commandName: 'removeSystemTag',
            commandArguments: [ constants.DO_NOT_SYNDICATE_SYSTEM_TAG_ID ],
            userId,
            systemId
        }).then(() => {
            return sendCommandAsync({
                aggregateId,
                commandName: 'afterNewCommands',
                commandArguments: [ { commands: [] } ],
                userId,
                systemId
            });
        });
    }
};
