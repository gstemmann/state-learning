import React, { useState } from "react"; 
import Grandchild from "./Grandchild";

export const CountContext = React.createContext();

const Child = () => {
    const [count, setCount] = useState(0);
    const addToCount = () => setCount(count + 1);
    const subtractFromCount = () => setCount(count - 1);

    
    return (
        <CountContext.Provider value={count}>
            <div>
                <h1>Child</h1>
                <h1>{count}</h1>
                <Grandchild/>
            </div>
        </CountContext.Provider>
    );
}

export default Child;
