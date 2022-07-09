import React, { useState } from 'react';
import SingleItem from './SingleItem';
import FormForNewItem from './FormForNewItem';

const ShoppingList = () => {
    const INITIAL_STATE = {
        name: '',
        qty: ''
    }
    const [currentItems, changeItems] = useState([INITIAL_STATE]);
    const addItemToList = (name, qty) => {
        changeItems(currentItems => [ ...currentItems, { name, qty } ])
    }
   
    return (
        <div>
            <h1>Shopping List</h1>
            <FormForNewItem addItemToList={addItemToList} />
            <ul>
                {currentItems.map(({ id, name, qty}) => (
                    <li>
                        <SingleItem name={name} id={id} qty={qty} key={id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;