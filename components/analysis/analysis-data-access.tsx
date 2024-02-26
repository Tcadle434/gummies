import { useQuery } from "@tanstack/react-query";
import { getGraphQLClient } from "@/app/utils/graphqlClient";
import { AllAnalysisQuery } from "@/gql/graphql";
import allAnalysisQueryDocument from "@/graphql/queries/allAnalysisQuery.graphql";

export function useAnalysis() {
	const client = getGraphQLClient();

	console.log("analysis query", allAnalysisQueryDocument);

	const analysisTanstackQuery = useQuery<AllAnalysisQuery>({
		queryKey: ["analysis"],
		queryFn: async () => {
			const data: AllAnalysisQuery = await client.request(allAnalysisQueryDocument, {
				first: 20,
			});
			return data;
		},
	});

	return { analysisTanstackQuery };
}
