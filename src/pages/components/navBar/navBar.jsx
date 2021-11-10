import React from "react"
import { Link } from "react-router-dom";
import Logo from "../../../files/logo.jpg"
import "./navBar.scss"

const navbar = () => {
    return (
        <div className="outDiv">
            <div className="logoDiv">
                <img src={Logo}/>
            </div>
            <div className="menu">
                <Link to="/">About Us</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/searchingPage">Services</Link>
            </div>
            <div className="buttons">
                <button> Login </button><button> Register </button>
                
            </div>
        </div>
    );
};

export default navbar;