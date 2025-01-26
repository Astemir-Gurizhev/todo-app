import { RiDeleteBin2Line } from 'react-icons/ri'
import { SlRefresh } from 'react-icons/sl'
import styles from './TaskBtns.module.css'
import Button from '../ui/Button.module'
const TaskBtns = ({
	deleteCompletedTask,
	deleteAllTasks,
	comletedTasksExist,
}) => {
	return (
		<div className={styles.btns}>
			<Button onClick={() => deleteAllTasks()} className={styles.btn}>
				<SlRefresh />
			</Button>
			<Button
				onClick={() => deleteCompletedTask()}
				className={styles.btn}
				disabled={!comletedTasksExist}
			>
				<RiDeleteBin2Line />
			</Button>
		</div>
	)
}
export default TaskBtns
