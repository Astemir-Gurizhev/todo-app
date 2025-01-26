import Task from '../task/Task'
import styles from './TaskList.module.css'
const TaskList = ({ tasks, deleteTask, deleteCompletedTask, toggleTask }) => {
	return (
		<div className={styles.list}>
			{tasks.length ? (
				tasks.map(task => (
					<Task
						deleteCompletedTask={deleteCompletedTask}
						deleteTask={deleteTask}
						toggleTask={toggleTask}
						key={task.id}
						task={task}
					/>
				))
			) : (
				<h2 style={{ textAlign: 'center' }}> Задач нет </h2>
			)}
		</div>
	)
}
export default TaskList
