import { FormattedMessage } from 'react-intl';
import Collapse from './Collapse';
import MenuItem from './MenuItem';
import Menu from '../Menu';

function SubMenuOptions(option, onSelect, activeMenu, handleMenu) {
  return (
    <Collapse
      option={option}
      subMenuItems={option.subMenuItems}
      onSelect={onSelect}
      key={option.key}
      handleMenu={handleMenu}
      activeMenu={activeMenu}
    >
      <span className="Font--WB"><FormattedMessage id={option.anchorText} /></span>
    </Collapse>
  );
}

function MenuOptions(options, onSelect, columnSize, activeMenu, handleMenu) {
  const menuItems = [];
  let columnData = [];

  for (let item = 0; item < options.length; item += 1) {
    const option = options[item];
    if (option.subMenuItems) {
      columnData.push(SubMenuOptions(option, onSelect, activeMenu, handleMenu));
    } else {
      columnData.push(
        <MenuItem
          handleMenu={handleMenu}
          type="menu"
          onSelect={onSelect}
          item={option}
          disabled={!option.redirect}
          key={option.key}
          style={{ padding: '7px 12px' }}
          className="Font--WB Mt-8"
        />,
      );
    }

    if ((item + 1) % columnSize === 0 || item === options.length - 1) {
      menuItems.push(
        <div
          key={item}
          className={`${item > columnSize - 1 ? 'Divider-Left Ml-8' : ''}`}
          style={{ minWidth: 200 }}
        >
          <div
            className={`Mt--7 ${item > columnSize - 1 ? 'Ml-8' : ''}`}
          >
            {columnData}
          </div>
        </div>,
      );
      columnData = [];
    }
  }

  return (
    <Menu
      style={{
        top: '15px', left: '38px', display: 'flex', padding: '20px 20px',
      }}
    >
      <span className="Arrow-Up" style={{ position: 'absolute', top: '-10px', left: '12px' }} />
      {menuItems}
    </Menu>
  );
}

export default MenuOptions;
