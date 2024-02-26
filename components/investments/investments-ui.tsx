"use client";

import { useInvestments } from "./investments-data-access";
import { Investments } from "@/gql/graphql";
import { InvestmentCard } from "../ui/InvestmentCard";
import Loader from "../ui/Loader";

export function DisplayInvestments() {
	const { investmentsTanstackQuery } = useInvestments();

	if (investmentsTanstackQuery.isLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<Loader />
			</div>
		);
	}

	if (investmentsTanstackQuery.isError) {
		return (
			<div className="h-screen flex items-center justify-center font-blinker px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				There was an error fetching the data. Please try again later.
			</div>
		);
	}

	return (
		<div className="font-blinker my-6 md:mt-20 px-4 md:px-20">
			<div className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2 mt-20">
				{/* map through blogsTanstackQuery.data.blogCollection.edges and for each inner node object make a blog card in a grid object */}
				{investmentsTanstackQuery.data?.investmentsCollection!.edges.map(
					({ node }: { node: Investments }, index: number) => (
						<InvestmentCard
							key={index}
							id={node.id}
							name={node.name}
							date={node.date}
							status={node.status}
							imageUrl={node.imageUrl}
						/>
					)
				)}
			</div>
		</div>
	);
}
