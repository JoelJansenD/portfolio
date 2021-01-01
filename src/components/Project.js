import React from "react";
import "../style/Project.css";

const Project = ({project}) => {
    return (
        <div className="project">
            <div className="projectinfo">
                <span className="projecttype">{project.type}</span>
                <h1 className="projectname">{project.name}</h1>
                <p className="projectdescription">{project.description}</p>
            </div>
            <img src={`${process.env.PUBLIC_URL}/${project.image}`} />
        </div>
    )
};

export default Project;