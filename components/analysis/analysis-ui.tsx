"use client";

import { useHolders } from "../blog/holders-data-access";
import { useWallet } from "@solana/wallet-adapter-react";
import { marketplaces } from "../gallery/gallery-ui";
import Loader from "../ui/Loader";

export function DisplayAnalysis() {
	const { publicKey } = useWallet();
	const { holdersQuery } = useHolders();

	if (!publicKey) {
		return (
			<div className="h-screen flex items-center justify-center font-blinker px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				Analysis is only available to Gummies holders. Please connect your wallet!
			</div>
		);
	}

	if (holdersQuery.isLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<Loader />
			</div>
		);
	}

	return (
		<div className="font-blinker ml-14">
			{holdersQuery.data?.includes(publicKey?.toString()!) ? (
				<div className="h-screen flex items-center justify-center flex-col">
					<h1 className="text-xl text-center">
						Welcome Gummies Holder!
						<br />
						Analysis here.
					</h1>
				</div>
			) : (
				<div className="h-screen flex items-center justify-center text-center flex-col">
					<h1>
						You don't own a Gummy :(.
						<br />
						Look out for the next auction or make an offer
					</h1>
					<div className="flex flex-row mx-2">
						{marketplaces.map((marketplace, index) => (
							<div key={index}>
								<a
									href={marketplace.url}
									className="block p-1 rounded-full border-2 border-transparent hover:border-white transition-all duration-500"
								>
									<img
										src={marketplace.src}
										alt={marketplace.alt}
										className="rounded-full transition-opacity w-10 hover:opacity-75"
									/>
								</a>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
