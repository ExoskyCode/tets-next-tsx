import React from 'react';
import styles from '../styles/todo.module.scss';
import { useState } from 'react';
import { TodoForm } from 'components/TodoForm/TodoForm';

export default function todo() {
	return (
		<div className={styles.containerTodo}>
			<TodoForm />
		</div>
	);
}
