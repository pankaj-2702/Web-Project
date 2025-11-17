import React from "react";
import "./menu.css";
import { menuData } from "./menuData";
function Menu() {
 
  return (
    <div className="menu-container" >
      <h1 className="menu-heading">Our Menu</h1>
      <p className="menu-subtext">Freshly made with love and care</p>

      <div className="menu-grid">
        {menuData.map((item) => (
          <div className="menu-card" key={item.id}>
            <h3>{item.name}</h3>
            <p className="desc">{item.desc}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
