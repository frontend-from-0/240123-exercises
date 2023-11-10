import './styles.css';
import { ListItem } from '../ListItem';
import { useState } from 'react';
import { NewToDoItem } from '../NewToDoItem';

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

  const handleCreateTodo = (newItem) => {
    const newTodoId = Math.max(...todoItems.map((item) => item.id)) + 1;

    const updatedTodo = [
      ...todoItems,
      { id: newTodoId, title: newItem, completed: false },
    ];

    setTodoItems(updatedTodo);

  }

  function handleDelete(id) {
    setTodoItems(prevList => prevList.filter(prevItem => prevItem.id !== id));
  }



  return (
    <>
      <h1>Todo List</h1>
      <ul className='todo-list'>
        {
          todoItems.map(
            listItem => <ListItem handleDelete={handleDelete} key={listItem.id} id={listItem.id} title={listItem.title} />
          )
        }
      </ul>
      <NewToDoItem handleCreateTodo={handleCreateTodo} />
    </>
  )
};