import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TaskForm from '../TaskForm/TaskForm'
import TaskList from '../TaskList/TaskList'
import TaskBtns from '../task-btns/TaskBtns'

const Todo = () => {
	const [tasks, setTasks] = useState([])

	const addTaskHandler = text => {
		const newTask = {
			id: uuidv4(),
			text,
			isCompleted: false
		}
		setTasks([...tasks, newTask])
	}

	const deleteTaskHandler = (id)=> {
		setTasks(tasks.filter((task)=> task.id !== id))
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
