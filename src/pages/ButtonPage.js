import { GoBell, GoCloudDownload } from "react-icons/go";
import Button from "../components/Button";
function ButtonPage() {
	return (
		<div>
			<div>
				<Button className="mb-5" primary rounded outline>
					<GoBell />
					SUBMIT
				</Button>
			</div>
			<div>
				<Button secondary outline>
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

export default ButtonPage;
