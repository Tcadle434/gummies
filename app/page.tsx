export default function Index() {
	const images = [
		{ src: "/gumshoe.png", alt: "Image 1", additionalClasses: "w-32 h-32 -mx-6" },
		{ src: "/dripped.png", alt: "Image 2", additionalClasses: "w-32 h-32 -mx-6" },
		{ src: "/manlet.png", alt: "Image 3", additionalClasses: "w-32 h-32 -mx-6" },
		{ src: "/tough.png", alt: "Image 4", additionalClasses: "w-32 h-32 -mx-6" },
		{ src: "/punk.png", alt: "Image 5", additionalClasses: "w-32 h-32 -mx-6" },
	];

	// Split "gummies" into an array of letters and apply the custom animation with a delay
	const text = "gummies".split("").map((char, index) => (
		<span
			key={index}
			style={{ animationDelay: `${index * 0.2}s` }} // Adjust the delay as needed
			className="inline-block opacity-0 animate-fadeIn"
		>
			{char}
		</span>
	));

	return (
		<>
			<div className="flex justify-center items-center h-screen relative ml-14 flex-col">
				<h1 className="text-skin font-pixelify-sans md:text-9xl text-6xl">{text}</h1>
				<p
					className="text-skin font-mono md:text-lg text-sm mt-4 opacity-0 animate-fadeIn"
					style={{ animationDelay: "1.7s" }}
				>
					Private Members Collective.
				</p>
			</div>
			<div className="absolute bottom-0 right-0 flex flex-row">
				{images.map((image, index) => (
					<img
						key={index}
						src={image.src}
						alt={image.alt}
						className={`object-cover rounded-md transition-opacity duration-500 ease-in-out hover:opacity-0 ${image.additionalClasses}`}
					/>
				))}
			</div>
		</>
	);
}
