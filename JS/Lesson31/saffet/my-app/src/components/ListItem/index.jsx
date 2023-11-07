import { useState } from 'react';
import './styles.css';

export const ListItem = ({ id, title, handleDelete }) => {

	const [completed, setCompleted] = useState(false);

	const handleClick = () => {
		setCompleted(!completed);
	}

	const className = completed ? 'completed' : '' ;

	return (
		<li onClick={handleClick}>
			<span className={className}>{title}</span>
			<button onClick={() => handleDelete(id)}>Delete Button</button>
		</li>
	);
};
