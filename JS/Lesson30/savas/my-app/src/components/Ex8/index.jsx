// ## Exercise 8: Dynamic List Rendering (add these buttons to the existing todo list items in our application!)
// Render a list of items with buttons next to them. Clicking a button should remove the corresponding item from the list.
import { useState } from 'react';

export const Ex8 = () => {
    const [data, setData] = useState([
        {id: 1, title: "Do dishes"},
        {id: 2, title: "Do homework"},
        {id: 3, title: "Go running"},
        {id: 4, title: "Do dishes 2"},
        {id: 5, title: "Do homework 3"},
        {id: 6, title: "Go running 4"},
      ]);

      function deleteItem (id) {
        const newData = data.filter(data => data.id !== id);
        setData(newData);
      }
  
    return (
        <ul>{data.map(data => <li key={data.id}>{data.title}<button onClick={() => deleteItem(data.id)}>X</button>
        </li>)}</ul>
  )
};