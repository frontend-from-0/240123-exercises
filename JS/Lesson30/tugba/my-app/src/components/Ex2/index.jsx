// ## Exercise 2: Toggle Button
// Build a toggle button using a functional component. Clicking the button should toggle its text between "On" and "Off".
 import {useState} from 'react';

 
 export const Ex2 = () => {
    const [title, setTitle] = useState('On');

    function handleClick() {
        if(title.toLowerCase() === 'on') {
            setTitle('Off');
        } else {
            setTitle('On');
        }
    }

    return (

        <button onClick={handleClick}>{title}</button>
    )
 }