import styles from '../../src/styles/todo.module.scss';

interface Props {
	todo: string;
	uuid: string | number;
}

export const TodosList = (props: Props) => {
	return (
		<div className={styles.TodosList}>
			<p>{props.todo}</p>
		</div>
	);
};
