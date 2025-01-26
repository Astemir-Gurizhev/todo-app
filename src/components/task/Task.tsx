import { ITask } from '../../types/task.types'
import styles from './Task.module.css'

const Task = ({text, index, deleteTask }:ITask) => {
	return (
		<div onDoubleClick={() => deleteTask(index)} className={styles.task}>
			<div className={styles.left}>
				<img src='logo.png' alt='' />
				<p>{text}</p>
			</div>

			<div className={styles.right}>
				<img onClick={() => deleteTask(index)} src='delete.png' alt='' />
				<img src='complete.webp' alt='' />
			</div>
		</div>
	)
}
export default Task
