import React from 'react';
import './AboutMe.css'; 

function AboutMe() {
    return (
        <section id="about-me" className="even section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h2>About Me</h2>
                        <hr className="section-hr" />
                        <p>Soy estudiante de tercer año y estudio Ingeniería en Ciencias de la Computación y Tecnologías de la Información.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
