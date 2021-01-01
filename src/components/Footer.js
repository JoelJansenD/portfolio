import React from "react";
import github from "../static/github.svg"
import linkedin from "../static/linkedin.svg"
import twitter from "../static/twitter.svg"
import "../style/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <img src={github} />
            <img src={linkedin} />
            <img src={twitter} />
        </div>
    )
}

export default Footer;