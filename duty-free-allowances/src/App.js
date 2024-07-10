import React, { useState, useEffect } from 'react';
import './App.css';
import AllowancesDisplay from './components/displayComp';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [sourceCountry, setSourceCountry] = useState('');
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
    <div className="App">
      <h1>Duty-Free Allowances</h1>
      <div>
        <label>
          Source Country:
          <select value={sourceCountry} onChange={e => setSourceCountry(e.target.value)}>
            <option value="">Select a country</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Destination Country:
          <select value={destinationCountry} onChange={e => setDestinationCountry(e.target.value)}>
            <option value="">Select a country</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {allowances && (
        <div>
          <h2>Allowances for {destinationCountry}</h2>
          <AllowancesDisplay allowances={allowances} />
        </div>
      )}
    </div>
  );
};

export default App;