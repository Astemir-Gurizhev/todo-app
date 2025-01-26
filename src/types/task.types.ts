import { MouseEventHandler } from 'react'

export interface ITask {
	text: string
	index: number
	deleteTask: any
	onClick: MouseEventHandler<HTMLImageElement>
}
