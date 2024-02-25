"use client";

import { useAuctions } from "./auction-data-access";

export function DisplayAuction() {
	const { auctionTanstackQuery } = useAuctions();

	const auctionData = auctionTanstackQuery.data?.auctionsCollection?.edges[0]?.node; // Use optional chaining
	const auctionLink = auctionData?.link;

	return auctionData ? (
		<nav className="bg-foreground flex items-center justify-center px-4 py-3 border-border border-t-2">
			<div className="flex flex-row items-center text-sm font-blinker">
				<span className="bg-primary text-background px-2 py-0.5 rounded-sm font-bold text-xs mx-2">
					New
				</span>

				<p className="text-mutedForeground font-semibold mx-2">
					Auction currently live for {auctionData.name}!
				</p>
				<a href={auctionLink!} className="text-primary hover:underline font-bold">
					Bid now -{">"}
				</a>
			</div>
		</nav>
	) : null;
}
