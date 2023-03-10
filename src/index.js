import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/Navigation";

const ele = document.getElementById("root");
const root = ReactDOM.createRoot(ele);
root.render(
	<NavigationProvider>
		<App />
	</NavigationProvider>
);
