import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ITask } from '../../types/task.types'
import TaskForm from '../TaskForm/TaskForm'
import TaskList from '../TaskList/TaskList'
import TaskBtns from '../task-btns/TaskBtns'
import TaskCompleted from '../task-completed/TaskCompleted'

const Todo = () => {
	const [tasks, setTasks] = useState<ITask[]>([])

	const addTaskHandler = (text: string) => {
		const newTask: ITask = {
			id: String(uuidv4()),
			text,
			isCompleted: false,
		}
		setTasks([...tasks, newTask])
	}

	const deleteTaskHandler = (id: string) => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	const toggleTaskHandler = (id: string) => {
		setTasks(
			tasks.map(task =>
				task.id === id
					? { ...task, isCompleted: !task.isCompleted }
					: { ...task }
			)
		)
	}

	const deleteCompletedTaskHandler = () => {
		setTasks(tasks.filter(task => !task.isCompleted))
	}

	const deleteAllTasksHandler = () => {
		setTasks([])
	}

	const completedTasksCounter = tasks.filter(task => task.isCompleted).length

	return (
		<>
			<h1>Todo App</h1>
			<TaskForm addTask={addTaskHandler} />

			{tasks.length > 0 && (
				<TaskBtns
					comletedTasksExist={!!completedTasksCounter}
					deleteCompletedTask={deleteCompletedTaskHandler}
					deleteAllTasks={deleteAllTasksHandler}
				/>
			)}

			<TaskList
				tasks={tasks}
				deleteTask={deleteTaskHandler}
				toggleTask={toggleTaskHandler}
				deleteCompletedTask={deleteCompletedTaskHandler}
			/>

			<TaskCompleted comletedTasksExist={completedTasksCounter} />
		</>
	)
}

export default Todo
