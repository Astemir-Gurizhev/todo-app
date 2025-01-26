import { useState } from 'react'
import TaskForm from '../TaskForm/TaskForm'
import TaskList from '../TaskList/TaskList'


const Todo = () => {

	const [tasks, setTasks] = useState([])

	const addTaskHandler = (newTask) => {
		setTasks([...tasks, newTask])
	}

	return <>
		<h1>Todo App</h1>
		<TaskForm addTask={addTaskHandler}/>
		<TaskList tasks={tasks}/>
	</>
}
export default Todo