import {useState} from 'react';
// ## Exercise 1: Basic Button Click
// Create a button in a functional component. When clicked, change the text of the button to "Clicked!".

export const Ex1 = () => {
  // useState hook
  const [title, setTitle] = useState('Click me!');

  function handleClick () {
    setTitle('Clicked!');
  };

  return (
    <button onClick={handleClick}>{title}</button>
  );

}