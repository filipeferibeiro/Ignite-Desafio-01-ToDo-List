import TodoLogo from "../assets/todo-logo.svg";
import styles from "./Header.module.css";

export function Header() {
	return (
		<header className={styles.header}>
			<img src={TodoLogo} alt="Logotipo do Todo List" />
		</header>
	);
}
