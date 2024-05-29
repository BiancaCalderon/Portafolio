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
                    <div className="container-fluid">
                        <div className="row">
                            {portfolioData.map((project, index) => (
                                <div key={index} className="col-sm-4 col-xs-12 image-container">
                                    <a className="btn-portfolio" href={project.link} target="_blank" rel="noopener noreferrer">
                                        <img src={project.image} className="img-responsive" alt={project.title} />
                                        <h4>{project.title}</h4>
                                        <p>{project.description}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;
