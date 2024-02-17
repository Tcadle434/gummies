export default function Index() {
	const text = "GUMMIES".split("").map((char, index) => (
		<span
			key={index}
			style={{ animationDelay: `${index * 0.2}s` }}
			className="inline-block opacity-0 animate-fadeIn text-white"
		>
			{char}
		</span>
	));

	return (
		<div className="flex flex-col min-h-screen justify-center items-center">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 lg:px-8 w-full">
				<div className="flex-1 md:order-0 flex justify-center md:items-start flex-col md:ml-10 order-1 items-center">
					<h1 className="font-blinker font-bold caps lg:text-8xl md:text-6xl text-5xl md:text-left text-center">
						{text}
						<span
							style={{ animationDelay: `${text.length * 0.2}s` }}
							className="inline-block opacity-0 animate-fadeIn text-primary"
						>
							.
						</span>
					</h1>
					<div className="md:w-3/5">
						<p
							className="text-white font-blinker md:text-md text-sm opacity-0 animate-fadeIn mt-4 md:text-left text-center"
							style={{ animationDelay: "1.7s" }}
						>
							Private Members Collective. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.
						</p>
					</div>
				</div>
				<div className="flex-1 md:order-1 flex items-center justify-center mb-4 md:mb-0 order-0">
					<img
						className="h-64 w-64 md:h-auto md:w-auto md:max-h-full md:max-w-full opacity-0 animate-fadeIn"
						alt="logo"
						src="/gummies-logo.png"
						style={{ animationDelay: "1.7s" }}
					/>
				</div>
			</div>
		</div>
	);
}
