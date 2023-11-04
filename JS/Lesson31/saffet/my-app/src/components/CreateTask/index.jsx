import { useState } from "react";
import './style.css';

export const CreateTask = ({ onCreateProps }) => {

  const [task, setTask] = useState("");

  const handleInputChange = (event) => {
    setTask(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(task);

    onCreateProps(task);
    setTask("");
  }

  return (
    <>
      <h2>Create a task in below</h2>
      <form className="form" action="">
        <input onChange={handleInputChange} className="form-input" type="text" />
        <button onClick={handleSubmit} className="create-btn">Save</button>
      </form>
    </>
  );
};
