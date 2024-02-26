"use client";

import { useGummiesGalary } from "./gallery-data-access";
import { GummyGalleryCard } from "../ui/GummyGalleryCard";
import Loader from "../ui/Loader";

interface Gummy {
	name: string;
	jsonUri: string;
	imageUrl: string;
}

export const marketplaces = [
	{
		src: "/exchange_art.jpeg",
		alt: "Exchange Art",
		url: "https://exchange.art/series/GUMMIES/nfts",
	},
	{ src: "/magic_eden.webp", alt: "Magic Eden", url: "https://magiceden.io/marketplace/gummies" },
	{ src: "/tensor.jpeg", alt: "Tensor", url: "https://www.tensor.trade/trade/gummies" },
];

export function DisplayGallery() {
	const { gummiesGalaryQuery } = useGummiesGalary();
	console.log(gummiesGalaryQuery.data);

	if (gummiesGalaryQuery.isLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<Loader />
			</div>
		);
	}

	if (gummiesGalaryQuery.isError) {
		return <div className="h-screen flex items-center justify-center">Can't Load Gummies.</div>;
	}

	return (
		<div className="mb-4">
			<h1 className="text-3xl font-semibold mt-28 text-center font-blinker items-center">
				Meet the Gummies
			</h1>
			<div className="flex justify-center mb-4">
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
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
				{gummiesGalaryQuery.data?.map((gummy: Gummy, index: number) => (
					<GummyGalleryCard key={index} name={gummy.name} imageUrl={gummy.imageUrl} />
				))}
			</div>
		</div>
	);
}
