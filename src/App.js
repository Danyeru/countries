import React, { useEffect, useState } from "react";
import { Filters } from "./Components/Filters";

import { Header } from "./Components/Header";
import { LoadingScreen } from "./Components/LoadingScreen";
import { MainScreen } from "./Components/MainScreen";
import { Menu } from "./Components/Menu";
import { Search } from "./Components/Search";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [query, setQuery] = useState(`query{Country{name alpha2Code}}`);
  const { data } = useFetch(query);
  const [countries, setCountries] = useState(null);
  const [menuState, setmenuState] = useState(false);
  const [searchState, setSearchState] = useState(false);
  const [filterState, setfilterState] = useState(true);
  const [countrycode, setCountrycode] = useState("");

  useEffect(() => {
    if (data !== null && data.data.Country !== undefined) {
      //   console.log(data.data.Country)
      setCountries(data.data.Country);
    }

    if (data !== null && data.data.Language !== undefined) {
      console.log(data.data.Language[0].countries);
      setCountries(data.data.Language[0].countries);
    }

    if (data !== null && data.data.Currency !== undefined) {
      console.log(data.data.Currency[0].countries);
      setCountries(data.data.Currency[0].countries);
    }

    if (data !== null && data.data.Subregion !== undefined) {
      console.log(data.data.Subregion[0].countries);
      setCountries(data.data.Subregion[0].countries);
    }
    //setCountries(data.data.Country);
  }, [data]);

  const handleSetQuery = (query) => {
    setQuery(query);
  };

  const handleMenuState = () => {
    setmenuState(!menuState);
    if(filterState === false){
      setfilterState(true)
    }
    if(searchState === true){
      setSearchState(false)
    }
  };

  const handleSearchState = () => {
    setSearchState(!searchState);
    if(filterState === false){
      setfilterState(true)
    }
  };
  const handlefilterState = () => {
    setfilterState(!filterState);
    if(searchState === true){
      setSearchState(false)
    }
  };
  // maneja el fetch
  const handleClickMenuButton = (countryCode) => {
    setCountrycode(countryCode);
    setmenuState(false);
    setSearchState(false);
  };

  return (
    <div className="overflow-x-hidden w-screen h-full relative">
      <Header
        handleMenuState={handleMenuState}
        handleSearchState={handleSearchState}
        handlefilterState={handlefilterState}
      />
      {countries !== null ? (
        <>
          <Filters
            handleSetQuery={handleSetQuery}
            filterState={filterState}
          />
          <Search
            searchState={searchState}
            countries={countries}
            handleClickMenuButton={handleClickMenuButton}
          />
          <MainScreen
            countrycode={countrycode}
            handleMenuState={handleMenuState}
          />
          <Menu
            countries={countries}
            menuState={menuState}
            handleClickMenuButton={handleClickMenuButton}
          />
        </>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default App;
