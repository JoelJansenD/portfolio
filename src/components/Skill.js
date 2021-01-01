import React from "react";
import "../style/Skill.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SvgIcon from '@material-ui/core/SvgIcon';

const Skill = ({skill}) => {
    return (
        <div className="skill">
            <img className="icon" src={`${process.env.PUBLIC_URL}/${skill.image}`} />
            <h1 className="skillname">{skill.name}</h1>
            <p className="skilldescription">{skill.description}</p>
            <div className="link">
                <a href="#">Skills &amp; Goals <SvgIcon><ArrowForwardIcon /></SvgIcon></a>
            </div>
        </div>
    );
}

export default Skill;