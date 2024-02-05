const getImageData = async (url: string) => {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const jsonData = await response.json();
			return jsonData.image;
		} else {
			throw new Error("Failed to fetch data from URL");
		}
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};

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
		const imageUrl = await getImageData(item.content.json_uri);
		const asset = {
			name: item.content.metadata.name,
			jsonUri: item.content.json_uri,
			imageUrl: imageUrl,
		};
		return asset;
	});

	console.log(await Promise.all(assets));

	return assets;
};
