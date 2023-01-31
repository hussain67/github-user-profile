import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../src/test-utils/test-utils";
import Search from "./Search";

test("Should render Search component properly", async () => {
	render(<Search />);
	await act(async () => {
		expect(await screen.findByPlaceholderText(/Enter Github User/i)).toBeInTheDocument();

		const searchInput = await screen.findByRole("textbox");
		userEvent.type(searchInput, "shahid");
		expect(searchInput.value).toBe("shahid");
	});
});
