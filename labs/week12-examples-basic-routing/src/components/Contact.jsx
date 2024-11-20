import { useParams, useLocation } from "react-router-dom";

export default function Contact() {
    const params = useParams();
    const location = useLocation();
    
    const searchParams = new URLSearchParams(location.search);

    return (
        <>
        <h1>Contact Page</h1>
        <p>My name is {params.name}</p>

        <p>I am learning {searchParams.get("course")}</p>

        <pre style={{ textAlign: "left"}}>
            <code>{JSON.stringify(params, null, 2)}</code>
        </pre>
        
        <pre style={{ textAlign: "left"}}>
            <code>{JSON.stringify(location, null, 2)}</code>
        </pre>
        </>
    );
}