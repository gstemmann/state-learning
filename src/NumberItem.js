import React from "react";

const NumberItem = ({ number, remove }) => {
    
    const handleClick = () => {
        remove(number)
    }
return (
    <li>
        <button onClick={handleClick}>{number}</button>
    </li>
)

}

export default NumberItem; 