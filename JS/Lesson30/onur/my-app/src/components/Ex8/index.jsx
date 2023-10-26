// ## Exercise 8: Dynamic List Rendering (add these buttons to the existing todo list items in our application!)
// Render a list of items with buttons next to them. Clicking a button should remove the corresponding item from the list.


export const Ex8 = ({ data, handleDelete }) => {

    return (
        <>
            {data.map(item => (
                <div>
                    <li key={item.id} onClick={() => alert(item.title)}>{item.title}</li>
                    <button onClick={() => handleDelete(item.id)}>Delete List Item</button>
                </div>
            ))}
        </>

    )
}