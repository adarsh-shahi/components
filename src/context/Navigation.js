import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const handlePop = () => {
			setCurrentPath(window.location.pathname);
		};
		window.addEventListener("popstate", handlePop); // browsers back and forward button listener

		return () => {
			window.removeEventListener("popstate", handlePop);
		};
	}, []);

	const navigate = (to) => {
		window.history.pushState({}, "", to);
		setCurrentPath(to);
	};

	return (
		<NavigationContext.Provider value={{ currentPath, navigate }}>
			{children}
		</NavigationContext.Provider>
	);
}

export { NavigationProvider, NavigationContext };
