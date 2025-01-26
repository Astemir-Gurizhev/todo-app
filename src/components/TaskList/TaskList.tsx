import { ITask } from '../../types/task.types'
import Task from '../task/Task'
import styles from './TaskList.module.css'

interface Props {
	tasks: ITask[]
	deleteTask: (id: string) => void
	deleteCompletedTask: () => void
	toggleTask: (id: string) => void
}

const TaskList = ({
	tasks,
	deleteTask,
	deleteCompletedTask,
	toggleTask,
}: Props) => {
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
				<h2 style={{ textAlign: 'center' }}>Задач нет</h2>
			)}
		</div>
	)
}

export default TaskList
