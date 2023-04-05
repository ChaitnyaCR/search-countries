import React, { useEffect, useState } from "react";

import CountriesList from "../CountryList/CountriesList";
import LoadingCountries from "../CountryList/LodingCountries";
function ApiCall() {
  //   const CountryListLoading = LoadingCountries(CountriesList);
  const [appState, setAppState] = useState({
    // loading: false,
    countries: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://restcountries.com/v3.1/all`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((countries) => {
        setAppState({ countries: countries });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <div className="repo-container">
        <CountriesList
          //isLoading={appState.loading}
          countries={appState.countries}
        />
      </div>
    </div>
  );
}
export default ApiCall;
