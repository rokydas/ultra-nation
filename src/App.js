import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  }, [])
  return (
    <div className="App">
      <h1>Countries data loaded: {countries.length}</h1>
    </div>
  );
}

export default App;
