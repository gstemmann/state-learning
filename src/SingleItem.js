import React from 'react';

const SingleItem = ({ id, name, qty }) => {

    return (
        <ul>
            <li>Product Name: {name} </li>
            <li> Number of Items: {qty} </li>
        </ul>
    )
}

export default SingleItem;