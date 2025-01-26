import { useState } from 'react'
import TaskForm from '../TaskForm/TaskForm'
import TaskList from '../TaskList/TaskList'

const Todo = () => {
	const [tasks, setTasks] = useState([])

	const addTaskHandler = newTask => {
		setTasks([...tasks, newTask])
	}

	const deleteTaskHandler = index => {
		setTasks(tasks.filter((_, i)=> i !== index))
	}

	return (
		<>
			<h1>Todo App</h1>
			<TaskForm addTask={addTaskHandler} />
			<TaskList tasks={tasks} deleteTask={deleteTaskHandler}/>
		</>
	)
}
export default Todo
