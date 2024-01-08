const Button = ({ children, classname, click, type }) => {
	return (
		<button onClick={click} type={type} className={classname}>
			{children}
		</button>
	)
}
export default Button
