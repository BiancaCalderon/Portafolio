import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

function Section({ id, title, description, children, theme }) {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            id={id}
            className={`section ${theme}`}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="section-title">{title}</h2>
                        <hr className="section-hr" />
                        <p className="section-description">{description}</p>
                    </div>
                </div>
                {children}
            </div>
        </motion.section>
    );
}

export default Section;
