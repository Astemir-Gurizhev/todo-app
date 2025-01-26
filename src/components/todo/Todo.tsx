import CreateTask from '../create-task/CreateTask'
import Task from '../task/Task'

const Todo = () => {
	return <>
		<h1>Todo App</h1>
		<CreateTask />
		<Task />
	</>
}
export default Todo