import React, { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/region/asia";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const fetchCountriesData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };
  useEffect(() => {
    fetchCountriesData();
  }, []);
  return (
    <>
      <button className="refreshButton" onClick={fetchCountriesData}>
        Refresh
      </button>
      <section className="grid">
        {countries.map((country) => {
          console.log(country);
          const { common: countryName } = country.name;
          const { png: countryFlag } = country.flags;
          const { capital, region, subregion, population, borders, languages } =
            country;
          console.log("Border", borders);
          return (
            <article key={countryName}>
              <div>
                <img src={countryFlag} alt={countryName} />
                <div className="details">
                  <h3>{countryName}</h3>
                  <h4>
                    Capital: <span>{capital}</span>
                  </h4>
                  <h4>
                    Region: <span>{region}</span>
                  </h4>
                  <h4>
                    SubRegion: <span>{subregion}</span>
                  </h4>
                  <h4>
                    Population: <span>{population}</span>
                  </h4>
                  <h4>
                    Borders:{" "}
                    <span>{borders ? borders.join(", ") : "No Border's"}</span>
                  </h4>
                  <h4>
                    Languages:{" "}
                    <span>{Object.values(languages).join(", ")}</span>
                  </h4>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
