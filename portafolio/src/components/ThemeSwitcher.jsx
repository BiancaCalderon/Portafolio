import React from 'react';
import './ThemeSwitcher.css';

function ThemeSwitcher({ theme, toggleTheme }) {
    return (
        <div className="theme-switcher">
            <label className="switch">
                <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default ThemeSwitcher;
