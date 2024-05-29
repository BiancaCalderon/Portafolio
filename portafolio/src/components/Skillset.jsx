import React from 'react';
import skillsetData from '../data/skillsetData.json';
import './Skillset.css';

function Skillset() {
    return (
        <section id="skillset" className="even section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Skillset</h2>
                        <hr className="section-hr" />
                    </div>
                </div>
                <div className="row">
                    {skillsetData.map((skill, index) => (
                        <div key={index} className="col-sm-3 col-xs-4 image-container">
                            <img
                                className="svg-skill"
                                src={`/assets/img/${skill.icon}.svg`}
                                alt={skill.name}
                                data-toggle="tooltip"
                                data-placement="top"
                                title={skill.name} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skillset;
