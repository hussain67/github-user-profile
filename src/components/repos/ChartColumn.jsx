import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Label } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const getPath = (x, y, width, height) => {
	return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = props => {
	const { fill, x, y, width, height } = props;

	return (
		<path
			d={getPath(x, y, width, height)}
			stroke="none"
			fill={fill}
		/>
	);
};

export default function ChartColumn({ data }) {
	return (
		<article className="card repos-item">
			<h2 className="chart-title">Most polular</h2>

			<BarChart
				width={370}
				height={300}
				data={data}
				margin={{
					top: 20,
					right: 0,
					left: 10,
					bottom: 20
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name">
					<Label
						value="Repos"
						offset={0}
						position="bottom"
					/>
				</XAxis>
				<YAxis label={{ value: "Stars", angle: -90, position: "insideLeft" }} />
				<Bar
					dataKey="stars"
					fill="#8884d8"
					shape={<TriangleBar />}
					label={{ position: "top" }}
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={colors[index % 20]}
						/>
					))}
				</Bar>
			</BarChart>
		</article>
	);
}
