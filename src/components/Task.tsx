import { Check, Trash } from "phosphor-react";
import { ITask, IModifyTask } from "../App";

import styles from "./Task.module.css";

interface TaskProps extends IModifyTask {
	task: ITask;
}

export function Task({ task, onChangeTaskCompleteStatus, onDeleteTask }: TaskProps) {
	function handleChangeCheckBox() {
		onChangeTaskCompleteStatus(task.id);
	}

	function handleDeleteTask() {
		onDeleteTask(task.id);
	}

	return (
		<div className={`${styles.task} ${task.isComplete ? styles.taskDone : styles.taskNotDone}`}>
			<label className={styles.checkbox} title="Marcar ou Desmarcar tarefa">
				<span className={styles.checkboxBorder}></span>
				<input type="checkbox" checked={task.isComplete} onChange={handleChangeCheckBox} />
				<span className={styles.checkmark}>
					<Check />
				</span>
			</label>
			<p className={task.isComplete ? styles.taskContentDone : ""}>{task.title}</p>
			<button onClick={handleDeleteTask} title="Deletar tarefa">
				<Trash weight="bold" />
			</button>
		</div>
	);
}
