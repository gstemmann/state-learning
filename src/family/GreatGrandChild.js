import React, { useContext } from 'react';
import { CountContext } from './Child';

const GreatGrandChild = () => {
    const count = useContext(CountContext);

    return (
        <div>
            <h4>Great Grandchild</h4>
            {/* <button onClick={addToCount}>Add to count</button> */}
            <p>{count}</p>
        </div>
    );
}

export default GreatGrandChild;