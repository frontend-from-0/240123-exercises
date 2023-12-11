export const ListItem = ({ id, title, handleDelete, handleCompleted, completed }) => {
    return (
      <li>
        {title} <button onClick={() => handleCompleted(id)}>Completed Button</button>
        <button onClick={() => handleDelete(id)}>Delete Button</button>{completed ? '✅ ' : ''} 
      </li>
    );
  };