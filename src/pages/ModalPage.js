import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
	const messages = [
		{
			label: "here is an important message for you to accept",
			action: "I accept",
		},
	];

	const [showModal, setShowModal] = useState(false);

	const handleCLick = () => {
		setShowModal(true);
	};

	const onClose = () => {
		setShowModal(false);
	};

	const actionBar = (
		<Button onClick={onClose} primary>
			{messages[0].action}
		</Button>
	);

	const modal = (
		<Modal onClose={onClose} actionBar={actionBar}>
			<p>{messages[0].label}</p>
		</Modal>
	);

	return (
		<div>
			<Button primary onClick={handleCLick}>
				Click Me
			</Button>
			{showModal && modal}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
				ligula in ornare consectetur. Nam faucibus arcu in convallis finibus.
				Maecenas pharetra sem lorem, eu pellentesque velit euismod feugiat.
				Vivamus sollicitudin tellus ac tincidunt tincidunt. Nulla vel velit
				facilisis, dapibus nisl in, hendrerit mauris. Praesent tempor ligula ac
				massa lobortis, quis dapibus lectus accumsan. Integer a placerat tellus,
				in volutpat justo. Aliquam condimentum purus sed velit blandit, eget
				tempus tellus molestie. Nam auctor efficitur neque sed tincidunt. Fusce
				nec arcu sit amet ipsum vulputate feugiat eu nec arcu. Proin nec
				vestibulum arcu. Suspendisse laoreet vestibulum fringilla. Praesent
				luctus eros massa, pharetra auctor diam mollis eu. Vestibulum ut quam
				nec odio consectetur aliquam sodales eu libero.{" "}
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
				ligula in ornare consectetur. Nam faucibus arcu in convallis finibus.
				Maecenas pharetra sem lorem, eu pellentesque velit euismod feugiat.
				Vivamus sollicitudin tellus ac tincidunt tincidunt. Nulla vel velit
				facilisis, dapibus nisl in, hendrerit mauris. Praesent tempor ligula ac
				massa lobortis, quis dapibus lectus accumsan. Integer a placerat tellus,
				in volutpat justo. Aliquam condimentum purus sed velit blandit, eget
				tempus tellus molestie. Nam auctor efficitur neque sed tincidunt. Fusce
				nec arcu sit amet ipsum vulputate feugiat eu nec arcu. Proin nec
				vestibulum arcu. Suspendisse laoreet vestibulum fringilla. Praesent
				luctus eros massa, pharetra auctor diam mollis eu. Vestibulum ut quam
				nec odio consectetur aliquam sodales eu libero.{" "}
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
				ligula in ornare consectetur. Nam faucibus arcu in convallis finibus.
				Maecenas pharetra sem lorem, eu pellentesque velit euismod feugiat.
				Vivamus sollicitudin tellus ac tincidunt tincidunt. Nulla vel velit
				facilisis, dapibus nisl in, hendrerit mauris. Praesent tempor ligula ac
				massa lobortis, quis dapibus lectus accumsan. Integer a placerat tellus,
				in volutpat justo. Aliquam condimentum purus sed velit blandit, eget
				tempus tellus molestie. Nam auctor efficitur neque sed tincidunt. Fusce
				nec arcu sit amet ipsum vulputate feugiat eu nec arcu. Proin nec
				vestibulum arcu. Suspendisse laoreet vestibulum fringilla. Praesent
				luctus eros massa, pharetra auctor diam mollis eu. Vestibulum ut quam
				nec odio consectetur aliquam sodales eu libero.{" "}
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
				ligula in ornare consectetur. Nam faucibus arcu in convallis finibus.
				Maecenas pharetra sem lorem, eu pellentesque velit euismod feugiat.
				Vivamus sollicitudin tellus ac tincidunt tincidunt. Nulla vel velit
				facilisis, dapibus nisl in, hendrerit mauris. Praesent tempor ligula ac
				massa lobortis, quis dapibus lectus accumsan. Integer a placerat tellus,
				in volutpat justo. Aliquam condimentum purus sed velit blandit, eget
				tempus tellus molestie. Nam auctor efficitur neque sed tincidunt. Fusce
				nec arcu sit amet ipsum vulputate feugiat eu nec arcu. Proin nec
				vestibulum arcu. Suspendisse laoreet vestibulum fringilla. Praesent
				luctus eros massa, pharetra auctor diam mollis eu. Vestibulum ut quam
				nec odio consectetur aliquam sodales eu libero.{" "}
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
				ligula in ornare consectetur. Nam faucibus arcu in convallis finibus.
				Maecenas pharetra sem lorem, eu pellentesque velit euismod feugiat.
				Vivamus sollicitudin tellus ac tincidunt tincidunt. Nulla vel velit
				facilisis, dapibus nisl in, hendrerit mauris. Praesent tempor ligula ac
				massa lobortis, quis dapibus lectus accumsan. Integer a placerat tellus,
				in volutpat justo. Aliquam condimentum purus sed velit blandit, eget
				tempus tellus molestie. Nam auctor efficitur neque sed tincidunt. Fusce
				nec arcu sit amet ipsum vulputate feugiat eu nec arcu. Proin nec
				vestibulum arcu. Suspendisse laoreet vestibulum fringilla. Praesent
				luctus eros massa, pharetra auctor diam mollis eu. Vestibulum ut quam
				nec odio consectetur aliquam sodales eu libero.{" "}
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
				ligula in ornare consectetur. Nam faucibus arcu in convallis finibus.
				Maecenas pharetra sem lorem, eu pellentesque velit euismod feugiat.
				Vivamus sollicitudin tellus ac tincidunt tincidunt. Nulla vel velit
				facilisis, dapibus nisl in, hendrerit mauris. Praesent tempor ligula ac
				massa lobortis, quis dapibus lectus accumsan. Integer a placerat tellus,
				in volutpat justo. Aliquam condimentum purus sed velit blandit, eget
				tempus tellus molestie. Nam auctor efficitur neque sed tincidunt. Fusce
				nec arcu sit amet ipsum vulputate feugiat eu nec arcu. Proin nec
				vestibulum arcu. Suspendisse laoreet vestibulum fringilla. Praesent
				luctus eros massa, pharetra auctor diam mollis eu. Vestibulum ut quam
				nec odio consectetur aliquam sodales eu libero.{" "}
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
				ligula in ornare consectetur. Nam faucibus arcu in convallis finibus.
				Maecenas pharetra sem lorem, eu pellentesque velit euismod feugiat.
				Vivamus sollicitudin tellus ac tincidunt tincidunt. Nulla vel velit
				facilisis, dapibus nisl in, hendrerit mauris. Praesent tempor ligula ac
				massa lobortis, quis dapibus lectus accumsan. Integer a placerat tellus,
				in volutpat justo. Aliquam condimentum purus sed velit blandit, eget
				tempus tellus molestie. Nam auctor efficitur neque sed tincidunt. Fusce
				nec arcu sit amet ipsum vulputate feugiat eu nec arcu. Proin nec
				vestibulum arcu. Suspendisse laoreet vestibulum fringilla. Praesent
				luctus eros massa, pharetra auctor diam mollis eu. Vestibulum ut quam
				nec odio consectetur aliquam sodales eu libero.{" "}
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
				ligula in ornare consectetur. Nam faucibus arcu in convallis finibus.
				Maecenas pharetra sem lorem, eu pellentesque velit euismod feugiat.
				Vivamus sollicitudin tellus ac tincidunt tincidunt. Nulla vel velit
				facilisis, dapibus nisl in, hendrerit mauris. Praesent tempor ligula ac
				massa lobortis, quis dapibus lectus accumsan. Integer a placerat tellus,
				in volutpat justo. Aliquam condimentum purus sed velit blandit, eget
				tempus tellus molestie. Nam auctor efficitur neque sed tincidunt. Fusce
				nec arcu sit amet ipsum vulputate feugiat eu nec arcu. Proin nec
				vestibulum arcu. Suspendisse laoreet vestibulum fringilla. Praesent
				luctus eros massa, pharetra auctor diam mollis eu. Vestibulum ut quam
				nec odio consectetur aliquam sodales eu libero.{" "}
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
				ligula in ornare consectetur. Nam faucibus arcu in convallis finibus.
				Maecenas pharetra sem lorem, eu pellentesque velit euismod feugiat.
				Vivamus sollicitudin tellus ac tincidunt tincidunt. Nulla vel velit
				facilisis, dapibus nisl in, hendrerit mauris. Praesent tempor ligula ac
				massa lobortis, quis dapibus lectus accumsan. Integer a placerat tellus,
				in volutpat justo. Aliquam condimentum purus sed velit blandit, eget
				tempus tellus molestie. Nam auctor efficitur neque sed tincidunt. Fusce
				nec arcu sit amet ipsum vulputate feugiat eu nec arcu. Proin nec
				vestibulum arcu. Suspendisse laoreet vestibulum fringilla. Praesent
				luctus eros massa, pharetra auctor diam mollis eu. Vestibulum ut quam
				nec odio consectetur aliquam sodales eu libero.{" "}
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
				ligula in ornare consectetur. Nam faucibus arcu in convallis finibus.
				Maecenas pharetra sem lorem, eu pellentesque velit euismod feugiat.
				Vivamus sollicitudin tellus ac tincidunt tincidunt. Nulla vel velit
				facilisis, dapibus nisl in, hendrerit mauris. Praesent tempor ligula ac
				massa lobortis, quis dapibus lectus accumsan. Integer a placerat tellus,
				in volutpat justo. Aliquam condimentum purus sed velit blandit, eget
				tempus tellus molestie. Nam auctor efficitur neque sed tincidunt. Fusce
				nec arcu sit amet ipsum vulputate feugiat eu nec arcu. Proin nec
				vestibulum arcu. Suspendisse laoreet vestibulum fringilla. Praesent
				luctus eros massa, pharetra auctor diam mollis eu. Vestibulum ut quam
				nec odio consectetur aliquam sodales eu libero.{" "}
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
				ligula in ornare consectetur. Nam faucibus arcu in convallis finibus.
				Maecenas pharetra sem lorem, eu pellentesque velit euismod feugiat.
				Vivamus sollicitudin tellus ac tincidunt tincidunt. Nulla vel velit
				facilisis, dapibus nisl in, hendrerit mauris. Praesent tempor ligula ac
				massa lobortis, quis dapibus lectus accumsan. Integer a placerat tellus,
				in volutpat justo. Aliquam condimentum purus sed velit blandit, eget
				tempus tellus molestie. Nam auctor efficitur neque sed tincidunt. Fusce
				nec arcu sit amet ipsum vulputate feugiat eu nec arcu. Proin nec
				vestibulum arcu. Suspendisse laoreet vestibulum fringilla. Praesent
				luctus eros massa, pharetra auctor diam mollis eu. Vestibulum ut quam
				nec odio consectetur aliquam sodales eu libero.{" "}
			</p>
		</div>
	);
}

export default ModalPage;
