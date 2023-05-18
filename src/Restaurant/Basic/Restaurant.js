import React, { useState } from "react";
import "./style.css";
import API from "./Api";
import MenuCart from "./MenuCart";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    API.map((e) => {
      return e.category;
    })
  ),
  "All",
];
console.log(uniqueList);

function Restaurant() {
  const [menuData, SetMenuData] = useState(API);
  const [menuList, SetMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      SetMenuData(API);
      return;
    }

    const updateList = API.filter((element) => {
      return element.category === category;
    });
    SetMenuData(updateList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCart data={menuData} />
    </>
  );
}

export default Restaurant;
