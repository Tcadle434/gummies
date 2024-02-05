interface GummyGalleryCardProps {
	name: string;
	imageUrl: string;
}

export function GummyGalleryCard({ name, imageUrl }: GummyGalleryCardProps) {
	return (
		<div className="bg-foreground p-4 rounded-md border-border border-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
			<img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-md" />
			<div className="text-center mt-2">{name}</div>
		</div>
	);
}
