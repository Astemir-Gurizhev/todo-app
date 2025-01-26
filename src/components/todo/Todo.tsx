import CreateTask from '../create-task/CreateTask'
import Tasks from '../tasks/Tasks'

const Todo = () => {
	return <>
		<h1>Todo App</h1>
		<CreateTask />
		<Tasks />
	</>
}
export default Todo