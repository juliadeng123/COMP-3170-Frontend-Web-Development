import { useLocation } from "react-router-dom";

export default function Details() {
  const { state } = useLocation();  
  const country = state?.data;

  if (!country) {
    return <p>No country data available</p>;
  }

  const {
    name,
    flags,
    capital,
    region,
    subregion,
  } = country;

  const flagSrc = flags?.svg || "/default-flag.svg";
  const capitalText = capital || "No capital available";
  const regionText = region || "Region information not available";
  const subregionText = subregion || "Subregion information not available";

  return (
    <div>
      <h2>{name?.official || "Country Details"}</h2>
      <img
        src={flagSrc}
        alt={`Flag of ${name?.official}`}
        width={250}
        height={200}
      />
      <p><strong>Capital:</strong> {capitalText}</p>
      <p><strong>Located in:</strong> {regionText} - {subregionText}</p>
    </div>
  );
}
