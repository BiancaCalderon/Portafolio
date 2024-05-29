import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
    return (
        <section id="contact" className="even section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Contact</h2>
                        <hr className="section-hr" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="contact-icons">
                            <a href="https://github.com/BiancaCalderon" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/bianca-calder%C3%B3n-8653a722" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
