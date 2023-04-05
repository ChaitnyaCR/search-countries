import React from "react";

function LoadingCountries(Component) {
  return function LoadingCountries({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
export default LoadingCountries;
