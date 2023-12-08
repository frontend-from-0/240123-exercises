// ## Exercise 6: Prevent Default
// Design a link inside a component. Implement an event handler that prevents the default action when the link is clicked.

export const Ex6 = () => {

    function handleClick (event) {
        event.preventDefault();
        console.log("Link Clicked!")
    }

    return (
        <a href="#" onClick={handleClick}>Prevent Default</a>
    )
};