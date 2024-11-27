import { BrowserRouter, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Countries from "./components/Countries";
import Details from "./components/Details";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("idle");

  useEffect(() => {
    async function fetchData() {
      let response, data;
      try {
        setFetchStatus("Loading");
        response = await fetch("https://restcountries.com/v3.1/name/kingdom");
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

  return (
    <BrowserRouter>
      <div className="content">
        <h1>World Kingdoms</h1>

        <Dropdown countries={countries} />

        <Routes>
          <Route path="/" element={<h2> </h2>} />
          
          <Route path="/countries" element={<Countries countries={countries} />} />

          <Route path="/countries/:cca2" element={<Details />} />
        </Routes>

        <Outlet />
      </div>
    </BrowserRouter>
  );
}

function Dropdown({ countries }) {
  const navigate = useNavigate();

  function handleCountrySelect(e) {
    const selectedCountryCode = e.target.value;

    if (selectedCountryCode === "") {
      navigate("/");
    } else {
      const selectedCountry = countries.find(
        (country) => country.cca2 === selectedCountryCode
      );
      if (selectedCountry) {
        navigate(`/countries/${selectedCountry.cca2}`, {
          state: { data: selectedCountry }, 
        });
      }
    }
  }

  return (
    <div>
      {countries.length > 0 ? (
        <>
          <select onChange={handleCountrySelect}>
            <option value="">Select a Country</option>
            {countries.map((country) => (
              <option key={country.cca2} value={country.cca2}>
                {country.name.official}
              </option>
            ))}
          </select>
        </>
      ) : (
        <p>Loading kingdoms...</p>
      )}
    </div>
  );
}
