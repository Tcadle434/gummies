"use client";

import { getGraphQLClient } from "@/app/utils/graphqlClient";
import { useQuery } from "@tanstack/react-query";
import { ActiveAuctionQuery } from "@/gql/graphql";
import activeAuctionQueryDocument from "@/graphql/queries/activeAuction.graphql";

export function useAuctions() {
	const client = getGraphQLClient();

	const auctionTanstackQuery = useQuery<ActiveAuctionQuery>({
		queryKey: ["auctions"],
		queryFn: async () => {
			const data = await client.request<ActiveAuctionQuery>(activeAuctionQueryDocument, {
				first: 10,
			});
			return data;
		},
	});

	return { auctionTanstackQuery };
}
