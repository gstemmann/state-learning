import React, {useState} from 'react';
import NumberItem from './NumberItem';

//next will be a component that is a child of this component
const NumbersList = () => {
    const [currentNumbers, changeNumbers] = useState([1,2,3,4,5])

    const remove = (indexOfArray) => {
        console.log('removing', indexOfArray)
        changeNumbers(currentNumbers.filter(currNum => currNum !== indexOfArray))
    }
    return (
        <ul>
            {currentNumbers.map(currNum =>(
                <li>
                    //the 2 arguments are the props that are passed to the 
                    //NumberItem component from the parent component
                    //they are defined in this file and then passed to the
                    //NumberItem component file as props(arguments)
                    <NumberItem number={currNum} remove={remove}/>
                </li>
            ))}
        
        </ul>

    )
    }

    export default NumbersList;