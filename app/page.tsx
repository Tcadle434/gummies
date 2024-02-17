export default function Index() {
	const text = "GUMMIES.".split("").map((char, index) => (
		<span
			key={index}
			style={{ animationDelay: `${index * 0.2}s` }}
			className="inline-block opacity-0 animate-fadeIn"
		>
			{char}
		</span>
	));

	return (
		<div className="flex flex-col min-h-screen justify-center">
			<div className="container mx-auto flex items-center justify-between px-4 lg:px-8 w-full">
				<div className="flex-1 flex justify-center items-start flex-col">
					<h1 className="text-white font-blinker font-bold caps md:text-8xl text-4xl text-left">
						{text}
					</h1>
					<div className="w-3/5">
						<p
							className="text-white font-blinker md:text-md text-sm opacity-0 animate-fadeIn mt-4 text-left"
							style={{ animationDelay: "1.7s" }}
						>
							Private Members Collective. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.
						</p>
					</div>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<img className="max-h-full max-w-full" alt="logo" src="/gummies-logo.png" />
				</div>
			</div>
		</div>
	);
}
