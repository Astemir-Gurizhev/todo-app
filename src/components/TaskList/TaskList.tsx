import Task from '../task/Task'
import styles from './TaskList.module.css'
const TaskList = ({ tasks, deleteTask }) => {
	return (
		<div className={styles.list}>
			{tasks.length ? (
				tasks.map((task, i) => <Task deleteTask={deleteTask} key={i} index={i} text={task} />)
			) : (
				<h2 style={{ textAlign: 'center' }}> Задач нет </h2>
			)}
		</div>
	)
}
export default TaskList
