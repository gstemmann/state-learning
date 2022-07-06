import React, { useState } from "react";
import Circle from "./Circle";
import ButtonColor from "./ButtonColor";

function getRandom(min = 0, max = 100) {
    return Math.random() * (max - min) + min;
}

const ColoredCircles = () => {
    const [currentCircle, changeCircles] = useState([]);
    const addCircle = (newColor) => {
        changeCircles([...currentCircle, { color: newColor, x:getRandom(), y:getRandom() }]);
    }
    // const changePosition = (index) => {
    //     const copyOfCurrentCircle = [...currentCircle];
    //     copyOfCurrentCircle[index].x = getRandom();
    //     copyOfCurrentCircle[index].y = getRandom();
    //     return copyOfCurrentCircle;
    // }
    const changePosition = (index) => {
        changeCircles(currentCircle.map((circle, i) => {
            if (i === index) {
                return { ...circle, x: getRandom(), y: getRandom() };
            }
            return circle;
        }
        ));
    }
    return (
        <div className="ColoredCircles">
            <ButtonColor addCircle={addCircle}  options={['cornflowerblue', 'yellow']}/>
            {currentCircle.map(({ color, x, y }, index) => (
                <Circle changePosition={changePosition} 
                        color={color} 
                        index={index} 
                        key={index} 
                        x={x} 
                        y={y}/>  
            ))}
        </div>
    )
}

export default ColoredCircles;