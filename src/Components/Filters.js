import React, { useCallback, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useForm } from "../hooks/useForms";

export const Filters = ({ handleSetQuery, filterState }) => {
  const [{ lang, curren, subreg }, handleInputChange, reset] = useForm({
    lang: "",
    curren: "",
    subreg: "",
  });

  const langugeQuery = `query{Language{name nativeName }}`;
  const { data: language } = useFetch(langugeQuery);
  const [languages, setLanguages] = useState(null);

  const currencyQuery = `query{Currency{name code symbol}}`;
  const { data: currency } = useFetch(currencyQuery);
  const [currencies, setCurrencies] = useState(null);

  const subRegionQuery = `query{Subregion{name}}`;
  const { data: subRegion } = useFetch(subRegionQuery);
  const [subregions, setSubregions] = useState(null);
  useEffect(() => {
    if (language !== null) {
      setLanguages(language.data.Language);
    }
    if (currency !== null) {
      setCurrencies(currency.data.Currency);
    }
    if (subRegion !== null) {
      setSubregions(subRegion.data.Subregion);
    }
  }, [language, currency, subRegion]);
  //console.log(subregions);

  const fullReset = useCallback(() => {
    reset();
  }, [reset]);

  if (lang !== "") {
    let curren = document.querySelectorAll("#curren option");
    for (let i = 0, l = curren.length; i < l; i++) {
      curren[i].selected = curren[i].defaultSelected;
    }
    let subreg = document.querySelectorAll("#subreg option");
    for (let i = 0, l = subreg.length; i < l; i++) {
      subreg[i].selected = subreg[i].defaultSelected;
    }
  }

  if (curren !== "") {
    let lang = document.querySelectorAll("#lang option");
    for (let i = 0, l = lang.length; i < l; i++) {
      lang[i].selected = lang[i].defaultSelected;
    }
    let subreg = document.querySelectorAll("#subreg option");
    for (let i = 0, l = subreg.length; i < l; i++) {
      subreg[i].selected = subreg[i].defaultSelected;
    }
  }

  if (subreg !== "") {
    let lang = document.querySelectorAll("#lang option");
    for (let i = 0, l = lang.length; i < l; i++) {
      lang[i].selected = lang[i].defaultSelected;
    }
    let curren = document.querySelectorAll("#curren option");
    for (let i = 0, l = curren.length; i < l; i++) {
      curren[i].selected = curren[i].defaultSelected;
    }
  }

  useEffect(() => {
    if (lang !== "") {
      handleSetQuery(
        `query{Language(name:"${lang}"){countries{name alpha2Code}}}`
      );
      fullReset(); //handleFullReset();
    }
    if (curren !== "") {
      handleSetQuery(
        `query{Currency(code:"${curren}"){countries{name alpha2Code}}}`
      );
      fullReset(); //handleFullReset();
    }
    if (subreg !== "") {
      handleSetQuery(
        `query{Subregion(name:"${subreg}"){countries{name alpha2Code}}}`
      );
      fullReset(); // handleFullReset();
    }
  }, [lang, curren, subreg, handleSetQuery, fullReset]);

  const handleReset = () => {
    let lang = document.querySelectorAll("#lang option");
    for (let i = 0, l = lang.length; i < l; i++) {
      lang[i].selected = lang[i].defaultSelected;
    }
    let curren = document.querySelectorAll("#curren option");
    for (let i = 0, l = curren.length; i < l; i++) {
      curren[i].selected = curren[i].defaultSelected;
    }
    let subreg = document.querySelectorAll("#subreg option");
    for (let i = 0, l = subreg.length; i < l; i++) {
      subreg[i].selected = subreg[i].defaultSelected;
    }
    handleSetQuery(`query{Country{name alpha2Code}}`);
    reset();
  };
  return (
    <div
      className={
        "flex w-full p-5 bg-gray-700 absolute -top-40 md:-top-5 shadow-lg z-10 flex-row items-end transition duration-500 ease-in-out transform" +
        (filterState === false ? " translate-y-full	" : " translate-y-0")
      }
    >
      <form className="w-full flex flex-col md:flex-row align-bottom ">
        {languages !== null ? (
          <div className="w-full md:w-1/3 flex flex-col px-2">
            <label className="text-white" htmlFor="languges">
              Choose a language:
            </label>

            <select
              className="w-full mt-1 rounded p-2"
              name="lang"
              id="lang"
              onChange={handleInputChange}
            >
              <option value="">Languages</option>
              {languages.map((lang, i) => (
                <option value={lang.name} key={i}>
                  {lang.name} - {lang.nativeName}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        {currencies !== null ? (
          <div className="w-full mt-2 md:w-1/3 md:mt-0 flex flex-col px-2">
            <label className="text-white" htmlFor="currencies">
              Choose a currencie:
            </label>

            <select
              className="w-full mt-1 rounded p-2"
              name="curren"
              id="curren"
              onChange={handleInputChange}
            >
              <option value="">Currencies</option>
              {currencies.map((curr, i) => (
                <option value={curr.code} key={i}>
                  {curr.name} - {curr.code} - {curr.symbol}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        {subregions !== null ? (
          <div className="w-full mt-2 md:w-1/3 md:mt-0 flex flex-col px-2">
            <label className="text-white" htmlFor="subregions">
              Choose a subregion:
            </label>

            <select
              className="w-full mt-1 rounded p-2"
              name="subreg"
              id="subreg"
              onChange={handleInputChange}
            >
              <option value="">Subregions</option>
              {subregions.map((sub, i) =>
                sub.name !== "" ? (
                  <option value={sub.name} key={i}>
                    {sub.name}
                  </option>
                ) : null
              )}
            </select>
          </div>
        ) : null}
      </form>
      <button
        className="h-1/2 bg-gray-500 text-white px-3 py-1.5 rounded ml-2 hover:bg-red-500 transition-all duration-300 focus:outline-none"
        onClick={() => handleReset()}
      >
        {" "}
        reset
      </button>
    </div>
  );
};
