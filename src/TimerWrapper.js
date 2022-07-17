import React, { useState } from "react";
import Timer from "./Timer";

const TimerWrapper = () => {
    const [timerVisible, setTimerVisible] = useState(true);
    const toggleTimer = () => {
        setTimerVisible(!timerVisible);
    }   
    return (
        <div>
            <button onClick={toggleTimer}>Toggle Timer</button>
            <h1>{timerVisible && <Timer />}</h1>
        </div>
    );
}


export default TimerWrapper;