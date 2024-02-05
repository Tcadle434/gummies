export const getGummiesAssets = async () => {
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

	const { result } = await response.json();

	const assets = result.items.map(async (item: any) => {
		const asset = {
			name: item.content.metadata.name,
			jsonUri: item.content.json_uri,
			imageUrl: item.content.links.image,
			owner: item.ownership.owner,
		};
		return asset;
	});

	return assets;
};
