import React, { useState } from 'react';
import portfolioData from '../data/portfolioData.json';
import Section from './Section';
import './Portfolio.css';

function Portfolio() {
    return (
        <Section id="portfolio" title="Portfolio">
            <article>
                <div className="portfolio-grid">
                    {portfolioData.map((project, index) => (
                        <PortfolioItem key={index} project={project} />
                    ))}
                </div>
            </article>
        </Section>
    );
}

function PortfolioItem({ project }) {
    const [image, setImage] = useState(project.image);

    const handleMouseEnter = () => {
        if (project.image2) {
            setImage(project.image2);
        }
    };

    const handleMouseLeave = () => {
        setImage(project.image);
    };

    return (
        <div className="portfolio-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a className="btn-portfolio" href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={image} className="img-responsive" alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </a>
        </div>
    );
}

export default Portfolio;
