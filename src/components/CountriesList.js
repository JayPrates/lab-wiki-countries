import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { NavLink } from "react-router-dom";
import myCountries from "../countries.json";

function CountriesList() {

    const [countries] = useState(myCountries);

    return (
        <>
            <h3>Countries List</h3>
            <ul>
                <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }} >
                    <div className="list-group">
                        {countries.map((country) => {
                            return (<>
                                <NavLink className="list-group-item list-group-item-action" exact to={`/countries/${country.alpha3Code}`}>{country.name}</NavLink>
                                <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} />
                            </>
                            )
                        })}
                    </div>
                </div>
            </ul>
        </>

    )

}

export default CountriesList;