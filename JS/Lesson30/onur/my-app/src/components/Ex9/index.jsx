// ## Exercise 9: Multiple Buttons
// Create a component with multiple buttons. Change the background color of the component based on which button is clicked.


import { useState } from "react"

export const Ex9 = () => {

    const [bgColor, setBgColor] = useState('#fff');

    const divStyle = {
        backgroundColor: bgColor,
        padding: '10px',
    }

    const changebackgroundColor = (color) => {
        setBgColor(color);
    }


    return (
        <div style={divStyle}>
            <button onClick={() => changebackgroundColor('#452611')}>Button 1</button>
            <button onClick={() => changebackgroundColor('#346786')}>Button 2</button>
            <button onClick={() => changebackgroundColor('#328932')}>Button 3</button>
        </div>
    )
}