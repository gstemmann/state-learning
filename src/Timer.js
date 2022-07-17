import React, { useState, useEffect} from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        console.log('starting timer');
        setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
    }, []);

    return (
        <div>
            <h1>here is the timer: {seconds}</h1>
        </div>
    );
}

export default Timer;