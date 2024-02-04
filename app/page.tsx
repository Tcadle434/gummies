export default function Index() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex gap-4">
				{/* Small image */}
				<img
					src="/gumshoe.png"
					alt="Image 1"
					className="w-48 h-48 object-cover rounded-md"
				/>
				{/* Big image in the middle */}
				<img
					src="/homage.png"
					alt="Image 2"
					className="w-64 h-64 object-cover rounded-md"
				/>
				{/* Small image */}
				<img src="/punk.png" alt="Image 3" className="w-48 h-48 object-cover rounded-md" />
			</div>
		</div>
	);
}
