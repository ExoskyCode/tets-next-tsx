import { useState } from 'react';
import { uuid } from 'uuidv4';
import { TodosList } from './TodosList';
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
		<>
			<div className={styles.FormContainer}>
				<h2>Ajouter votre Todo</h2>
				<form onSubmit={(e) => onSubmit(e)}>
					<label htmlFor='name'>Entrer le titre de votre Todo</label>
					<input name='name' type='text' />
					<button type='submit'>Valider la Todo</button>
				</form>
			</div>
			<ul>
				{todos.map((todo: string) => (
					<TodosList uuid={uuid()} todo={todo} />
				))}
			</ul>
		</>
	);
};
