import React from "react";

export const MenuItem = ({ name, code, handleClickMenuButton }) => {
  return (
    <button
      onClick={() => handleClickMenuButton(code)}
      className="w-full p-4 text-right border-t-2 border-blue-400 text-lg hover:bg-blue-400 focus:outline-none transition ease-out duration-300"
    >
      {name}
    </button>
  );
};
