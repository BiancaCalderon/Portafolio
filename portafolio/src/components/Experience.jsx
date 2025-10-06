import React from 'react';
import experienceData from '../data/experienceData.json';
import Section from './Section';
import './Experience.css';

function Experience() {
    return (
        <Section id="experience" title="Experience">
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
        </Section>
    );
}

export default Experience;
