import React, {useState} from "react";
import "./qualification.css";
    
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);

    };
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className= {toggleState === 1 
                        ? "qualification__button button--flex qualification__active" 
                        : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                        >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div className= {toggleState === 2 
                        ? "qualification__button button--flex qualification__active" 
                        : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className= {toggleState === 1
                    ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Business Informatics</h3>
                                <span className="qualification__subtitle">Singidunum University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2017 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">First Certificate in English B2</h3>
                                <span className="qualification__subtitle">British Council, Belgrade</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2010 - 2014
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className= {toggleState === 2
                    ? "qualification__content qualification__content-active"
                    : "qualification__content"}>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Junior Software Developer</h3>
                                <span className="qualification__subtitle">Asseco ASEE</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2 months
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification