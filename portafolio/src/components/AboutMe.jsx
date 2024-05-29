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
                        <p>Mi nombre es Bianca Calderón, tengo 20 años de edad y soy estudiante de Ingeniería en Ciencias de la Computación y Tecnologías de la Información en la Universidad del Valle de Guatemala. 
                            Actualmente, estoy cursando mi tercer año de carrera. Me enfoco principalmente en la armonía del frontend, combinando colores y tipografías de manera adecuada.
                            Junto a un grupo de compañeros, estamos desarrollando un proyecto que integra herramientas de backend, frontend y bases de datos. Puedes encontrar este y otros proyectos en mi portafolio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
