import React from 'react';

const Button = () => {
    const lazer = (e) => {
        const data = {
            name: 'Lazer',
            age: '30'
        }
        console.log(data);
        console.log(e); // <-- this is the event object
        console.log('lazer');
        console.log(e.target); // <-- this is the button element
        console.log('big things')
        console.log(e.target.innerText); // <-- this is the text inside the button
        console.log('watch out')
        console.log(e.currentTarget)
    }
    return (
        <>
    <button onClick={lazer}> click here </button>
    <textarea onScroll={lazer} rows='3'>
        dhfaslidufhsa;dofhs;adfsalkdjfhsadf
        sdfj;alsdkjfsaldfj;sadkfj
        asdfl;asdljfhasljdfn
        asdfh;asdjhf;asodhfsa
        asdhjflsadfkjh

    </textarea>
    </>
    );
}

export default Button;