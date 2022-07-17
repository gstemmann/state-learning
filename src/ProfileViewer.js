import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ProfileViewer = ({ name = "Elie" }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios(`https://api.github.com/users/${name}`);
            setData(result.data.name);
        }
        fetchData();
    }, [name]);

    return (
        <div>
            <h1>Profile Viewer</h1>
            <p>{data ? data : 'Loading... '}</p>
        </div>
            
    )
        
}

export default ProfileViewer;