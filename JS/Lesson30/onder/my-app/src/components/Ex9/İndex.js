import { useState } from 'react';
import './index.css'

export const Ex9 = () => {

  const [backgroundColor, setBackgroundColor] = useState('violet');

  function changeBackgroundtoPurle(){
    setBackgroundColor("purple");
  }

  function changeBackgroundtoOrange(){
    setBackgroundColor("orange");
  }

  return (
    <>
      <div className="btn-div" style={{backgroundColor: backgroundColor}}>
        <button className='color-btn' onClick={changeBackgroundtoPurple}>purple</button>
        <button className='color-btn' onClick={changeBackgroundtoOrange}>orange</button>
      </div>
    </>
  );
};