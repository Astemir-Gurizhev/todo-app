import { FormEventHandler, useState } from 'react'
import styles from './TaskForm.module.css'

const TaskForm = ({ addTask }): string => {
	const [text, setText] = useState('')

	const onSubmitHandler: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		if (text == '') return

		addTask(text)
		setText('')
	}

	return (
		<form onSubmit={onSubmitHandler} className={styles.form}>
			<input
				value={text}
				onChange={e => setText(e.target.value)}
				placeholder='Enter new todo'
				type='text'
			/>
			<button>Submit</button>
		</form>
	)
}
export default TaskForm
