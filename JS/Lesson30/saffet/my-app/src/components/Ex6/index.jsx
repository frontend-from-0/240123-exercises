import React from 'react'

export const Ex6 = () => {
  function handleClick(event) {
    event.preventDefault();
}


  return (
    <>
      <a href="https://github.com/Saffet01" rel="noreferrer" target='_blank' onClick={handleClick}>Click Here</a>
    </>
  );
  }; 
