import React from "react";

export const Header = ({handleMenuState, handleSearchState, handlefilterState}) => {

  return (
    <div className="bg-gray-800 flex justify-between px-5 py-6 relative z-20 shadow-md">
      <h1 className="text-4xl text-white">Countries App</h1>
      <div className="flex w-28 flex-row justify-between ">
      <button className="focus:outline-none  text-white hover:text-gray-300 transition-all duration-300" onClick={handlefilterState}>
        <i className="fa fa-filter fa-lg" aria-hidden="true"></i>
      </button>
      <button className="focus:outline-none  text-white hover:text-gray-300 transition-all duration-300" onClick={handleSearchState}>
        <i className="fa fa-search fa-lg " aria-hidden="true"></i>
      </button>
      <button className="focus:outline-none  text-white hover:text-gray-300 transition-all duration-300" onClick={handleMenuState}>
        <i className="fa fa-bars fa-2x " aria-hidden="true"></i>
      </button>
      </div>
    </div>
  );
};
