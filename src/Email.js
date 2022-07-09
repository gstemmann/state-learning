import React from "react";
import "./Email.css";

const Email = ({ email, remove }) => {
    const handleClick = () => {
        remove(email)
    }
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`created user: ${email}`)

    }
    
    return (
        <li>
            <button onClick={handleClick}>{email}</button>
        </li>
    )
}

export default Email;