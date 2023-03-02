import { useContext } from "react";
import { NavigationContext } from "../context/Navigation";

function Link({ to, children, className, activeClassName, ...rest }) {
	const { navigate, currentPath } = useContext(NavigationContext);

	const handleClick = (event) => {
		if (event.ctrlKey && event.metaKey) return;
		event.preventDefault();
		navigate(to);
	};

	const classes =
		"text-blue-500 " +
		className +
		" " +
		(currentPath === to && activeClassName) +
		" ";

	return (
		<a className={classes} onClick={handleClick} href={to} {...rest}>
			{children}
		</a>
	);
}
export default Link;
