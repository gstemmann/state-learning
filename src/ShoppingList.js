import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import SingleItem from './SingleItem';
import FormForNewItem from './FormForNewItem';

const ShoppingList = () => {
    const INITIAL_STATE = [{
        id: uuid(),
        name: 'blue butter',
        qty: 'while you wait'
    },
    {
        id: uuid(), 
        name: 'red butter',
        qty: 'while you wait'
    }];

    const [currentItems, changeItems] = useState([INITIAL_STATE]);
    const addItemToList = (brandNewItem) => {
        changeItems(currentItems => [ ...currentItems, { ...brandNewItem, id:uuid() } ])
    }
   
    return (
        <div>
            <h1>Shopping List</h1>
            <FormForNewItem addItemToList={addItemToList} />
            <ul>
                {currentItems.map(({ id, name, qty}) => (
                    <li>
                        <SingleItem id={id} name={name} qty={qty} key={id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;