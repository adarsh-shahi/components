import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ lists }) {
	const [expandIndex, setExpandIndex] = useState(0);

	const handleClick = (indexToExpand) => {
		if (expandIndex === indexToExpand) setExpandIndex(-1);
		else setExpandIndex(indexToExpand);
	};

	const renderedList = lists.map((list, index) => {
		return (
			<div key={list.id}>
				<div
					className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
					onClick={() => {
						handleClick(index);
					}}
				>
					{list.label}
					<span className="text-2xl">
						{index === expandIndex ? <GoChevronDown /> : <GoChevronLeft />}
					</span>
				</div>
				{index === expandIndex && (
					<div className="border-b p-5">{list.content}</div>
				)}
			</div>
		);
	});

	return <div className="border-x border-t rounded">{renderedList}</div>;
}

export default Accordion;
