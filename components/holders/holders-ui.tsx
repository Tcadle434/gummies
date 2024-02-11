"use client";

import { useHolders } from "./holders-data-access";
import { useWallet } from "@solana/wallet-adapter-react";
import { marketplaces } from "../gallery/gallery-ui";
import Loader from "../ui/Loader";

export function DisplayHolders() {
	const { publicKey } = useWallet();
	const { holdersQuery } = useHolders();

	if (!publicKey) {
		return (
			<div className="h-screen flex items-center justify-center font-mono ml-14">
				Please connect your wallet.
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
		<div className="font-mono ml-14">
			{holdersQuery.data?.includes(publicKey?.toString()!) ? (
				<div className="h-screen flex items-center justify-center flex-col">
					<h1 className="text-xl text-center">
						Welcome Gummies Holder!
						<br />
						We'll put cool shit here.
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
