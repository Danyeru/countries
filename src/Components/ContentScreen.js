import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Country } from "./Country";
import { LoadingScreen } from "./LoadingScreen";

export const ContentScreen = ({ countrycode }) => {
  const query = `query{Country(alpha2Code:"${countrycode}"){name nativeName alpha2Code area population capital demonym location{latitude longitude}subregion{name region{name}}officialLanguages{name nativeName}currencies{name symbol}regionalBlocs{name acronym otherAcronyms{name}otherNames{name}}flag{emoji emojiUnicode svgFile}callingCodes{name}}}`;
  const { data } = useFetch(query);

  return <div>{data === null ? <LoadingScreen /> : <Country {...data} />}</div>;
};
