import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props);
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country-box">
            <h4>Country name: {props.info.name}</h4> 
            <p>Population: {props.info.population}</p>
            <img src={props.info.flag} alt=""/><br/>
            <button onClick={() => handleAddCountry(props.info)}>Add Country</button>
        </div>
    );
};

export default Country;