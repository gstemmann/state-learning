import { React, useState } from "react";

const SimpleForm = () => {
    const INITIAL_STATE = {
        email: ""
    }
    const [formData, changeFormData] = useState(INITIAL_STATE);
    const handleChangeOfState = (e) => {
        const { name, value } = e.target; 
        changeFormData(formData => ({ ...formData, [name]: value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const { email } = formData;
        console.log(email);
        alert(`You have submitted ${email}`);
        changeFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>this is my simple form</h3>
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChangeOfState}
                />
            <button type="submit">Submit</button>
        </form>

)
}

export default SimpleForm;