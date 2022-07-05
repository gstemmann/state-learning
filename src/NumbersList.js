import React, {useState} from 'react';
import NumberItem from './NumberItem';

//next will be a component that is a child of this component
const NumbersList = () => {
    const [currentNumbers, changeNumbers] = useState([1,2,3,4,5])

    const remove = (indexOfArray) => {
        changeNumbers(currentNumbers.filter(currNum => currNum !== indexOfArray))
    }
    return (
        <ul>
            {currentNumbers.map(currNum =>(
                <li>
                    <NumberItem number={currNum} remove={remove}/>
                </li>
            ))}
        
        </ul>

    )
    }

    export default NumbersList;