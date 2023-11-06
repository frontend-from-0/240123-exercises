import { useState } from "react"
import './styles.css'

export const NewToDoItem = ({ handleCreateTodo }) => {

    const [newItem, setNewItem] = useState('');

    const handleInput = (e) => {
        setNewItem(e.target.value);
    }

    const handleSubmit = (e) => {
        if (newItem.length > 0) {
            handleCreateTodo(newItem);
            setNewItem('');
        }
        e.preventDefault();
    }

    return (
        <>
            <h2>Create a new todo</h2>
            <form onClick={handleSubmit} className="form-container" >
                <input className="form-input" type="text" onChange={handleInput} value={newItem} />
                <button className="form-btn" type="submit" >Add</button>
            </form>
        </>
    )
}