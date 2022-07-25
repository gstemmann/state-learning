import React, { useState } from 'react';

const useToggleState = () => {
    const [state, setState] = useState(true)
    const toggle = () => {
        setState(s => !s);
    }   
    return [state, toggle];
}


export default useToggleState;