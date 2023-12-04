import {useState} from 'react';

export const Ex10 = () => {
  // useState hook
  const [clickCount, setClickCount] = useState(0);

  function handleClick (event) {
    if (event.detail === 2) alert("double-clicked");
  }
  return (
    <>
      <p>{clickCount}</p>
      <button onClick={handleClick}>Counter Button</button>
    </>

  ) 

}



/* corrected */