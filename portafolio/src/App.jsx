import React, { useState } from 'react';
import './index.css';
import './Theme.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Skillset from './components/Skillset';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className={`App ${theme}`}>
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            <Header />
            <Navbar />
            <AboutMe theme={theme} />
            <Portfolio theme={theme} />
            <Skillset theme={theme} />
            <Experience theme={theme} />
            <Contact theme={theme} />
            <Footer />
        </div>
    );
}
export default App;
