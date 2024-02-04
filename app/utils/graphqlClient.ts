import { GraphQLClient } from "graphql-request";

export const getGraphQLClient = (): GraphQLClient => {
	const endpoint: string = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "";
	const apiKey: string | undefined = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	const headers: HeadersInit = {
		"Content-Type": "application/json",
		apikey: apiKey ?? "",
		Authorization: `Bearer ${apiKey ?? ""}`,
	};

	return new GraphQLClient(endpoint, { headers });
};
