import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Country from '../Country/Country';

const CountryDetails = () => {
    const {countryName} = useParams();

    const [ countryDetails, setCountryDetails ] = useState({})

    useEffect( () => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountryDetails(data[0]))
    }, [])
    
    console.log(countryDetails);
    const {name, capital, population} = countryDetails;
    
    
    return (
        <div>
            <h3>Details of {name}</h3>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default CountryDetails;