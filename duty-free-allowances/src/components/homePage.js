import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import AllowancesDisplay from './AllowancesDisplay';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [allowances, setAllowances] = useState(null);

  useEffect(() => {
    fetch('/data/comprehensive-import-allowances.json')
      .then(response => response.json())
      .then(data => {
        const options = data.countries.map(country => ({
          value: country.name,
          label: country.name
        }));
        setCountries(options);
      });
  }, []);

  const handleSubmit = () => {
    if (selectedCountry) {
      fetch('/data/comprehensive-import-allowances.json')
        .then(response => response.json())
        .then(data => {
          const countryData = data.countries.find(country => country.name === selectedCountry.value);
          setAllowances(countryData);
        });
    }
  };

  return (
    <div className="home-page">
      <h1>Duty-Free Allowances Checker</h1>
      <div className="form-container">
        <label htmlFor="destination-country">Destination Country:</label>
        <Select
          id="destination-country"
          options={countries}
          value={selectedCountry}
          onChange={setSelectedCountry}
          placeholder="Select a country"
        />
        <button onClick={handleSubmit} disabled={!selectedCountry}>Check Allowances</button>
      </div>
      {allowances && <AllowancesDisplay allowances={allowances} />}
    </div>
  );
};

export default Home;