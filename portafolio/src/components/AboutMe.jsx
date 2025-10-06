import React from 'react';
import Section from './Section';
import './AboutMe.css';

function AboutMe() {
    return (
        <Section id="about-me" title="About Me">
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-container">
                        <img src="/assets/img/me.jpg" alt="Bianca Calderón" className="profile-pic" />
                        <div className="profile-badge">
                            <span>👩‍💻</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="about-me-content">
                        <div className="intro-section">
                            <p>Mi nombre es <strong>Bianca Calderón</strong>, tengo 21 años y soy estudiante de <strong>Ingeniería en Ciencias de la Computación y Tecnologías de la Información</strong> en la <strong>Universidad del Valle de Guatemala</strong>.</p>
                        </div>
                        
                        <div className="current-status">
                            <p>Actualmente, estoy cursando mi cuarto año de carrera, enfocándome principalmente en la armonía del frontend, combinando colores y tipografías de manera adecuada.</p>
                        </div>
                        
                        <div className="project-highlight">
                            <p>Participé en un proyecto universitario llamado <strong>Sanitas</strong>, desarrollado en un equipo de seis personas. La iniciativa consistió en crear una plataforma de fichas médicas para la enfermería de la universidad, utilizando tecnologías como Vite y React en el frontend y alojando la base de datos en AWS. El proyecto duró un año, desde la planificación y reuniones con enfermeras y líderes del proyecto, hasta la entrega final en noviembre. Trabajamos bajo la metodología Scrum, con reuniones diarias para asegurar un progreso constante.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default AboutMe;
