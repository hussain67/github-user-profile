import { render, screen } from "@testing-library/react";
import ChartPie from "../ChartPie";

const data = [{ name: "Java", value: 300 }];

describe("Pie Chart", () => {
	test("Should render the chart correctly", () => {
		render(<ChartPie data={data} />);
		const text = screen.getByText("Java");
		expect(text).toBeInTheDocument();
	});
});
