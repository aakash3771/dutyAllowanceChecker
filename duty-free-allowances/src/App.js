import React, { useState, useEffect } from 'react';
import './App.css';
import AllowancesDisplay from './components/AllowancesDisplay';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [destinationCountry, setDestinationCountry] = useState('');
  const [allowances, setAllowances] = useState(null);

  useEffect(() => {
    // Fetch countries from the JSON data
    fetch('/data/comprehensive-import-allowances.json')
      .then(response => response.json())
      .then(data => {
        setCountries(data.countries.map(country => country.name));
      });
  }, []);

  const handleSubmit = () => {
    // Fetch allowances for the destination country
    fetch('/data/comprehensive-import-allowances.json')
      .then(response => response.json())
      .then(data => {
        const countryData = data.countries.find(country => country.name === destinationCountry);
        setAllowances(countryData);
      });
  };

  return (
    <div className="app-container">
      <div className="vertical-strip left"></div>
      <div className="main-content">
        <h1>Duty-Free Allowances</h1>
        <div className="input-section">
          <label>
            Destination Country:
            <select 
              value={destinationCountry} 
              onChange={e => setDestinationCountry(e.target.value)}
            >
              <option value="">Select a country</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        {allowances && <AllowancesDisplay allowances={allowances} />}
      </div>
      <div className="vertical-strip right"></div>
    </div>
  );
};

export default App;