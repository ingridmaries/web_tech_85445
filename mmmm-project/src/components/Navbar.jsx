import { Link } from "react-router-dom";
import React from "react";
import "../styles/Navbar.css"

const Navbar = ()=> {
    return (
        <nav className="navigation">
            <div className="navigation-menu">
            <ul>
                <li>
                <Link to="/">MMMM Project</Link>
                </li>
                <li>
                <Link to="/documentation">Documentation</Link>
                </li>
                <li>
                <Link to="/disclaimer">Disclaimers</Link>
                </li>
                <li>
                <Link to="/about">About the project</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;