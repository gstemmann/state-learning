import React, { useState } from "react";
import Circle from "./Circle";
import ButtonColor from "./ButtonColor";

const getRandomColor = (min = 0, max = 100) => Math.Random() * (max - min) + min;

const ColoredCircles = () => {
    const [currentCircle, changeCircles] = useState([]);
    const addCircle = (newColor) => {
        changeCircles([...currentCircle, newColor])
    }
    return (
        <div className="ColoredCircles">
            <ButtonColor addCircle={addCircle}  options={['cornflowerblue', 'yellow']}/>
            {currentCircle.map((circle, index) => (
                <Circle color={circle} index={index} key={index}/>  
            ))}
        </div>
    )
}

export default ColoredCircles;