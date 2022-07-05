// import React, { useState } from "react";

// const Game = () => {
//     const genRandom = () => Math.floor(Math.random() * 10) + 1
//     const [count, setCount] = useState(9);
//     console.log('num is {num}', {num: count})
//     const [target, setTarget] = useState(genRandom());
//     const gameOver = target = count;
//     return (
//         <div>
//             <h1>target: {target}</h1>
//             <h1 style={{ color: gameOver ? 'green' : 'red'}}>guessed number : {count} </h1>

//             <button onClick={() => setCount(genRandom())}> start guessing </button>
//         </div>
//     )
// }

// export default Game;