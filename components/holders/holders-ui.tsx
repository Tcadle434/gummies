"use client";

import { useHolders } from "./holders-data-access";
import { useWallet } from "@solana/wallet-adapter-react";
import Loader from "../ui/Loader";

export function DisplayHolders() {
	const { publicKey } = useWallet();
	const { holdersQuery } = useHolders();

	if (!publicKey) {
		return (
			<div className="h-screen flex items-center justify-center">
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
		<div>
			{holdersQuery.data?.includes(publicKey?.toString()!) ? (
				<div className="pt-64">
					<h1 className="text-xl text-center">Welcome Gummies Holder!</h1>
					<h2 className="text-md text-center">
						here's a list of all the gummies holders as a placeholder for whatever we
						wanna put here
					</h2>
					<pre className="mt-8">{JSON.stringify(holdersQuery.data, null, 2)}</pre>
				</div>
			) : (
				<div className="h-screen flex items-center justify-center">
					<h1>You don't own a Gummy :(</h1>
				</div>
			)}
		</div>
	);
}
