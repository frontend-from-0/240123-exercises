// ## Exercise 10: Double Click Event
// Implement an event handler that triggers when a button is double-clicked. Display an alert indicating that the button was double-clicked.

import React, { useState } from 'react';

export const Ex10 = () => {
    const [clickCount, setClickCount] = useState(0);

    function handleDoubleClick(event) {
        if (event.detail === 2) {
            alert('The button was double-clicked.');
            setClickCount(0);
        }
    }

    return (
        <button onClick={handleDoubleClick}>Prevent Default</button>
    );
};