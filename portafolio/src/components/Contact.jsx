import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Section from './Section';
import './Contact.css';

function Contact() {
    return (
        <Section id="contact" title="Contact">
            <div className="row">
                <div className="col-xs-12">
                    <div className="contact-icons">
                        <a href="https://github.com/BiancaCalderon" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/bianca-calder%C3%B3n-8653a722" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Contact;
