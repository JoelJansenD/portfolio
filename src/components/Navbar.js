import React from "react";
import github from "../static/github.svg"
import linkedin from "../static/linkedin.svg"
import twitter from "../static/twitter.svg"
import "../style/Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="brand">JoelJansenD</div>
            <span className="navitems">
                <a href="#" className="navitem">Skills &amp; Goals</a>
                <a href="#" className="navitem">Projects</a>
                <a href="#" className="navitem">Contact</a>
            </span>
            <span className="social">
                <img src={github} />
                <img src={linkedin} />
                <img src={twitter} />
            </span>
        </div>
    );
}

export default Navbar;