"use client";

import { getGraphQLClient } from "@/app/utils/graphqlClient";
import { useQuery } from "@tanstack/react-query";
import allInvestmentsQueryDocument from "@/graphql/queries/allInvestmentsQuery.graphql";
import { AllInvestmentsQuery } from "@/gql/graphql";

export function useInvestments() {
	const client = getGraphQLClient();

	console.log("investments query", allInvestmentsQueryDocument);

	const investmentsTanstackQuery = useQuery<AllInvestmentsQuery>({
		queryKey: ["investments"],
		queryFn: async () => {
			const data: AllInvestmentsQuery = await client.request(allInvestmentsQueryDocument, {
				first: 10,
			});
			return data;
		},
	});

	return { investmentsTanstackQuery };
}
