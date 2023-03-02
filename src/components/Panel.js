function Panel({ children, className, ...rest }) {
	const finalClasses = "border rounded p-3 shadow bg-white w-full " + className;
	return (
		<div {...rest} className={finalClasses}>
			{children}
		</div>
	);
}

export default Panel;
