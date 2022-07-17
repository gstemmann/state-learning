import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileSearchForm from './ProfileSearchForm';


const ProfileViewerWithSearch = () => {
    const [profile, setProfile] = useState(null);
    const [url, setUrl] = useState('https://api.github.com/users/elie');
    
const search = (term) => {
    setUrl(`https://api.github.com/users/${term}`);
}
    useEffect(() => {
        console.log('loading data');
        async function fetchData() {
            const result = await axios(url);
            setProfile(result.data.name)
        }
        fetchData();
        //this is a side effect way to
        //load data when the url changes
        return () => console.log('cleanup');
    }, [url]);


    return (
        <div>
            {profile
             ? <h1>hello {profile}, welcome to your profile</h1>
            : <h1>Loading...</h1>}
            <ProfileSearchForm search={search} />
        </div>
    )
}

export default ProfileViewerWithSearch;