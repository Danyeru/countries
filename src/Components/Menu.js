import React from "react";
import { MenuItem } from "./menu/MenuItem";

export const Menu = ({ countries, menuState, handleClickMenuButton }) => {
  return (
    <nav
      className={
        "transition duration-500 ease-in-out transform max-w-sm w-full bg-blue-300 absolute top-20 h-full overflow-y-scroll right-0 " +
        (menuState === false ? " translate-x-full	" : " translate-x-0")
      }
    >
      {countries.map((country, i) => (
        <MenuItem
          key={i}
          name={country.name}
          code={country.alpha2Code}
          handleClickMenuButton={handleClickMenuButton}
        />
      ))}
    </nav>
  );
};
