import { RiDeleteBin2Line } from 'react-icons/ri'
import { SlRefresh } from 'react-icons/sl'
import styles from './TaskBtns.module.css'
const TaskBtns = ({ deleteAllTasks }) => {
	return (
		<div className={styles.btns}>
			<SlRefresh onClick={() => deleteAllTasks()} className={styles.btn} />
			<RiDeleteBin2Line className={styles.btn} />
		</div>
	)
}
export default TaskBtns
