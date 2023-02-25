import { useState } from 'react';
import styles from '../../src/styles/todo.module.scss';

interface Props {
	todo: string;
	uuid: string;
}

export const TodosList = (props: Props) => {
	const [handleTodo, setHandleTodo] = useState(true);

	const deleteTodo = () => {
		setHandleTodo(false);
	};

	return (
		<div className={styles.TodosListContainer}>
			{handleTodo && (
				<div key={props.uuid} className={styles.Todo}>
					<p>{props.todo}</p>
					<button onClick={deleteTodo}>Supprimer la todo</button>
				</div>
			)}
		</div>
	);
};
