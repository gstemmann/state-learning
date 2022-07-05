import React, { useState } from "react";



const Counter = () => {
    const [currentState, changeState] = useState(1);
    const clickUp = () => changeState(currentState + 1);
    const clickUpBy2 = () => changeState(currentState + 2);
    
    return (
        <>
        <h1> Counter is at : {currentState}</h1>
        <button onClick={clickUp}>+</button>
        <button onClick={clickUpBy2}>+2</button>
        </>

    )
}

export default Counter;