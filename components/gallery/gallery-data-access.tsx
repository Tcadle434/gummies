"use client";

import { useQuery } from "@tanstack/react-query";
import { getGummiesAssets } from "@/app/utils/getGummiesAssets";

export function useGummiesGalary() {
	const gummiesGalaryQuery = useQuery({
		queryKey: ["galary"],
		queryFn: async () => {
			const holders = await getGummiesAssets();
			return await Promise.all(holders);
		},
	});

	return { gummiesGalaryQuery };
}
