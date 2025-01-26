import { ITask } from '../../types/task.types'
import styles from './Task.module.css'

const Task = (props: ITask) => {
	return <div className={styles.task}>

		<div className={styles.left}>
			<img src="logo.png" alt="" />	
			<p>{props.text}</p>
		</div>

		<div className={styles.right}>
			<img onClick={props.onClick} src="delete.png" alt="" />
			<img src="complete.webp" alt="" />
		</div>

	</div>
}
export default Task
