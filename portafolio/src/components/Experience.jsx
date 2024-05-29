import React from 'react';
import experienceData from '../data/experienceData.json';
import './Experience.css';

function Experience() {
    return (
        <section id="experience" className="odd section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Experience</h2>
                        <hr className="section-hr" />
                    </div>
                </div>
                <div className="row">
                    {experienceData.map((experience, index) => (
                        <div key={index} className="col-xs-12">
                            <div className="timeline">
                                <div className="timeline-content">
                                    <h4>{experience.position}</h4>
                                    <p>{experience.company}</p>
                                    <p>{experience.duration}</p>
                                    <p>{experience.details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
