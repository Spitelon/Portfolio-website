import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
            <a href="index.html" className="footer__logo"><img style={{width: "50px"}} src={ require('../../assets/Kdev logo(bez pozadine ).png') } /></a>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/kdev.rs/" className="footer__social-link" target='_blank'>
                        <i className="uil uil-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/kosta-divnic-293769224/" className="footer__social-link" target='_blank'>
                        <i className="uil uil-linkedin"></i>
                    </a>

                    <a href="https://github.com/Spitelon" className="footer__social-link" target='_blank'>
                        <i className="uil uil-github-alt"></i>
                    </a>

                    <a href="https://www.behance.net/kostadivnic" className="footer__social-link" target='_blank'>
                        <i className="uil uil-behance"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Kosta Divnć. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer