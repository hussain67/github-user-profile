import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

const renderNavBar = () => {
	render(
		<BrowserRouter>
			<NavBar />
		</BrowserRouter>
	);
};

test("Should render nav bar properly", () => {
	renderNavBar();
	expect(screen.getByText("Welcome")).toBeInTheDocument();
	expect(screen.getByText("Sign out")).toBeInTheDocument();
});
