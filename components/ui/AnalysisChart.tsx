import React from "react";
import { Analysis } from "@/gql/graphql";

export default function AnalysisChart({ analysisData }: { analysisData: any }) {
	const keys = [
		"Protocol",
		"Category",
		"TVL",
		"Liquidity",
		"Asset Coverage",
		"User Base",
		"Has Token",
		"Narrative",
		"Sentiment",
		"Contract Risk",
		"Audit",
		"Reputation",
		"Team",
		"G-Rating",
		"Safety",
		"Last Update",
	];

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left rtl:text-right">
				<thead className="text-xs bg-primary">
					<tr>
						{keys.map((key, index) => (
							<th key={index + 1} scope="col" className="px-6 py-3">
								{key}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{analysisData.map(({ node }: { node: Analysis }, index: number) => (
						<tr
							key={index + 1}
							className="border-b bg-foreground border-mutedForeground"
						>
							<th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
								{node.protocol}
							</th>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								{node.category}
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">{node.tvl}</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								{node.liquidity}
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								{node.assetcoverage}
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								{node.userbase}
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								{node.hastoken}
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								{node.narrative}
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								{node.sentiment}
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								{node.contractrisk}
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								{node.audit}
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								{node.reputation}
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">{node.team}</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								{node.grating}
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								{node.safety}
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								{node.lastupdate}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
