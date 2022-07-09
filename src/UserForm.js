import React, { useState } from 'react';

const UserForm = () => {
    const initialState = {
        username: '',
        email: '',
        password: ''
    }
    const [formData, changeFormData] = useState(initialState);
    const handleChangeOfState = e => {
        const { name, value } = e.target;
        changeFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { username, email, password } = formData;
        alert(`created user: ${username} ${email} ${password}`)
        changeFormData(initialState);
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                id="name"
                name="username"
                type="text" 
                placeholder="username" 
                value={formData.username} 
                onChange={handleChangeOfState}
            />

            <input 
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={handleChangeOfState}
            />
            <input 
                id="password"
                name="password"
                type="text"
                placeholder="Password"
                value={formData.password}
                onChange={handleChangeOfState}
            />
            <button> add </button>
        </form>
    );
}

export default UserForm;