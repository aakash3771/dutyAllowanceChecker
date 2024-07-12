import React, { useState, useEffect } from 'react';
import AllowancesDisplay from './AllowancesDisplay';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [destinationCountry, setDestinationCountry] = useState('');
  const [allowances, setAllowances] = useState(null);

  useEffect(() => {
    fetch('/data/comprehensive-import-allowances.json')
      .then(response => response.json())
      .then(data => {
        setCountries(data.countries.map(country => country.name));
      });
  }, []);

  const handleSubmit = () => {
    fetch('/data/comprehensive-import-allowances.json')
      .then(response => response.json())
      .then(data => {
        const countryData = data.countries.find(country => country.name === destinationCountry);
        setAllowances(countryData);
      });
  };

  return (
    <div className="home-page">
      <h1>Duty-Free Allowances Checker</h1>
      <div className="form-container">
        <label htmlFor="destination-country">Destination Country:</label>
        <select 
          id="destination-country"
          value={destinationCountry} 
          onChange={e => setDestinationCountry(e.target.value)}
        >
          <option value="">Select a country</option>
          {countries.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
        <button onClick={handleSubmit}>Check Allowances</button>
      </div>
      {allowances && <AllowancesDisplay allowances={allowances} />}
    </div>
  );
};

export default Home;