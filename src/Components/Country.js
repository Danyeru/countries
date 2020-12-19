import React from "react";
import { Map } from "./Map";

export const Country = ({ data }) => {
  const {
    name,
    nativeName,
    capital,
    officialLanguages,
    alpha2Code,
    area,
    population,
    callingCodes,
    currencies,
    demonym,
    flag,
    location,
    regionalBlocs,
    subregion,
  } = data.Country[0];

  return (
    <div className="flex container mx-auto my-5 p-5 flex-wrap">
      <div className=" flex mx-auto  flex-wrap md:flex-nowrap border-b-2 border-gray-400 pb-5">
        <div className="w-full md:max-w-xs md:flex-shrink-0 md:mr-4">
          <img
            className="h-70 w-full object-cover border-2 border-black-500 md:w-80 md:h-48 "
            src={flag.svgFile}
            alt="name"
          />
        </div>
        <div className="flex w-full mt-4 flex-col justify-center items-center md:mt-0">
          <h2 className="text-4xl text-center">{name}</h2>
          <h2 className="text-4xl mt-4 text-red-600">{nativeName}</h2>
        </div>
      </div>
      <div className="flex mt-4 w-full">
        <div className="flex  w-full md:h-3/4 lg:w-2/3 mx-auto flex-wrap">
          <h3 className="text-3xl mb-4">About:</h3>
          <div className="flex w-full justify-between border-b-2 border-dotted border-black mb-4 flex-wrap">
            <h4 className="text-2xl">Location:</h4>
            <h5 className="text-2xl text-indigo-700">
              <span className="text-sm text-black">Latitude:</span>
              {location.latitude}
              <span className="text-sm text-black">, Longitude:</span>
              {location.longitude}
            </h5>
            <div className="w-full mb-2">
              <Map
                latitude={location.latitude}
                longitude={location.longitude}
                name={name}
              />
            </div>
          </div>
          <div className="flex w-full justify-between border-b-2 border-dotted border-black mb-4">
            <h4 className="text-2xl">Alpha2Code:</h4>
            <h5 className="text-2xl text-indigo-700">{alpha2Code}</h5>
          </div>
          <div className="flex w-full justify-between border-b-2 border-dotted border-black mb-4">
            <h4 className="text-2xl">Capital:</h4>
            <h5 className="text-2xl text-indigo-700">{capital}</h5>
          </div>
          {regionalBlocs.length > 0 ? (
            <div className="flex w-full flex-wrap border-b-2 border-dotted border-black mb-4">
              <h4 className="text-2xl w-full mb-2">Regional Blocs:</h4>
              <div className="flex w-full flex-wrap ">
                {regionalBlocs.map((reg, i) => (
                  <div
                    className="flex w-full justify-between mb-2 border-b border-dotted border-gray-500 flex-wrap"
                    key={i}
                  >
                    <h5 className="text-xl text-gray-600">{reg.name}</h5>
                    <h5 className="text-xl text-indigo-700">
                      {reg.acronym}
                      <span className="text-sm text-black"> (Acronym)</span>
                    </h5>
                    {reg.otherNames.length > 0 ? (
                      <div className="flex w-full justify-between pt-2 mb-2 border-t border-dotted border-gray-500 flex-wrap">
                        <h4 className="text-xl w-full mb-2">Other Names:</h4>
                        {reg.otherNames.map((regothenames, i) => (
                          <h5 className="text-xl text-indigo-600 mx-1" key={i}>
                            {regothenames.name}
                          </h5>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          <div className="flex w-full justify-between border-b-2 border-dotted border-black mb-4">
            <h4 className="text-2xl">Subregion: </h4>
            <h5 className="text-2xl text-indigo-700">
              {subregion.name} -{" "}
              {subregion.region.name}
              <span className="text-sm text-black"> (region)</span>
            </h5>
          </div>
          <div className="flex w-full flex-wrap border-b-2 border-dotted border-black mb-4">
            <h4 className="text-2xl w-full mb-2">Oficial Languages:</h4>
            <div className="flex w-full flex-wrap ">
              {officialLanguages.map((lang, i) => (
                <div
                  className="flex w-full justify-between mb-2 border-b border-dotted border-gray-500 "
                  key={i}
                >
                  <h5 className="text-xl text-gray-600">{lang.name}</h5>
                  <h5 className="text-xl text-indigo-700">
                    {lang.nativeName}
                    <span className="text-sm text-black"> (Native name)</span>
                  </h5>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full justify-between border-b-2 border-dotted border-black mb-4">
            <h4 className="text-2xl">Area: </h4>
            <h5 className="text-2xl text-indigo-700">
              {new Intl.NumberFormat().format(area)}{" "}
              <span>
                km<sup>2</sup>
              </span>
            </h5>
          </div>
          <div className="flex w-full justify-between border-b-2 border-dotted border-black mb-4">
            <h4 className="text-2xl">Demonym: </h4>
            <h5 className="text-2xl text-indigo-700">{demonym}</h5>
          </div>
          <div className="flex w-full justify-between border-b-2 border-dotted border-black mb-4">
            <h4 className="text-2xl">Population: </h4>
            <h5 className="text-2xl text-indigo-700">
              {new Intl.NumberFormat().format(population)}{" "}
            </h5>
          </div>
          <div className="flex w-full flex-wrap border-b-2 border-dotted border-black mb-4 ">
            <h4 className="text-2xl w-full mb-2">Currencies:</h4>
            {currencies.map((cur, i) => (
              <div
                className="flex w-full justify-between mb-2 border-b border-dotted border-gray-500"
                key={i}
              >
                <h5 className="text-xl text-gray-600">{cur.name}</h5>
                <h5 className="text-xl text-indigo-700">
                  {cur.symbol}
                  <span className="text-sm text-black"> (Symbol)</span>
                </h5>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-wrap  justify-between border-b-2 border-dotted border-black mb-4">
            <h4 className="text-2xl flex   mb-2">Calling Codes:</h4>
            {callingCodes.map((call, i) => (
              <h5 className="text-xl text-indigo-700" key={i}>
                {call.name}
              </h5>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
