import { useState } from "react";
import DropDown from "../components/DropDown";
function DropDownPage() {
	const options = [
		{ label: "Red", value: "red" },
		{ label: "Green", value: "green" },
		{ label: "Blue", value: "blue" },
	];
	const [selected, setSelected] = useState(null);
	const handleSelect = (selectedValue) => {
		setSelected(selectedValue);
	};
	return (
		<div className="flex">
			<DropDown options={options} onChange={handleSelect} value={selected} />
			<DropDown options={options} onChange={handleSelect} value={selected} />
		</div>
	);
}

export default DropDownPage;
