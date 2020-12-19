import React, { useEffect, useRef, useState } from "react";
import { useForm } from "../hooks/useForms";

export const Search = ({ countries, handleClickMenuButton, searchState }) => {
  const [countryName, setCountryName] = useState("");
  const [countryCode, setcountryCode] = useState("");

  const [{ search, kind }, handleInputChange, reset] = useForm({
    search: "",
    kind: "fullname",
  });

  const getCountriesByName = (countName = "") => {
    if (countName === "") {
      return [];
    }
    return countries.filter((count) =>
      count.name.toLowerCase().includes(countName.toLowerCase())
    );
  };
  const getCountriesByCode = (countCode = "") => {
    if (countCode === "") {
      return [];
    }
    return countries.filter((count) =>
      count.alpha2Code.toLowerCase().includes(countCode.toLowerCase())
    );
  };

  //console.log(countries);
  useEffect(() => {
    if (kind === "fullname" && search.length > 1) {
      setCountryName(search);
    } else if (kind === "alpha" && search.length > 0) {
      setcountryCode(search);
    }else if(search.length === 0){
      setcountryCode("")
      setCountryName("")
    }
  }, [search, kind]);

  const searchBox = useRef(null);
  const handleAutoCompleteClickName = (e, value) => {
    e.preventDefault();
    searchBox.current.value = value;
    handleInputChange(searchBox);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (kind === "alpha") {
      const code = countries.filter((count) =>
        count.alpha2Code.toLowerCase().includes(search.toLowerCase())
      );
      handleClickMenuButton(code[0].alpha2Code);
    } else if (kind === "fullname") {
      const code = countries.filter((count) =>
        count.name.toLowerCase().includes(search.toLowerCase())
      );
      handleClickMenuButton(code[0].alpha2Code);
    }

    reset();
  };
  return (
    <div className={"flex w-full p-5 bg-gray-700 absolute -top-1 md:top-2 shadow-lg z-10 transition duration-500 ease-in-out transform " + (searchState === true ? " translate-y-full	" : " translate-x-0")}>
      <form className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="flex w-full">
          <div className="flex w-full relative ">
            <input
              className="w-full px-2 py-2 rounded"
              type="text"
              placeholder="Your search"
              name="search"
              autoComplete="off"
              value={search}
              onChange={handleInputChange}
              ref={searchBox}
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <button
                onClick={(e) => handleSearch(e)}
                type="submit"
                className=" transition-all delay-300 ease-in-out hover:text-indigo-600 focus:outline-none"
              >
                <i className="fa fa-search fa-lg" aria-hidden="true"></i>
              </button>
            </div>
            {countryName !== "" && kind === "fullname" ? (
              <div className="w-full absolute bg-white rounded  max-h-40 top-10 overflow-y-scroll border border-gray-200 shadow">
                {getCountriesByName(countryName).map((count, i) => (
                  <button
                    className="flex w-full flex-row p-2 justify-between text-indigo-600"
                    key={i}
                    onClick={(e) => handleAutoCompleteClickName(e, count.name)}
                  >
                    <div>{count.name}</div> <div>{count.alpha2Code}</div>
                  </button>
                ))}
              </div>
            ) : null}
            {countryCode !== "" && kind === "alpha" ? (
              <div className="w-full absolute bg-white rounded  max-h-40 top-10 overflow-y-scroll border border-gray-200 shadow">
                {getCountriesByCode(countryCode).map((count, i) => (
                  <button
                    className="flex w-full flex-row p-2 justify-between text-indigo-600"
                    key={i}
                    onClick={(e) =>
                      handleAutoCompleteClickName(e, count.alpha2Code)
                    }
                  >
                    <div>{count.alpha2Code}</div> <div>{count.name}</div>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <div
            className="flex w-auto flex-col sm:flex-row ml-2 justify-around"
            onChange={handleInputChange}
          >
            <div className="flex flex-row items-center">
              <input type="radio" id="fullname" name="kind" value="fullname" />
              <label className="text-white ml-1 w-20" htmlFor="fullname">
                Full name
              </label>
            </div>
            <div className="flex flex-row items-center">
              <input type="radio" id="alpha" name="kind" value="alpha" />
              <label className="text-white ml-1" htmlFor="alpha">
                Alpha2Code
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
