import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

function Collapse({
  option,
  children,
  subMenuItems,
  onSelect,
  activeMenu,
  handleMenu,
}) {
  function handleClick() {
    if (activeMenu === option.key) {
      handleMenu('');
    } else {
      handleMenu(option.key);
    }
  }
  function handleKeyPress(event) {
    // event.which returns the keyCode for firefox
    const keyCode = event.which || event.keyCode;
    if (keyCode === 13) {
      handleClick();
    }
  }
  return (
    <>
      <div
        role="button"
        className="BorderRadius--Base Item Outline--None Cursor-Pointer Mt-5"
        style={{ padding: '7px 12px' }}
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
      >
        {children}
      </div>
      {
        activeMenu === option.key
        && (
          <div>
            {
              subMenuItems.map((subMenuItem) => (
                <MenuItem
                  className="Gray40-Text Ml-12 Mt-4"
                  onSelect={onSelect}
                  item={subMenuItem}
                  key={subMenuItem.key}
                  disabled={!subMenuItem.redirect}
                />
              ))
            }
          </div>
        )
      }
    </>
  );
}

Collapse.propTypes = {
  option: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  subMenuItems: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  activeMenu: PropTypes.string.isRequired,
  handleMenu: PropTypes.func.isRequired,
};

export default Collapse;
