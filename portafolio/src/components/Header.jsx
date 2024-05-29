import React from 'react';
import './Header.css';

function Header() {
    return (
        <header id="header">
            <video autoplay loop id="bg-video">
                <source src="/assets/img/bg.png" type="video/mp4" />
            </video>
            <div className="container-fluid">
                <div className="row">
                    <div className="svg-wrapper">
                        {/* SVG content */}
                    </div>
                    <div className="col-xs-12">
                        <h1 id="name">
                            <span>Bianca Calderón</span>
                        </h1>

                        <hr />
                        <p><span className="lead">Software Engineer</span></p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
