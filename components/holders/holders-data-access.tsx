"use client";

import { useQuery } from "@tanstack/react-query";
import { getHolders } from "@/app/utils/getHolders";

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
