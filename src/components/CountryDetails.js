import React, { useState, useEffect } from "react";
import myCountries from '../countries.json'
import CountriesList from "./CountriesList";
import { NavLink } from 'react-router-dom';

function CountryDetails(props) {
    const [country, setCountry] = useState(myCountries[0]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const countryId = props.match.params.id;
        console.log("countryid", countryId)
        const foundCountry = myCountries.find((c) => c.alpha3Code === countryId);
        setCountry(foundCountry);
        console.log("problem", foundCountry)
    }, [props.match.params.id]);


    useEffect(() => {
        return () => {
            console.log('call an api again');
        }
    }, [filter])



    return (
        <>
            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            <div className="col-7">
                <h3>Country Details</h3>
                <h4>Country Name {country.name}</h4>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width:30}}>Capital</td>
                            <td>{country.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {country.area} <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {country.borders.map((border, index) => {
                                        return (
                                            <li key={index}>   <NavLink exact to={`/countries/${border}`}>{country.name}</NavLink>   </li>
                                        );
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CountryDetails;