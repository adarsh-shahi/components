import Route from "./components/Route";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import AccordioPage from "./pages/AccordionPage";
import ModalPage from "./pages/ModalPage";
import SideBar from "./components/Sidebar";

function App() {
	return (
		<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
			<SideBar />
			<div className="col-span-5">
				<Route path="/accordion">
					<AccordioPage />
				</Route>
				<Route path="/">
					<DropdownPage />
				</Route>
				<Route path="/button">
					<ButtonPage />
				</Route>
				<Route path="/modal">
					<ModalPage />
				</Route>
			</div>
		</div>
	);
}

export default App;
