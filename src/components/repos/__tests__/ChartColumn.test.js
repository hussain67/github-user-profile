import { render, screen } from "@testing-library/react";
import ChartColumn from "../ChartColumn";

const data = [{ name: "React advance", stars: 4000 }];

test("Should show the chart properly", () => {
	render(<ChartColumn data={data} />);
	const text = screen.getByText("React advance");
	expect(text).toBeInTheDocument();
});
