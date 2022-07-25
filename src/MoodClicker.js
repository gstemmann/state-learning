import React, { useState } from 'react';
import useToggleState from './hooks/useToggleState';
import './MoodClicker.css'

const MoodClicker = () => { 
    const [isHappy, toggleMood] = useToggleState();
    const [isDark, isDarkMode] = useToggleState();
    return (
        <div className={isDark ? 'Clicker-dark' : 'Clicker-light'}>
            <h1>{ isHappy ?  'happy' : 'sad'  }</h1>
            <button onClick={toggleMood}> change mood </button>
            <button onClick={isDarkMode}> light/dark </button>
        </div>
    );
}
    
export default MoodClicker;