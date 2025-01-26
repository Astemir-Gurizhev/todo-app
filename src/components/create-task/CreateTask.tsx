import styles from './CreateTask.module.css'
const CreateTask = () => {
	return (
		<div className={styles.create}>
			<input placeholder='Enter new todo' type='text' />
			<button>Submit</button>
		</div>
	)
}
export default CreateTask
