import React from "react";
import "./Circle.css";

const Circle = ({ color, index, x, y, changePosition})  => {
    return (
        <div onClick={() => changePosition(index)}
            className="Circle"
            style= {{
            backgroundColor: color,
            position: "absolute",
            left: `${x}vh`,
            top: `${y}vh`
        }}>
            {index + 1}
        </div>
    )
}

export default Circle;