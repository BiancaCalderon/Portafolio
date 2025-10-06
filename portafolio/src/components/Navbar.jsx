import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link activeClass="active" to="about-me" spy={true} smooth={true} duration={500}>About Me</Link></li>
                <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
                <li><Link activeClass="active" to="skillset" spy={true} smooth={true} duration={500}>Skill Set</Link></li>
                <li><Link activeClass="active" to="experience" spy={true} smooth={true} duration={500}>Experience</Link></li>
                <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

