import ClipboardIcon from "../assets/clipboard-icon.svg";

import styles from "./NoTasksInfo.module.css";

export function NoTasksInfo() {
	return (
		<div className={styles.noTasks}>
			<img src={ClipboardIcon} alt="Prancheta" />
			<strong>Você ainda não tem tarefas cadastradas</strong>
			<span>Crie tarefas e organize seus itens a fazer</span>
		</div>
	);
}
