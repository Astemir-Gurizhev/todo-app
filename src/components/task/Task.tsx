import { FaRegCheckCircle } from 'react-icons/fa'
import { RiDeleteBin2Line, RiTornadoLine } from 'react-icons/ri'
import { ITask } from '../../types/task.types'
import styles from './Task.module.css'

const Task = ({task, deleteTask }:ITask) => {
	return (
		<div onDoubleClick={() => deleteTask(task.id)} className={styles.task}>
			<div className={styles.left}>
				<RiTornadoLine className={styles.todo} />
				<p>{task.text}</p>
			</div>

			<div className={styles.right}>
				<RiDeleteBin2Line className={styles.delete} onClick={() => deleteTask(task.id)}/>
				<FaRegCheckCircle className={styles.check}/>
			</div>
		</div>
	)
}
export default Task
