//## Exercise 3: Click Counter
//Develop a click counter using a functional component. Display the number of times a button has been clicked, and update it with each click.

import {useState} from 'react';

export const Ex10 = () => {
  // useState hook
  const [clickCount, setClickCount] = useState(0);

  function handleClick () {
    if(clickCount % 2){
      alert("iki kez tıklandı");
    }
    setClickCount(clickCount + 1);
  };

  return (
    <>
      <p>{clickCount}</p>
      <button onClick={handleClick}>Counter button</button>
    </>
    
  );

}