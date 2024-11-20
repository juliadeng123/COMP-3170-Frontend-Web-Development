import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <>
        <Outlet />
        <nav style= {{display: "flex", gap: "1em"}}>
            <Link to="/">Home</Link>
            <Link to="/About">About Us</Link>
            <Link to="/Contact">Contact Us</Link>
        </nav>
        </>
    );
}