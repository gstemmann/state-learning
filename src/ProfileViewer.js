import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ProfileViewer = ({ name = "Elie", color="purple"}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios(`https://api.github.com/users/${name}`);
            setData(result.data.name);
        }
        fetchData();
        //effect is only going to change when name changes.. this array prop is the 2nd parameter in the useEffect
    }, [name]);

    return (
        <div>
            <h1>Profile Viewer</h1>
            <p style={{color}} >{data ? data : 'Loading... '}</p>
        </div>
            
    )
        
}

export default ProfileViewer;