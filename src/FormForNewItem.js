import React, { useState } from "react";

const FormForNewItem = ({ addItemToList }) => { 
    const INITIAL_STATE = {
        name: '',
        qty: ''
    }
    const [formData, changeFormData] = useState(INITIAL_STATE);
    const handleChangeOfState = (e) => {
        const { name, value } = e.target; 
        changeFormData(formData => ({ ...formData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItemToList({ ...formData });
        changeFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Product Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={handleChangeOfState}
                 />
                <label htmlFor="qty">Number of Items:</label>
                <input
                    id="qty"
                    type="range"
                    min="1"
                    max="10"
                    name="qty"
                    placeholder="Product Quantity"
                    value={formData.qty}
                    onChange={handleChangeOfState}
                 />
            <button type="submit">Add Item</button>

        </form>
    )
    

}

export default FormForNewItem;