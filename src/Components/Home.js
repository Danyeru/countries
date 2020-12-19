import React from "react";

export const Home = () => {
  return (
    <div className="flex flex-col container mx-auto h-screen text-center justify-center items-center">
      <h2 className="text-6xl">Welcome to Countries App</h2>
      <h3 className="text-2xl mt-3">
        If you need to know any fact about a country you are in the rigth place.
      </h3>
      <p className="mt-4">
        Please use our search box to find any country with it´s name or
        alpha2Code. The auto complete will help you with your task.
        <i className="fa fa-search" aria-hidden="true"></i> <br /> If you want
        to refine your search click on filter button there you can use the
        language, currency or region filters.
        <i className="fa fa-filter " aria-hidden="true"></i> <br /><strong>Keep in mind that both the menu and the search autocomplete are updated by the filters so no worries!!!</strong> <br /> Or if
        instead you only want to pass the time use our menu{" "}
        <i className="fa fa-bars  " aria-hidden="true"></i> with all the
        countries listed. Enjoy!!!
      </p>
    </div>
  );
};
