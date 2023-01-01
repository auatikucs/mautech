import React from "react";
import MenuItems from "./MenuItems";

export default function DropDown({ submenus, dropdown, depthLevel }) {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu}
          // ...
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
}
