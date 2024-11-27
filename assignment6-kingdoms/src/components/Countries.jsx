import { useNavigate } from "react-router-dom";

export default function Countries({ countries }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>List of Kingdoms</h2>
      {countries.length > 0 ? (
        <ul>
          {countries.map((country) => (
            <li key={country.cca2}>
              <button
                onClick={() =>
                  navigate(`/countries/${country.cca2}`, {
                    state: { data: country }, 
                  })
                }
              >
                {country.name.official}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading kingdoms...</p>
      )}
    </div>
  );
}
