import { FormEventHandler, useState } from 'react'
import styles from './TaskForm.module.css'

interface Props {
	addTask: (text: string) => void
}

const TaskForm = ({ addTask }: Props) => {
	const [text, setText] = useState('')

	const onSubmitHandler: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		if (text.trim() === '') return

		addTask(text)
		setText('')
	}

	return (
		<form onSubmit={onSubmitHandler} className={styles.form}>
			<input
				value={text}
				onChange={e => setText(e.target.value)}
				placeholder='Введите новую задачу'
				type='text'
			/>
			<button>Создать</button>
		</form>
	)
}

export default TaskForm
