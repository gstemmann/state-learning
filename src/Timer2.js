import React, { useState, useEffect, useRef } from 'react';


const Timer2 = () => {
    const [second, setSecond] = useState(0);
    const timerId = useRef();
    useEffect(() => {
        timerId.current = setInterval(() => {
            setSecond(s => s + 1);
        }, 1000);

        return () => {
            clearInterval(timerId.current);
        }
    }, []);

    const stopTimer = () => {
        clearInterval(timerId.current);
    }
    const startTimer = () => {
        timerId.current = setInterval(() => {
            setSecond(s => s + 1);
        }, 1000);
    }
    

    return (
        <div>
            <h1>here is the timer: {second}</h1>
            <button onClick={startTimer}> Start Timer </button>
            <button onClick={stopTimer}> Stop Timer </button>
            <button onClick={() => setSecond(0)}>reset</button>
        </div>
    );
}


export default Timer2;