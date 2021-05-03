import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import MenuOptions from './MenuOptions';
import './megaMenu.less';

function MegaMenu({
  disabled,
  menuOptions,
  placement,
  style,
  trigger,
  overlayClassName,
  onSelect: _onSelect,
  children,
  columnSize,
}) {
  const [dropDownVisible, handleDropDownVisible] = useState(false);
  const [activeMenu, handleMenu] = useState('');
  useEffect(() => {
    if (!dropDownVisible) {
      handleMenu('');
    }
  }, [dropDownVisible]);

  function onSelect(event, payload) {
    event.preventDefault();
    _onSelect(payload);
    handleDropDownVisible(false);
  }

  return (
    <Dropdown
      disabled={disabled}
      overlay={
        MenuOptions(menuOptions, onSelect, columnSize, activeMenu, handleMenu)
      }
      placement={placement}
      style={style}
      trigger={trigger}
      overlayClassName={`MegaMenu ${overlayClassName}`}
      visible={dropDownVisible}
      onVisibleChange={handleDropDownVisible}
    >
      {children}
    </Dropdown>
  );
}

MegaMenu.defaultProps = {
  disabled: true,
  placement: 'bottomLeft',
  style: { left: '257px' },
  trigger: ['click'],
  overlayClassName: '',
  menuOptions: [],
  columnSize: 6,
  onSelect: () => {},
};

MegaMenu.propTypes = {
  children: PropTypes.element.isRequired,
  menuOptions: PropTypes.array,
  disabled: PropTypes.bool,
  placement: PropTypes.string,
  style: PropTypes.object,
  trigger: PropTypes.array,
  overlayClassName: PropTypes.string,
  columnSize: PropTypes.number,
  onSelect: PropTypes.func,
};

export default MegaMenu;
