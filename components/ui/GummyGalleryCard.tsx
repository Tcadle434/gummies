import React, { useState } from "react";

interface GummyGalleryCardProps {
	name: string;
	imageUrl: string;
}

export function GummyGalleryCard({ name, imageUrl }: GummyGalleryCardProps) {
	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	return (
		<div className="hover:scale-105 transform duration-500">
			<div
				className={`bg-foreground p-4 rounded-md border-border border-2 transform cursor-pointer transition-opacity duration-500 ease-in-out ${
					imageLoaded ? "opacity-100" : "opacity-0"
				}`}
			>
				<img
					src={imageUrl}
					alt={name}
					className={`w-full h-48 object-cover rounded-md ${imageLoaded ? "" : "hidden"}`}
					onLoad={handleImageLoad}
				/>
				<div
					className={`text-center mt-2 font-mono text-white opacity-50 ${
						imageLoaded ? "" : "hidden"
					}`}
				>
					{name}
				</div>
			</div>
		</div>
	);
}
