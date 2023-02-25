import { useState } from 'react';
import { uuid } from 'uuidv4';
import styles from '../../src/styles/todo.module.scss';

const useTodos = (): [string[], (value: string) => void] => {
	const [todos, setTodos] = useState<string[]>([]);

	const addTodo = (value: string) => {
		setTodos((curr) => [...curr, value]);
	};
	return [todos, addTodo];
};

export const TodoForm: Function = () => {
	const [todos, addTodo] = useTodos();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const elements = e.currentTarget
			.elements as typeof e.currentTarget.elements & {
			name?: HTMLInputElement;
			date?: HTMLInputElement;
		};
		console.log(elements);

		const todoName = elements.name?.value;

		if (!todoName) {
			return;
		}

		addTodo(todoName);
	};

	return (
		<div className={styles.FormContainer}>
			<h2>Ajouter votre Todo</h2>
			<form onSubmit={(e) => onSubmit(e)}>
				{<label htmlFor='name'>Entrer le titre de votre Todo</label>}
				<input name='name' type='text' />
				{<label htmlFor='date'>Entrer la date de votre Todo</label>}
				{<input name='date' type='text' />}
				<button type='submit'>Valider la Todo</button>
			</form>
			<ul>
				{todos.map((todo: string) => (
					<li key={uuid()}>{todo}</li>
				))}
			</ul>
		</div>
	);
};
