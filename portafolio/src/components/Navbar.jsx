import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div id="nav-parent">
            <nav className="navbar navbar-custom" id="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <div className="brand-content">
                                <img className="img-circle" alt="me" src="./assets/img/me.jpg" />
                                <span id="scrollFade">Bianca Calderón</span>
                                <span className="half-size">Developer</span>
                            </div>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="collapsible">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a id="btn-aboutme" href="#skillset">About Me</a></li>
                            <li className="active"><a id="btn-portfolio" href="#portfolio">Portfolio</a></li>
                            <li><a id="btn-skillset" href="#skillset">Skill Set</a></li>
                            <li><a id="btn-experience" href="#experience">Experience</a></li>
                            <li><a id="btn-contact" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

