// ## Exercise 10: Double Click Event
// Implement an event handler that triggers when a button is double-clicked. Display an alert indicating that the button was double-clicked.

import { useState } from "react"
import './styles.css'


export const Ex10 = () => {

    const [doubleClick, setDoubleClick] = useState(false);

    const handleDoubleClick = () => {
        setDoubleClick(true);

        setTimeout(() => {
            setDoubleClick(false);
        }, 1000);
    }

    return (
        <>
            <button className="btn" onDoubleClick={handleDoubleClick}>Double Click Me !!</button>
            {doubleClick && <p className="alert-text">Button double clicked!!</p>}
        </>
    )
}