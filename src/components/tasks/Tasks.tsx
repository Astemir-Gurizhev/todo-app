import Task from '../task/Task'
import styles from "./Tasks.module.css"
const Tasks = () => {
	return <div className={styles.tasks}> 
		<Task />
		<Task />
		<Task />
	</div>
}
export default Tasks