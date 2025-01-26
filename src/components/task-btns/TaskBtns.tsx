import { RiDeleteBin2Line } from 'react-icons/ri'
import { SlRefresh } from 'react-icons/sl'
import Button from '../ui/Button.module'
import styles from './TaskBtns.module.css'

interface IProps {
	deleteCompletedTask: () => void
	deleteAllTasks: () => void
	comletedTasksExist: boolean
}

const TaskBtns = ({
	deleteCompletedTask,
	deleteAllTasks,
	comletedTasksExist,
}: IProps) => {
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
