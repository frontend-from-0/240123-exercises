// ## Exercise 6: Prevent Default
// Design a link inside a component. Implement an event handler that prevents the default action when the link is clicked.

export const Ex6 = () => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <a href="https://www.w3schools.com/" target="_blank" onClick={handleClick}>Click Link</a>
    )
}