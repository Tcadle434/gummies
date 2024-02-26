import React, { useState } from "react";
import { Modal } from "./Modal"; // Adjust the import path as necessary

interface GummyGalleryCardProps {
	name: string;
	imageUrl: string;
}

export function GummyGalleryCard({ name, imageUrl }: GummyGalleryCardProps) {
	const [imageLoaded, setImageLoaded] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	const openModal = () => {
		setIsModalOpen(true);
		document.body.style.pointerEvents = "none";
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.pointerEvents = "all";
		document.body.style.overflow = "auto";
	};

	return (
		<>
			<div
				onClick={openModal}
				className="hover:scale-105 transform duration-500 cursor-pointer"
			>
				<div
					className={`bg-foreground p-4 rounded-md border-border border-2 hover:border-primary transform transition-opacity duration-500 ease-in-out ${
						imageLoaded ? "opacity-100" : "opacity-0"
					}`}
				>
					<img
						src={imageUrl}
						alt={name}
						className={`md:w-48 md:h-48 object-cover rounded-md justify-center h-64 w-64${
							imageLoaded ? "" : "hidden"
						}`}
						onLoad={handleImageLoad}
					/>
					<div
						className={`text-center mt-2 font-blinker text-white opacity-50 ${
							imageLoaded ? "" : "hidden"
						}`}
					>
						{name}
					</div>
				</div>
			</div>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				title={name}
				imageUrl={imageUrl}
				content="Here are some details about this gummy."
			/>
		</>
	);
}
