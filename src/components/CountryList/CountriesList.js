import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

const CountriesList = (props) => {
  const { countries } = props;
  if (!countries || countries.length === 0) return <p>No countries, sorry</p>;
  return (
    <ul className="list-group list-group-flush">
      {countries.map((country) => {
        return (
          <li key={country.id} className="list-group-item rounded mb-1">
            <div className="row justify-content-center">
              <div className="col-1">
                <img
                  src={country.flags.png}
                  className=""
                  height={30}
                  width={30}
                  loading="lazy"
                  style={{ borderRadius: "50%" }}
                  alt="..."
                ></img>
              </div>
              <div className="col-3">{country.name.official} </div>
              <div className="col-2">{country.capital} </div>
              <div className="col-2 ">
                <span className="badge text-bg-info">
                  {" "}
                  {country.population}
                </span>
              </div>
              <div className="col-4 justify-content-center">
                {country.timezones}{" "}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default CountriesList;
