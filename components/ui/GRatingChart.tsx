import React from "react";

export default function GRatingChart() {
	const metrics = [
		{
			name: "TVL",
			points: "10",
			observations: "Very High = 10, Robust = 7.5, Moderate = 5, Low = 2.5",
		},
		{
			name: "Liquidity",
			points: "15",
			observations: "Very High = 15, Robust = 10, Moderate = 5, Low = 2.5",
		},
		{ name: "Asset Coverage", points: "5", observations: "Good = 5, Limited = 3, Low = 1" },
		{ name: "User Base", points: "10", observations: "Large = 10, Relative = 5, Small = 2.5" },
		{ name: "Has Token", points: "2", observations: "Confirmed Airdrop = 2, 0 for Others" },
		{ name: "Narrative", points: "5", observations: "Strong = 5, Growing = 3, Exotic = 1" },
		{ name: "Contract Risk", points: "5", observations: "No = 5, Yes = 0" },
		{ name: "Sentiment", points: "8", observations: "Bullish = 8, Neutral = 4, Bearish = 0" },
		{ name: "Audit", points: "3", observations: "Audit = 3, No Audit = 0" },
		{
			name: "Reputation",
			points: "10",
			observations: "Bluechip = 10, Good = 6, Rising = 3, Bad = 0, Unknown = 0",
		},
		{ name: "Team", points: "-", observations: "To be Decided, not counting ATM" },
	];

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left text-white">
				<thead className="text-xs text-white uppercase bg-primary">
					<tr>
						<th scope="col" className="px-6 py-3">
							Metric
						</th>
						<th scope="col" className="px-6 py-3">
							Points
						</th>
						<th scope="col" className="px-6 py-3">
							Observations
						</th>
					</tr>
				</thead>
				<tbody>
					{metrics.map((metric, index) => (
						<tr
							key={index}
							className={`${
								index % 2 === 0 ? "bg-white bg-opacity-10" : "bg-white bg-opacity-5"
							}`}
						>
							<td className="px-6 py-4">{metric.name}</td>
							<td className="px-6 py-4">{metric.points}</td>
							<td className="px-6 py-4">{metric.observations}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
