import React, { MouseEventHandler } from 'react'

interface ButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>
	children: React.ReactNode
	title?: string
	disabled?: boolean
	className?: string
}

const Button = ({
	onClick,
	children,
	title,
	disabled = false,
	className,
}: ButtonProps) => {
	return (
		<button
			className={className}
			onClick={onClick}
			title={title}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
