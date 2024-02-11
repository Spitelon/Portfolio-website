import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_y0643ok', 'template_wy4fde9', form.current, 'zgk-9se4fp5fJjIQd')
      e.target.reset()
    };

    return (

        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">kostadivnic98@gmail.com</span>

                            <a href="mailto:kostadivnic98@gmail.com.com" className="contact__button">Write me<i className="contact__button-icon bx bx-right-arrow-alt"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bx-phone contact__card-icon"></i>

                            <h3 className="contact__card-title">Viber</h3>
                            <span className="contact__card-data">+381 64 469 7171</span>

                            <a href="https://www.viber.com/en/" className="contact__button">Write me <i className="contact__button-icon bx bx-right-arrow-alt"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-instagram contact__card-icon"></i>

                            <h3 className="contact__card-title">Instagram</h3>
                            <span className="contact__card-data">@kdev.rs</span>

                            <a href="https://www.instagram.com/kdev.rs/" className="contact__button">Write me <i className="contact__button-icon bx bx-right-arrow-alt"></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name="name" className="contact__form-input" placeholder="Insert your name"/>
                    </div>
               
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type="email" name="email" className="contact__form-input" placeholder="Insert your email"/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Project</label>
                        <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Write you project..."></textarea>
                    </div>
                    <button className="button button--flex">
                    Send Message&nbsp;&nbsp;
                    <i className="uil uil-message"></i>
                </button>
                </form>
                </div>
            </div>
        </section>
    )
}

export default Contact