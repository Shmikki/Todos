import React from "react";
import "./Navbar.css"
import {NavLink} from "react-router-dom";

export const NavBar:React.FC = () => {


    return (
        <nav>
            <div className="nav-wrapper pd #64b5f6 blue lighten-1">
                <NavLink to="/" className="brand-logo">To do list</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">To-Do List</NavLink></li>
                    <li><NavLink to="/info">INFO</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}