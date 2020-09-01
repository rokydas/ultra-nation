import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Country from '../Country/Country';

const CountryDetails = () => {
    const {countryName} = useParams();

    const [ countryDetails, setCountryDetails ] = useState([])

    useEffect( () => {
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res => res.json())
        .then(data => setCountryDetails(data))
    }, [])
    
    
    
    return (
        <div>
            {
                countryDetails.map(country => <Country></Country>)
            }
        </div>
    );
};

export default CountryDetails;