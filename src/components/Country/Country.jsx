import { useState } from "react";
import "./Country.css";

const Country = ({ country, handelvisitedcountry }) => {
    const { name, languages, flags, capital, continents } = country;

    // Get the first language from the languages object
    const primaryLanguage = languages ? Object.values(languages)[0] : "N/A";
    // Get the first capital from the capital array
    const primaryCapital = capital && capital.length > 0 ? capital[0] : "N/A";
    const primarycontinents = continents && continents.length > 0 ? continents[0] : "N/A";

    const [visited, setvisited] = useState(false);
    const handelVisited = () => {
        setvisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited-bg'}`}>
            <h1>Country Name: {name?.common}</h1>
            <h2>Primary Language: {primaryLanguage}</h2>
            <h2>Capital: {primaryCapital}</h2>
            <h2>Continents: {primarycontinents}</h2>
            <img src={flags?.png} alt={`${name.common} flag`} />
            <button className={`${visited ? 'btn-bg2' : 'btn-bg1'}`} onClick={() => handelvisitedcountry(country)}>Add Visited</button>
            <button className={`${visited ? 'btn-bg2' : 'btn-bg1'}`} onClick={handelVisited}>{visited ? "Visited" : "GOO"}</button>
            <p>{visited ? "hiiiiiii" : "vaaaaaaaaa"}</p>
        </div>
    );
};

export default Country;
