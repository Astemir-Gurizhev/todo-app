const Button = ({ onClick, children, title, disabled = false, className }) => {
	return (
		<button className={className} onClick={onClick} title={title} disabled={disabled}>
			{children}
		</button>
	)
}
export default Button
