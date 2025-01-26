import { useState } from 'react'
import TaskForm from '../TaskForm/TaskForm'
import TaskList from '../TaskList/TaskList'
import TaskBtns from '../task-btns/TaskBtns'

const Todo = () => {
	const [tasks, setTasks] = useState([])

	const addTaskHandler = newTask => {
		setTasks([...tasks, newTask])
	}

	const deleteTaskHandler = index => {
		setTasks(tasks.filter((_, i)=> i !== index))
	}

	const deleteAllTasksHandler = () => {
		setTasks([])
	}

	return (
		<>
			<h1>Todo App</h1>
			<TaskForm addTask={addTaskHandler} />

			{tasks.length > 0 && ( <TaskBtns deleteAllTasks={deleteAllTasksHandler}/>) }

			<TaskList tasks={tasks} deleteTask={deleteTaskHandler}/>
		</>
	)
}
export default Todo
