import React from 'react';
import './Header.css';

function Header() {
    return (
        <header id="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="svg-wrapper">
                        {}
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
