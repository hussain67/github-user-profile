import { render, screen, act } from "../../../../src/test-utils/test-utils";

import Info from "../Info";

const pause = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, 200);
	});
};
test("Examine the number of items displayed", async () => {
	render(<Info />);

	await act(async () => {
		await pause();
		const noOfItems = await screen.findAllByRole("article");

		expect(noOfItems).toHaveLength(4);
	});
});
