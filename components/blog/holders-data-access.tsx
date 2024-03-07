"use client";

import { useQuery } from "@tanstack/react-query";
import { getHolders } from "@/app/utils/getHolders";
import { getGraphQLClient } from "@/app/utils/graphqlClient";
import { AllBlogsQuery } from "@/gql/graphql";
import allBlogsQueryDocument from "@/graphql/queries/allBlogsQuery.graphql";

export function useHolders() {
	const holdersQuery = useQuery({
		queryKey: ["holders"],
		queryFn: async () => {
			const holders = getHolders();
			return holders;
		},
	});

	return { holdersQuery };
}

export function useBlogs() {
	const client = getGraphQLClient();
	const blogsTanstackQuery = useQuery<AllBlogsQuery>({
		queryKey: ["blogs"],
		queryFn: async () => {
			const data: AllBlogsQuery = await client.request(allBlogsQueryDocument, { first: 10 });
			return data;
		},
	});

	return { blogsTanstackQuery };
}
