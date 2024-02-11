import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import GraphicDesign from "./GraphicDesign";

const Skills = () => {
    return (
        <div className="section skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical knowledge</span>

            <div className="skills__container container grid">
                <Frontend />
                <GraphicDesign />
            </div>
        </div>
    )
}

export default Skills