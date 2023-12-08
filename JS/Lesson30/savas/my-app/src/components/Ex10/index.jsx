// ## Exercise 10: Double Click Event
// Implement an event handler that triggers when a button is double-clicked. Display an alert indicating that the button was double-clicked.

export const Ex10 = () => {

    function handleDoubleClick () {
        alert('The button was double-clicked.');
    }

    return (
        <button onDoubleClick={handleDoubleClick}>Double Click Button</button>
    )
};

