const url = "https://mainnet.helius-rpc.com/?api-key=d5b46609-569f-47e0-adef-542e5c202021";

const getAssetsByGroup = async () => {
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
				page: 1, // Starts at 1
				limit: 1000,
			},
		}),
	});

	const { result } = await response.json();

	// Extract the list of owners
	const owners = result.items.map((item) => item.ownership.owner);
	console.log("List of Unique Owners: ", [...new Set(owners)]);
	console.log("total unique owners: ", [...new Set(owners)].length);
	console.log("Total Assets: ", result.total);

	return [...new Set(owners)];
};

getAssetsByGroup();
