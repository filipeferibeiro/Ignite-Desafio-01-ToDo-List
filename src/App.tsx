import { useState } from "react";
import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { TasksContainer } from "./components/TasksContainer";
import { v4 as uuid } from "uuid";

import "./global.css";
import style from "./App.module.css";

export interface ITask {
	id: string;
	title: string;
	isComplete: boolean;
}

export interface IModifyTask {
	onChangeTaskCompleteStatus: (taskId: string) => void;
	onDeleteTask: (taskId: string) => void;
}

function App() {
	const [tasks, setTasks] = useState<ITask[]>([]);

	function handleAddTask(title: string) {
		const newTask: ITask = {
			id: uuid(),
			title,
			isComplete: false,
		};
		setTasks((state) => [...state, newTask]);
	}

	function handleToggleTaskCompleteStatus(taskId: string) {
		setTasks((state) =>
			state.map((task) => {
				if (task.id === taskId) {
					return {
						...task,
						isComplete: !task.isComplete,
					};
				}
				return task;
			})
		);
	}

	function handleDeleteTask(taskId: string) {
		setTasks((state) => state.filter((task) => task.id !== taskId));
	}

	return (
		<div>
			<Header />
			<main className={style.wrapper}>
				<NewTaskForm onAddTask={handleAddTask} />
				<TasksContainer
					tasks={tasks}
					onChangeTaskCompleteStatus={handleToggleTaskCompleteStatus}
					onDeleteTask={handleDeleteTask}
				/>
			</main>
		</div>
	);
}

export default App;
