import React from 'react';
import useFields from './hooks/useFields';

const SignupForm = () => {
    const [formData, handleChange, resetFormData] = useFields({ 
        username: '',
        email: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        resetFormData();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input 
                type="text" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} />
                <label>Email:</label>
                <input type="text" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} />
                <label>Password:</label>
                <input 
                type="text" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default SignupForm;