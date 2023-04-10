import './AppDrawer.css';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import MenuItems from './MenuItems';


function AppDrawer({ menu, handleSelect, select }) {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="menu-icon" onClick={handleToggle}>{open ? <GiHamburgerMenu /> : null}</div>
      <div className={open ? "shade off" : "shade"} onClick={handleToggle}></div>
      <div className={open ? "menu-items closed" : "menu-items"}>
        <h2>{menu.heading}</h2>
        <MenuItems list={menu.items} toggleList={handleToggle} selectList={handleSelect}/>
      </div>
      <div className="selected-item">{select}</div>
    </>
  );
}


export default AppDrawer;
