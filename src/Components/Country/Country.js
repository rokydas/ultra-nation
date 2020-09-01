import React from 'react';
import './Country.css';
import { useHistory } from 'react-router-dom';

const Country = (props) => {
    // console.log(props);
    const handleAddCountry = props.handleAddCountry;

    const history = useHistory();

    const seeDetails = (countryName) => {
        history.push(`/details/${countryName}`)
    }

    return (
        <div className="country-box">
            <h4>Country name: {props.info.name}</h4> 
            <p>Population: {props.info.population}</p>
            <img src={props.info.flag} alt=""/><br/>
            <button onClick={() => handleAddCountry(props.info)}>Add Country</button>
            <button onClick={() => seeDetails(props.info.name)}>See Details</button>
        </div>
    );
};

export default Country;