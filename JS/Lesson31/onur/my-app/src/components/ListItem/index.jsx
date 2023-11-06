import { useState } from 'react';
import './styles.css';

export const ListItem = ({ id, title, handleDelete }) => {

	const [completed, setCompleted] = useState(false);

	const className = (!completed) ? '' : 'completed';

	const changeClassName = () => {
		return (className === '') ? setCompleted(true) : setCompleted(false);
	}
	return (
		<li onClick={changeClassName}>
			<span className={className}>{title}</span>
			<button onClick={() => handleDelete(id)}>Delete Button</button>
		</li>
	);
};
