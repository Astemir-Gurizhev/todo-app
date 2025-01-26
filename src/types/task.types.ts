import { MouseEventHandler } from 'react'

export interface ITask {
	text: string
	index: number
	onClick: MouseEventHandler<HTMLImageElement>
}
