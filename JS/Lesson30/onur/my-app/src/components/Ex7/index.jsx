// ## Exercise 7: Event Propagation
// Nest a child element within a parent element. Attach click event handlers to both elements, and observe the order in which the click events are triggered.


export const Ex7 = () => {

    const handleClickChild = (e) => {
        console.log('child element clicked');
        e.preventDefault();
        // e.stopPropagation()
    }
    const handleClickParent = (e) => {
        console.log('parent element clicked')
        e.preventDefault()

        // e.stopPropagation()
    }

    return (
        <div onClick={handleClickParent}>
            <button onClick={handleClickChild}>Click me!</button>
        </div>

    )
}