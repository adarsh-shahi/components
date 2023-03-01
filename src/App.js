import { GoBell, GoCloudDownload } from "react-icons/go";
import Button from "./components/Button";
function App() {
	const handleClick = () => {
		console.log(`hi there`);
	};

	return (
		<div>
			<div>
				<Button className="mb-5" primary rounded outline onClick={handleClick}>
					<GoBell />
					SUBMIT
				</Button>
			</div>
			<div>
				<Button secondary outline onMouseEnter={handleClick}>
					<GoBell />
					CANCEL
				</Button>
			</div>
			<div>
				<Button success rounded outline>
					<GoCloudDownload />
					BUY NOW
				</Button>
			</div>
			<div>
				<Button warning rounded outline>
					ADD TO CART
				</Button>
			</div>
			<div>
				<Button danger rounded outline>
					ADD TO CART
				</Button>
			</div>
		</div>
	);
}

export default App;
