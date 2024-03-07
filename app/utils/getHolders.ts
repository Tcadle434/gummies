export const getHolders = async (): Promise<string[]> => {
	const url = process.env.NEXT_PUBLIC_HELIUS_RPC_ENDPOINT!;
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			jsonrpc: "2.0",
			id: "my-id",
			method: "getAssetsByGroup",
			params: {
				groupKey: "collection",
				groupValue: "9p6oG4bhKLycyhbhRGscYq6GbEDPDiGqLdXrJZtm5UWP",
				page: 1,
				limit: 1000,
			},
		}),
	});

	const data = await response.json();
	const owners: string[] = data.result.items.map((item: any) => item.ownership.owner);
	return [...new Set(owners)];
};
