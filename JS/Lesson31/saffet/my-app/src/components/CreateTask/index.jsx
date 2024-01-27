import { useState } from "react";
import "./style.css";

export const CreateTask = ({ handleCreateTodo }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.length > 0) {
      
      console.log(task);
      handleCreateTodo(task);
      setTask("");
    }
  };

  return (
    <>
      <h2>Create a task in below</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          value={task}
          onChange={handleInputChange}
          className="form-input"
          type="text"
        />
        <button type="submit" className="create-btn">
          Save
        </button>
      </form>
    </>
  );
};
