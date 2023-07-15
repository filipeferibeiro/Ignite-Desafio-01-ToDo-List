import { ITask, IModifyTask } from "../App";
import { NoTasksInfo } from "./NoTasksInfo";
import { Task } from "./Task";
import styles from "./TasksContainer.module.css";

interface TaskContainerProps extends IModifyTask {
	tasks: ITask[];
}

export function TasksContainer({ tasks, onChangeTaskCompleteStatus, onDeleteTask }: TaskContainerProps) {
	const totalTasksCount = tasks.length;
	const completedTasksCount = tasks.filter((task) => task.isComplete).length;

	const completedText = totalTasksCount > 0 ? `${completedTasksCount} de ${totalTasksCount}` : totalTasksCount;

	return (
		<div className={styles.tasksContainer}>
			<div className={styles.tasksInfo}>
				<div className={styles.tasksInfoSection}>
					<strong className={styles.tasksCreatedText}>Tarefas Criadas</strong>
					<strong className={styles.tasksCounter}>{totalTasksCount}</strong>
				</div>
				<div className={styles.tasksInfoSection}>
					<strong className={styles.tasksCompletedText}>Concluídas</strong>
					<strong className={styles.tasksCounter}>{completedText}</strong>
				</div>
			</div>
			<div className={styles.tasksList}>
				{totalTasksCount > 0 ? (
					tasks.map((task) => (
						<Task
							key={task.id}
							task={task}
							onChangeTaskCompleteStatus={onChangeTaskCompleteStatus}
							onDeleteTask={onDeleteTask}
						/>
					))
				) : (
					<NoTasksInfo />
				)}
			</div>
		</div>
	);
}
