import { useState } from 'react';
import './styles.css';

export const ListItem = ({ id, title, handleDelete }) => {

	const [completed, setCompleted] = useState(false);

	return (
		<li onClick={() => setCompleted(prev => !prev)}>
			<span className={completed ? 'completed' : ''}>{title}</span>
			<button onClick={() => handleDelete(id)}>Delete Button</button>
		</li>
	);
};
