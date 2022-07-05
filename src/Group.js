import React from "react";


const Group = () => {
    const colorFunction = (e) => {
        console.log(`you clicked: ${e}`);
    }
    return (
        <div>
            <button onClick={() => colorFunction('red')}>clicked the red</button>
            <button onClick={() => colorFunction('blue')}>clicked the blue</button>
            <button onClick={() => colorFunction('yellow')}>clicked the yellow</button>
        </div>
    )
}


export default Group;