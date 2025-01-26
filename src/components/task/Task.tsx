import styles from './Task.module.css'
const Task = () => {
	return <div className={styles.task}>

		<div className={styles.left}>
			<img src="logo.png" alt="" />	
			<p>drink coffee</p>
		</div>

		<div className={styles.right}>
			<img src="delete.png" alt="" />
			<img src="complete.webp" alt="" />
		</div>

	</div>
}
export default Task
