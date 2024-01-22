import './styles.css';
import {ListItem} from '../ListItem';
import {useState} from 'react';
import {CreateTask} from '../createTask';

export const List = () => {
  const [todoItems, setTodoItems] = useState([]);

  function handleDelete(id) {
    setTodoItems(prevList => prevList.filter(prevItem => prevItem.id !== id));
  }
  function handleAddTodo (newTodo) {
    const newId = Math.max(...todoItems.map((item) => item.id)) + 1; // Create an index for the todo item that was not used before by any other todo item
    const updatedTasks = [
      ...todoItems, // copy all already existing items
      { id: newId, title: newTodo, completed: false }, // add a new item
    ];
    setTodoItems(updatedTasks); // update state
    function handleToggleComplete(id) {
      setTodoItems(prevList =>
        prevList.map(item =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      );
    }
  }

return (
  <>
    <CreateTask onCreateProps={handleAddTodo} />
    <ul className="todo-list">
      {todoItems.map((listItem) => (
        <ListItem
          handleDelete={handleDelete}
          key={listItem.id}
          id={listItem.id}
          title={listItem.title}
          completed={listItem.completed}
          handleToggleComplete={handleToggleComplete}
        />
      ))}
    </ul>
  </>
)
};