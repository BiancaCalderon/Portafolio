import React from 'react';
import portfolioData from '../data/portfolioData.json';
import './Portfolio.css';

function Portfolio() {
    return (
        <section id="portfolio" className="odd section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Portfolio</h2>
                        <hr className="section-hr" />
                    </div>
                </div>
                <article>
                    <div className="portfolio-grid">
                        {portfolioData.map((project, index) => (
                            <div key={index} className="portfolio-item">
                                <a className="btn-portfolio" href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img src={project.image} className="img-responsive" alt={project.title} />
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;
