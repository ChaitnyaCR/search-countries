import React, { useState, useEffect } from "react";
export default function CountryList() {
  const [countries, getCountries] = useState([]);
  const API = "https://restcountries.com/v3.1/all";
  const fetchCountries = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getCountries(res);
      });
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <>
      <h2>React Fetch Data with REST API Example</h2>
      <ul>
        {countries.map((country, i) => {
          return <li key={i}>{country.name.official}</li>;
        })}
      </ul>
    </>
  );
}
