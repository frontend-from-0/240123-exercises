import { useState } from "react";
import './index.css'
export const Ex8 = () => {
  const initialList = [
    { id: 1, label: "Working hard" },
    { id: 2, label: "Go to work" },
    { id: 3, label: "Do dishes" },
    { id: 4, label: "Attend meetings" },
    { id: 5, label: "Being lazy" },
    { id: 6, label: "Being happy" },
    { id: 7, label: "Cook meal" },
  ];

  const [list, setList] = useState(initialList);

  const deleteButton = (itemId) => {
    const updatedList = list.filter((item) => item.id !== itemId);
    console.log(itemId);
    console.log(updatedList);
    return setList(updatedList);
  };

  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>{item.label}</span>
            <button onClick={() => deleteButton(item.id)}>handleDeleteClick</button>
          </li>
        ))}
      </ul>
    </>
  );
};