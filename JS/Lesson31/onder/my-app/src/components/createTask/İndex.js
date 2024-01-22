import { useState } from "react";
import './style.css';

export const CreateTask = ({ onCreateProps }) => {

  const [task, setTask] = useState("");

  const handleInputChange = (event) => {
    setTask(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.length > 0) {
      onCreateProps(task);
      setTask("");
    }
  };

  return (
    <>
      <h2>Create task </h2>
     
      <form className="form" onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
      <button type="submit" className="create-btn">Save</button>
      </form>
    </>
  );
};