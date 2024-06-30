import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedcountry, setvisitedcountry] = useState([]);

    const handelvisitedcountry = country => {
        console.log(country);
        const newVisitedcountry = [...visitedcountry, country];
        setvisitedcountry(newVisitedcountry);
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            <div>
                <h2>My Visited Countrys</h2>
                <h1>Countries: {visitedcountry.length}</h1>
                <ul>
                    {visitedcountry.map(country => <li key={country.cca3}> {country.name.common}</li>)}
                </ul>
            </div>
            <div className="countries-gre">
                {
                    countries.map(country => <Country key={country.cca3} handelvisitedcountry={handelvisitedcountry} country={country} />)
                }
            </div>
        </div>
    );
};

export default Countries;
