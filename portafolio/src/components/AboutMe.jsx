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
                        <div className="about-me-content">
                            <p>Mi nombre es <strong>Bianca Calderón</strong>, tengo 20 años y soy estudiante de <strong>Ingeniería en Ciencias de la Computación y Tecnologías de la Información</strong> en la <strong>Universidad del Valle de Guatemala</strong>.</p>
                            <p>Actualmente, estoy cursando mi tercer año de carrera. Me enfoco principalmente en la armonía del frontend, combinando colores y tipografías de manera adecuada.</p>
                            <p>Junto a un grupo de compañeros, estamos desarrollando un proyecto que integra herramientas de backend, frontend y bases de datos. Puedes encontrar este y otros proyectos en mi portafolio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
