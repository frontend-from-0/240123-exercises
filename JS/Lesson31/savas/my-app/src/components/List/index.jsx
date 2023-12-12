import './styles.css';
import {ListItem} from '../ListItem';
import {useState} from 'react';
import { NewItem } from '../NewItem';

export const List = () => {
  const data = [
    {id: 1, title: "Do dishes", completed: false},
    {id: 2, title: "Do homework", completed: false},
    {id: 3, title: "Go running", completed: false},
    {id: 4, title: "Do dishes 2", completed: false},
    {id: 5, title: "Do homework 3", completed: false},
    {id: 6, title: "Go running 4", completed: false},
  ];

  const [todoItems, setTodoItems] = useState(data);


  function handleDelete(id) {
    setTodoItems(prevList => prevList.filter(prevItem => prevItem.id !== id));
  }

  function handleCompleted(id) {
	  setTodoItems((prevList) =>
		prevList.map((prevItem) => {
		  if (prevItem.id === id) {
			return { ...prevItem, completed: !prevItem.completed };
		  }
		  return prevItem;
		}));
  }

  const addItem = (newItem) => {
    const newId = Math.max(...todoItems.map((item) => item.id)) * 100;
    const updatedItems = [...todoItems, { id: newId, title: newItem }];
    setTodoItems(updatedItems);
  };

return (
  <div>
      <NewItem handleNewTodo={addItem} />{" "}
      <ul className='todo-list'>
        {todoItems.map((listItem) => (
          <ListItem
            key={listItem.id}
            id={listItem.id}
            title={listItem.title}
            handleDelete={handleDelete}
            handleCompleted={handleCompleted}
            completed={listItem.completed}
          />
          )
        )
        }</ul>
        <hr />
  </div>
);
};