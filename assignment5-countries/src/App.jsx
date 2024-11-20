import { useState, useEffect } from "react";
import "./App.css";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [continentFilter, setContinentFilter] = useState("All");
  const [subregionFilter, setSubregionFilter] = useState("All");
  const [fetchStatus, setFetchStatus] = useState("idle");

  const [sortAlphabetically, setSortAlphabetically] = useState(false);
  const [topByPopulation, setTopByPopulation] = useState(false);
  const [topByArea, setTopByArea] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let response, data;
      try {
        setFetchStatus("Loading");
        response = await fetch(`https://restcountries.com/v3.1/all`);
        data = await response.json();
        setCountries(data);
        setFetchStatus("idle");
      } catch (e) {
        setFetchStatus("error");
        console.log(e.message);
      }
    }

    fetchData();
  }, []);

  const filteredCountries = countries.filter(country => {
    const byContinent = continentFilter === "All" || country.continents.includes(continentFilter);
    const bySubregion = subregionFilter === "All" || country.subregion === subregionFilter;
    return byContinent && bySubregion;
  });

  let sortedCountries = [...filteredCountries];
  if (sortAlphabetically) {
    sortedCountries = sortedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }

  if (topByPopulation) {
    sortedCountries = sortedCountries.sort((a, b) => b.population - a.population).slice(0, 10);
  } else if (topByArea) {
    sortedCountries = sortedCountries.sort((a, b) => b.area - a.area).slice(0, 10);
  }

  function handleContinentChange(e) {
    setContinentFilter(e.target.value);
    setSubregionFilter("All");
  }

  function handleSubregionChange(e) {
    setSubregionFilter(e.target.value);
    setContinentFilter("All");
  }

  function handleSortChange(e) {
    setSortAlphabetically(e.target.checked);
  }

  function handleTopPopulationChange(e) {
    setTopByPopulation(e.target.checked);
    setTopByArea(false);
  }

  function handleTopAreaChange(e) {
    setTopByArea(e.target.checked);
    setTopByPopulation(false);
  }

  const uniqueSubregions = [...new Set(countries.map(country => country.subregion).filter(Boolean))];

  return (
    <div>
      <h1>Countries of the World</h1>
      <form>
        <h2>Filter & Sort</h2>
        <div className="filterOptions">
          <label>
            <input type="checkbox" checked={sortAlphabetically} onChange={handleSortChange} className="checkBox" />
            Sort Alphabetically

          </label>

          <label>
            Show Top 10
            <div className="topFilter">
              <div className="topCheckbox">
                <input type="checkbox" checked={topByPopulation} onChange={handleTopPopulationChange} className="checkBox" /> 
                by population
              </div>
              <div className="topCheckbox">
                <input type="checkbox" checked={topByArea} onChange={handleTopAreaChange} className="checkBox" /> 
                by area
              </div>
            </div>
          </label>

          <label className="byLocation">
            By Continent:
            <select value={continentFilter} onChange={handleContinentChange}>
              <option value="All">All</option>
              <option value="Antarctica">Antarctica</option>
              <option value="North America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Oceania">Oceania</option>
              <option value="South America">South America</option>
            </select>
          </label>

          <label className="byLocation">
            By Subregion:
            <select value={subregionFilter} onChange={handleSubregionChange}>
              <option value="All">All</option>
              {uniqueSubregions.map((subregion, index) => (
                <option key={index} value={subregion}>{subregion}</option>
              ))}
            </select>
          </label>
        </div>
      </form>

      {fetchStatus === "Loading" && <p>Loading...</p>}
      {fetchStatus === "error" && <p>Error getting data!</p>}

      <Countries countries={sortedCountries} />
    </div>
  );
}

export default App;
