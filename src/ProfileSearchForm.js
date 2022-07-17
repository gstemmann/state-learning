import React, { useState } from 'react';

const ProfileSearchForm = ({ search }) => {
    const [term, setTerm] = useState('');

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        search(term);
    }   
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={term} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default ProfileSearchForm;