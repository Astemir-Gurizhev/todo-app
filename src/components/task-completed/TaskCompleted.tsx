interface Props {
	comletedTasksExist: number
}

const TaskCompleted = ({ comletedTasksExist }: Props) => {
	return (
		<>
			{comletedTasksExist > 0 && (
				<p style={{ textAlign: 'center' }}>
					Выполнено задач: {comletedTasksExist}
				</p>
			)}
		</>
	)
}

export default TaskCompleted
