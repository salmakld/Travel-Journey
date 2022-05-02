import React from "react";
import Logo from "../images/logo.png";
import "../App.css";

export default function Navbar () {
    return (
        <div className="navbar">
            <img src={Logo} alt="Logo" className="navbar--logo" />
            <h1 className="navbar--title"> My Travel Journal </h1>
        </div>
    );
}