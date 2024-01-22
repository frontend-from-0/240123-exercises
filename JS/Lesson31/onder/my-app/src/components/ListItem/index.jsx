import { useState } from 'react';


export const ListItem = ({ id, title, handleDelete, completed , handleToggleComplete }) => {
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(!completed);
    handleToggleComplete(id);
  }
  
  const handleDeleteClick = () => {
    handleDelete(id);
  };

  const className = completed ? 'completed' : '';

  return (
    <li onClick={completed ? 'completed' : ''}>
      <span className={handleClick}>{title}</span>
      <button onClick={handleDeleteClick}>Delete Button</button>
    </li>
  );
}