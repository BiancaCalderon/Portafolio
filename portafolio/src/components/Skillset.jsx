import React from 'react';
import skillsetData from '../data/skillsetData.json';
import Section from './Section';
import Tooltip from './Tooltip';

function Skillset() {
    return (
        <Section id="skillset" title="Skillset">
            <div className="row">
                {skillsetData.map((skill, index) => (
                    <div key={index} className="col-sm-3 col-xs-4 image-container">
                        <Tooltip text={skill.name}>
                            <img
                                className="svg-skill"
                                src={`/assets/img/${skill.icon}.svg`}
                                alt={skill.name}
                            />
                        </Tooltip>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Skillset;
