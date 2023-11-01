import './styles.css';

export const ListItem = ({ id, title, handleDelete }) => {
	return (
		<li>
			{title}
			<button onClick={() => handleDelete(id)}>Delete Button</button>
		</li>
	);
};
