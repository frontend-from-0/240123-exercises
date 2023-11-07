import { useState } from "react";
import './index.css'
export const Ex8 = () => {
  const initialList = [
    { id: 1, label: "Saffet Ramazan Kaban" },
    { id: 2, label: "Anna Atalay" },
    { id: 3, label: "Zafer Atalay" },
    { id: 4, label: "Onur Yemez" },
    { id: 5, label: "Salih Kus" },
    { id: 6, label: "Onder Martin" },
    { id: 7, label: "Tugba Martin" },
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
            <button onClick={() => deleteButton(item.id)}>Click to Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
