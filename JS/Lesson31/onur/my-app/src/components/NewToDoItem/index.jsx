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
        } else {
            alertText();
        }
        e.preventDefault();
    }

    const [alert, setAlert] = useState(false)

    const alertText = () => {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 1000);
    }

    return (
        <>
            <h2>Create a new todo</h2>
            {alert && <p className="alert-text">Please enter a todo</p>}
            <form onClick={handleSubmit} className="form-container" >
                <input className="form-input" type="text" onChange={handleInput} value={newItem} />
                <button className="form-btn" type="submit" >Add</button>
            </form>
        </>
    )
}