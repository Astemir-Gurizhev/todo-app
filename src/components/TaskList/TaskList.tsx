import Task from '../task/Task'
import styles from "./TaskList.module.css"
const TaskList = ({tasks}) => {

	return <div className={styles.list}> 
		{tasks.length > 0 ? tasks.map((task, i) => (<Task key={i} text={task} />)) : (<h2 style={{textAlign: 'center'}}>Задач нет</h2>)}
	</div>
}
export default TaskList