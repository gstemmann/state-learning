import React, { useState } from 'react';


const UserForm = () => {
    const [name, changeName] = useState('blue man');
    const handleChange = (e) => {
        changeName(e.target.value)
    }
    const handleSubmit = () => {
      
    }

    return (
        <form>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={handleChange} />
            <button onClick={handleSubmit}> add </button>
        </form>
    );
}

export default UserForm;