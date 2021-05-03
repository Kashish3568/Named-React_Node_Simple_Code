import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function defaultHandleMenu(event) {
  event.preventDefault();
}

function MenuItem({
  item,
  onSelect,
  style,
  className,
  type,
  handleMenu,
  disabled,
}) {
  function handleClick(event) {
    if (disabled) {
      return;
    }
    if (type === 'menu') {
      handleMenu(item.key);
    }
    onSelect(event, item);
  }
  function handleKeyPress(event) {
    if (disabled) {
      return;
    }
    // event.which returns the keyCode for firefox
    const keyCode = event.which || event.keyCode;
    if (keyCode === 13) {
      if (type === 'menu') {
        handleMenu(item.key);
      }
      onSelect(event, item);
    }
  }
  return (
    <div
      className={`BorderRadius--Base Item Outline--None ${!disabled ? 'Cursor-Pointer' : ''} ${className}`}
      style={style}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
    >
      <FormattedMessage id={item.anchorText} />
    </div>
  );
}

MenuItem.defaultProps = {
  className: '',
  style: { padding: '7px 16px' },
  type: 'sub_menu',
  handleMenu: defaultHandleMenu,
  disabled: false,
};

MenuItem.propTypes = {
  handleMenu: PropTypes.func,
  item: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default MenuItem;
