import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
    return (
        <section className="work__section" id="portfolio">
            <h1 className="section__title">Portfolio</h1>
            <span className="section__subtitle">Most recent work</span>

            <Works />
        </section>
    )
}

export default Work