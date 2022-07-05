import React from "react";



const ButtonColor = ({options, addCircle}) => {
    return (
        <div className="ButtonColor">
            {options.map(color => (
                <button onClick={() =>addCircle(color)}>{color}</button>  
            ))}
        </div>
    )
}

export default ButtonColor;