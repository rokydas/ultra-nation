import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const handleAddCountry = (country) => {
        // console.log(country.name, 'is added');
        const newAddedCountry = [...addedCountry, country];
        setAddedCountry(newAddedCountry);
      };
    
      const [countries, setCountries] = useState([]);
      const [addedCountry, setAddedCountry] = useState([]);
    
      useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch(error => console.log(error))
      }, [])
      console.log(countries);
    return (
        <div>
            <h1>Countries data loaded: {countries.length}</h1>
            <h3>Countries added: {addedCountry.length}</h3>
            <div className="countries-box">
                {
                countries.map(country => <Country handleAddCountry={handleAddCountry} info={country} key={country.alpha3Code}></Country>)
                }
            </div>
        </div>
    );
};

export default Home;