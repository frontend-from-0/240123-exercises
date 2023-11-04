import "./styles.css";
import { ListItem } from "../ListItem";
import { useState } from "react";
import { CreateTask } from "../CreateTask";

export const List = () => {
  const data = [
    { id: 1, title: "Do dishes", completed: false },
    { id: 2, title: "Do homework", completed: false },
    { id: 3, title: "Go running", completed: false },
    { id: 4, title: "Do dishes 2", completed: false },
    { id: 5, title: "Do homework 3", completed: false },
    { id: 6, title: "Go running 4", completed: false },
  ];

  const [todoItems, setTodoItems] = useState(data);

  const addTask = (newTask) => {
    const newId = Math.max(...todoItems.map((item) => item.id)) + 1;
    const updatedTasks = [
      ...todoItems,
      { id: newId, title: newTask, completed: false },
    ];
    setTodoItems(updatedTasks);
  };

  function handleDelete(id) {
    setTodoItems((prevList) =>
      prevList.filter((prevItem) => prevItem.id !== id)
    );
  }

  return (
    <>
      <CreateTask onCreateProps={addTask} />{" "}
      <ul className="todo-list">
        {todoItems.map((listItem) => (
          <ListItem
            handleDelete={handleDelete}
            key={listItem.id}
            id={listItem.id}
            title={listItem.title}
          />
        ))}
      </ul>
    </>
  );
};
