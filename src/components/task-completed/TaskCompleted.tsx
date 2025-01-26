const TaskCompleted = ({comletedTasksExist}) => {
	return <>
		{comletedTasksExist > 0 && (<p style={{
			textAlign: "center"
		}}>Выполнено задач: {comletedTasksExist}</p>)}
	</>
}
export default TaskCompleted