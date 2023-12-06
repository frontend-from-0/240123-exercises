// ## Exercise 7: Event Propagation
// Nest a child element within a parent element. Attach click event handlers to both elements, and observe the order in which the click events are triggered.

export const Ex7 = () => {

    function handleClickDiv () {
        console.log("div element was clicked!");
    }

    function handleClickButton (event) {
        event.stopPropagation(); //I learn this code from the Internet :) because I clicked the button, I could not see which element was clicked.
        console.log("button element was clicked!");
    }

  return (
    <div onClick={handleClickDiv} style={{ border: '1px solid black', padding: '20px' }}>
            <button onClick={handleClickButton}>Click to see element!</button>
        </div>
  )
};