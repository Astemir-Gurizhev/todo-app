import { FaRegCheckCircle } from 'react-icons/fa'
import { RiDeleteBin2Line, RiTornadoLine } from 'react-icons/ri'
import { ITask } from '../../types/task.types'
import styles from './Task.module.css'

const Task = ({ task, deleteTask, toggleTask }: ITask) => {
	return (
		<div
			className={`${styles.task} ${task.isCompleted ? styles.completed : ''} `}
		>
			<div className={styles.left}>
				<RiTornadoLine className={styles.todo} />
				<p>{task.text}</p>
			</div>

			<div className={styles.right}>
				<RiDeleteBin2Line
					className={styles.delete}
					onClick={() => deleteTask(task.id)}
				/>
				<FaRegCheckCircle
					onClick={() => toggleTask(task.id)}
					className={styles.check}
				/>
			</div>
		</div>
	)
}
export default Task
