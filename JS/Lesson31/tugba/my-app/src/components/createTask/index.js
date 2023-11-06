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
      <h2>Create task </h2>
      <form className="form" action="">
        <input onChange={InputChange} className="form-input" type="text" />
        <button onClick={Submit} className="create-btn">Save</button>
      </form>
    </>
  );
};