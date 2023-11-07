import { useState } from 'react';
import './index.css'

export const Ex9 = () => {

  const [backgroundColor, setBackgroundColor] = useState('bisque');

  function changeBackgroundtoYellow(){
    setBackgroundColor("yellow");
  }

  function changeBackgroundtoRed(){
    setBackgroundColor("red");
  }

  return (
    <>
      <div className="btn-div" style={{backgroundColor: backgroundColor}}>
        <button className='color-btn' onClick={changeBackgroundtoYellow}>Sarı</button>
        <button className='color-btn' onClick={changeBackgroundtoRed}>Kırmızı</button>
      </div>
    </>
  );
};
