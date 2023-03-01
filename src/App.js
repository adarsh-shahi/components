import { GoBell, GoCloudDownload } from "react-icons/go";
import Accordion from "./components/Accordion";

function App() {
	const show = [
		{
			id: "ufsdh",
			label: "how are you",
			content:
				"nice boy see you there. nice boy see you there nice boy see you there nice boy see you there nice boy see you there ",
		},
		{
			id: "kjlahsd",
			label: "how are you",
			content:
				"nice boy see you there nice boy see you there nice boy see you therenice boy see you there nice boy see you there nice boy see you there nice boy see you there",
		},
		{
			id: "bjldasfk",
			label: "how are you",
			content:
				"nice boy see you there nice boy see you there nice boy see you there nice boy see you there nice boy see you there nice boy see you there nice boy see you there",
		},
		{
			id: "yngfadshj",
			label: "how are you",
			content:
				"nice boy see you there nice boy see you there nice boy see you there nice boy see you there nice boy see you there nice boy see you there",
		},
	];
	const handleClick = () => {
		console.log(`hi there`);
	};

	return (
		<div>
			<Accordion lists={show} />
		</div>
	);
}

export default App;
