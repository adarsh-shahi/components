import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function DropDown({ options, onChange, value }) {
	const [isOpen, setIsOpen] = useState(false);

	const divEl = useRef();

	const selectHandle = (option) => {
		onChange(option);
		setIsOpen(false);
	};

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handler = (event) => {
			if (divEl.current && !divEl.current.contains(event.target))
				setIsOpen(false);
		};
		document.addEventListener("click", handler, true);
		return () => {
			document.removeEventListener("click", handler);
		};
	}, []);

	const renderedList = options.map((option) => {
		return (
			<div
				className="hover:bg-sky-100 rounded cursor-pointer p-1"
				onClick={() => selectHandle(option)}
				key={option.value}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={divEl} className="w-48 relative">
			<Panel
				className="flex justify-between items-center cursor-pointer"
				onClick={handleClick}
			>
				{value?.label || "Select..."}
				<GoChevronDown className="text-lg" />
			</Panel>
			{isOpen && <Panel className="absolute top-full">{renderedList}</Panel>}
		</div>
	);
}
export default DropDown;
