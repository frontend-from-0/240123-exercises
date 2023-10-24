//## Exercise 3: Click Counter
//Develop a click counter using a functional component. Display the number of times a button has been clicked, and update it with each click.

import {useState} from 'react';

export const Ex3 = () => {
  // useState hook
  const [count, setCount] = useState(0);

  function handleClick () {
    setCount(prevState => prevState + 1);
  };

  return (
    <>{ /* Fragment element: <></> */ }
      <p>{count}</p>
      <button onClick={handleClick}>Counter button</button>
    </>
    
  );

}