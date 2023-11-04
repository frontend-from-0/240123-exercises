import {useState} from 'react';

export const Ex10 = () => {
  // useState hook
  const [clickCount, setClickCount] = useState(0);

  function handleClick () {
    if(clickCount % 10){
      alert("double-clicked");
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