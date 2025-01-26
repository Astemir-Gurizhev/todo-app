import { MouseEventHandler } from 'react'

export interface ITask {
	text: string,
	onClick: MouseEventHandler<HTMLImageElement>
}