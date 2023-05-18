import React from "react";
import "./style.css";

export default function Navbar({ filterItem, menuList }) {
  return (
    <div>
      <nav className='navbar'>
        <div className='btn-group'>
          {menuList.map((e) => {
            return (
              <button className='btn-group__item' onClick={() => filterItem(e)}>
                {e}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
