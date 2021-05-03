import PropTypes from 'prop-types';
import Router from 'next/router';
import { FormattedMessage } from 'react-intl';
import Scrollbars from 'react-custom-scrollbars';
import getNavOptions from './config';
import MegaMenu from '../../../components/MegaMenu';
import Icon from '../../../components/Icon';
import './navOptions.less';

function NavOptions({ userInfo }) {
  function onSelect(payload) {
    if (payload.redirect) {
      Router.push(payload.redirect);
    }
  }
  const resources = (userInfo.data && userInfo.data.resources) || [];
  const navOptions = getNavOptions(resources);
  return (
    <Scrollbars style={{ width: 885 }} autoHide autoHideTimeout={500} autoHideDuration={200}>
      <div className="Layout__ProtectedPages__NavOptionsWrap Flex">
        {
        navOptions.map((value, index) => (
          <MegaMenu
            key={value.key}
            disabled={!value.isMenuVisible || !value.menuOptions}
            menuOptions={value.menuOptions || []}
            columnSize={7}
            onSelect={onSelect}
          >
            <div
              tabIndex={index}
              role="button"
              style={{ marginLeft: (index && '24px') }}
              className={`Layout__ProtectedPages__NavOptions__NavItem Outline--None ${((value.menuOptions && value.isMenuVisible) || value.key === 'vts') ? 'Cursor-Pointer' : ''}`}
            >
              <Icon name={value.iconName} />
              <span><FormattedMessage id={value.anchorText} /></span>
            </div>
          </MegaMenu>
        ))
      }
      </div>
    </Scrollbars>
  );
}

NavOptions.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

export default NavOptions;
