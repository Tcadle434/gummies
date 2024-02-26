"use client";

import { useHolders } from "../blog/holders-data-access";
import { useAnalysis } from "./analysis-data-access";
import { useWallet } from "@solana/wallet-adapter-react";
import { marketplaces } from "../gallery/gallery-ui";
import AnalysisChart from "../ui/AnalysisChart";
import GRatingChart from "../ui/GRatingChart";
import Loader from "../ui/Loader";

export function DisplayAnalysis() {
	const { publicKey } = useWallet();
	const { holdersQuery } = useHolders();
	const { analysisTanstackQuery } = useAnalysis();

	if (!publicKey) {
		return (
			<div className="h-screen flex items-center justify-center font-blinker px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				Analysis is only available to Gummies holders. Please connect your wallet!
			</div>
		);
	}

	if (holdersQuery.isLoading || analysisTanstackQuery.isLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<Loader />
			</div>
		);
	}

	if (holdersQuery.isError || analysisTanstackQuery.isError) {
		return (
			<div className="h-screen flex items-center justify-center font-blinker px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				There was an error fetching the data. Please try again later.
			</div>
		);
	}

	return (
		<div className="font-blinker my-6 md:mt-28 px-4 md:px-20 mt-24">
			<h1 className="md:text-4xl text-3xl font-semibold text-center">
				Solana Ecosystem Index
			</h1>

			{holdersQuery.data?.includes(publicKey?.toString()!) ? (
				<div>
					<div className="mt-10 lg:max-w-4xl md:max-w-2xl max-w-96">
						<AnalysisChart
							analysisData={analysisTanstackQuery.data?.analysisCollection!.edges}
						/>
					</div>
					<h2 className="mt-10 text-center text-xl md:text-2xl mb-4">
						G-Rating and Safety Rating Calculation
					</h2>
					<p className="text-left text-sm md:text-base mb-4 text-mutedForeground ml-2">
						Disclaimer: This model is still under development and will be improved
						whenever new metrics and/or logic are added. <br />
						G-Rating is calculated based on all the metrics below, and Satefy rating is
						calculated based on Contract Risk, Audit, Reputation, Team.
					</p>
					<GRatingChart />
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
