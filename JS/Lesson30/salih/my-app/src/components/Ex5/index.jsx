// ## Exercise 5: Mouse Coordinates
// Build a component that displays the current X and Y coordinates of the mouse when a button is clicked.


import {useState} from 'react';

export const Ex5 = () => {
    // useState hook
    const [coordinates, setCoordinate] = useState({x: 0,y: 0});
  
    function handleClick (event) {
      // console.log(event.clientX, event.clientY);
      setCoordinate({x: event.clientX, y: event.clientY});
    };
  
    return (
      <>
        <button onClick={handleClick}>Get coordinates</button>
        <p>X: {coordinates.x}, Y: {coordinates.y}</p>
      </>
    );
    }; 