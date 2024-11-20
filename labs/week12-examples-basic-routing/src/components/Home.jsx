import { Outlet, Link, NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
        <>
        <Outlet />
        <nav style= {{display: "flex", gap: "1em"}}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About Us</NavLink>
            <NavLink to="/Contact" state={{ course: "Javascript" }}>Contact Us</NavLink>
        </nav>
        </>
        </>
    );
}