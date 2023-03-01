function Button({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,
	className, // consumers custom CSS for this component
	...rest //events -> onClick, onMouseEnter,etc
}) {
	if (
		Number(!!primary) +
			Number(!!secondary) +
			Number(!!danger) +
			Number(!!success) +
			Number(!!warning) >
		1
	) {
		return new Error(`Can only use one type`);
	}

	let baseClasses =
		"px-3 py-1.5 border-2 tracking-normal flex items-center " + className + " ";

	if (primary) baseClasses += "bg-blue-500 border-blue-600 ";
	else if (secondary) baseClasses += "bg-gray-900 border-gray-900 ";
	else if (danger) baseClasses += "bg-red-500 border-red-500 ";
	else if (success) baseClasses += "bg-green-500 border-green-600 ";
	else if (warning) baseClasses += "bg-yellow-500 border-yellow-400 ";

	if (rounded) baseClasses += "rounded-full ";
	if (outline) baseClasses += "bg-white ";
	else baseClasses += "text-white ";
	if (outline && primary) baseClasses += "text-blue-500 ";
	else if (outline && secondary) baseClasses += "text-gray-900 ";
	else if (outline && success) baseClasses += "text-green-500 ";
	else if (outline && warning) baseClasses += "text-whit ";
	else if (outline && danger) baseClasses += "text-red-500 ";

	return (
		<button {...rest} className={baseClasses}>
			{children}
		</button>
	);
}

export default Button;
