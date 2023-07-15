import { PlusCircle } from "phosphor-react";
import styles from "./NewTaskForm.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface NewTodoFormProps {
	onAddTask: (title: string) => void;
}

export function NewTaskForm({ onAddTask }: NewTodoFormProps) {
	const [newTaskTitle, setNewTaskTitle] = useState("");

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();

		onAddTask(newTaskTitle);
		setNewTaskTitle("");
	}

	function handleNewTaskTitleChange(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity("");
		setNewTaskTitle(event.target.value);
	}

	function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
		event.target.setCustomValidity("Esse campo é obrigatório!");
	}

	const isNewTaskTitleEmpty = newTaskTitle.length === 0;

	return (
		<form className={styles.newTodoForm} onSubmit={handleCreateNewTask}>
			<input
				name="task"
				className={styles.newTodoInput}
				type="text"
				placeholder="Adiciona uma nova tarefa"
				value={newTaskTitle}
				onChange={handleNewTaskTitleChange}
				onInvalid={handleNewTaskInvalid}
				required
			/>
			<button className={styles.newTodoButton} type="submit" disabled={isNewTaskTitleEmpty}>
				Criar
				<PlusCircle size={16} />
			</button>
		</form>
	);
}
