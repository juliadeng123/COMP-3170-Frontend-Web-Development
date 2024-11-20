export default function Countries({ countries }) {
    
    return (
        <div className="countries-list">
            {
            countries.map((country) => (
            <div className="country">
                <div className="countryHeading">
                    <img
                        src={country.flags.svg}
                        alt={`Flag of ${country.name.common}`}
                        width={150}
                        height={100}
                    />
                    <h3>{country.name.common}</h3>
                </div>
            <div className="countryDetails">
                <p className="detail">
                    <strong>Official name: </strong>
                    {country.name.official}</p>
                <p className="detail">
                    <strong>Capital: </strong>
                    {country.capital}</p>
                <p className="detail"><strong>Population: </strong>{country.population}</p>
                <p className="detail"><strong>{`Area (mi²): `}</strong>{country.area}</p>
                <p className="detail"><strong>Continents: </strong>{country.continents}</p>
                <p className="detail"><strong>Subregion: </strong>{country.subregion}</p>
                </div>
            </div>
            ))}
        </div>
    );
}