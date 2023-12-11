import {useState} from 'react';

export const NewItem = ({ handleNewTodo }) => {
    const [item, setItem] = useState("");
    const handleInputChange = (event) => {
      setItem(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (item) {
        handleNewTodo(item);
        setItem("");
      }
    };
  
    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={item}
            onChange={handleInputChange}
            type="text"
          />
          <button type="submit">
            Add new task
          </button>
          <hr />
        </form>
      </>
    );
  };