"use client";

import { getGraphQLClient } from "@/app/utils/graphqlClient";
import { useQuery } from "@tanstack/react-query";
import allNotesQueryDocument from "@/graphql/queries/allNotesQuery.graphql";

export function useNotes() {
	const client = getGraphQLClient();

	const notesTanstackQuery = useQuery({
		queryKey: ["notes"],
		queryFn: async () => {
			const data = await client.request(allNotesQueryDocument, { first: 10 });
			return data;
		},
	});

	return { notesTanstackQuery };
}
