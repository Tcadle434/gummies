"use client";

import { useGummiesGalary } from "./gallery-data-access";
import { GummyGalleryCard } from "../ui/GummyGalleryCard";
import Loader from "../ui/Loader";

interface Gummy {
	name: string;
	jsonUri: string;
	imageUrl: string;
}

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
		<div>
			<h1 className="text-3xl font-semibold mb-4 pt-48 text-center">Gummies Gallery</h1>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{gummiesGalaryQuery.data?.map((gummy: Gummy, index: number) => (
					<GummyGalleryCard key={index} name={gummy.name} imageUrl={gummy.imageUrl} />
				))}
			</div>
		</div>
	);
}
