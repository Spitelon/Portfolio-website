import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Frontend <br /> Developer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More <i
                        className="uil uil-arrow-right 
                services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Frontend Developer</h3>
                            <p className="services__modal-description">Service
                                with more than 1 year of expirience.
                                Providing quality work to clients and
                                companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create ux element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Development using HTML, CSS, Javascript and React.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop website from scratch.</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="bx bxs-pen services__icon"></i>
                        <h3 className="services__title">Graphic <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More <i
                        className="uil uil-arrow-right 
                services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Graphic Designer</h3>
                            <p className="services__modal-description">Service
                                with more than 1 year of expirience.
                                Providing quality work to clients and
                                companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Brand identity design.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Webiste design.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and preparation for printing.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                
                <div className="services__content">
                    <div>
                        <i className="bx bxl-wordpress services__icon"></i>
                        <h3 className="services__title">Wordpress <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More <i
                        className="uil uil-arrow-right 
                services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Wordpress Designer</h3>
                            <p className="services__modal-description">Service
                                with more than 1 year of expirience.
                                Providing quality work to clients and
                                companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I design the user interface using wordpress themes.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I take care of hosting and domain for a client.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create ux element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I take care of websites security and protect it from malware, spams, bots and cyber attacks. </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Optimize SEO for a webiste.</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services