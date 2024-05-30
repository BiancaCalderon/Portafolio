import React from 'react';
import './index.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Skillset from './components/Skillset';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <AboutMe />
            <Portfolio />
            <Skillset />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}
export default App;
