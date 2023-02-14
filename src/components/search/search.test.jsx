//import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../src/test-utils/test-library-utils";
import Search from "./Search";
//import { pause } from "../../test-utils/test-helper-function";

const user = userEvent.setup();
test("Should render Search component properly", async () => {
	render(<Search />);

	expect(await screen.findByPlaceholderText(/Enter Github User/i)).toBeInTheDocument();
	const searchInput = await screen.findByRole("textbox");
	await user.type(searchInput, "wesbos");

	const btn = await screen.findByRole("button", { name: /search/i });
	await user.click(btn);

	expect(await searchInput.value).toBe("wesbos");
});
