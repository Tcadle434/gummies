import React from "react";
import { marketplaces } from "../gallery/gallery-ui";

export function Footer() {
	return (
		<div className="bottom-0 z-10 w-full bg-foreground border-t-2 border-primary pb-5 md:pb-1">
			<div className="px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
				{/* Use flex-col for small screens and flex-row for medium screens and up */}
				<div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
					<div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 opacity-75">
						<img className="h-14 mx-auto md:mx-0" alt="logo" src="/gummies-logo.png" />
						<p className="text-white font-blinker font-bold text-lg md:text-xl text-center md:text-left">
							GUMMIES
						</p>
					</div>
					<div className="flex flex-row items-center space-x-4 opacity-75 justify-center">
						<a
							href="https://twitter.com/GummiesART"
							className="cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
						>
							<img className="h-5 md:h-6" alt="Twitter logo" src="/x.svg" />
						</a>
						<a
							href="https://discord.com/invite/94BGg4s6Rp"
							className="cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
						>
							<img className="h-5 md:h-6" alt="Discord logo" src="/discord.svg" />
						</a>
						{marketplaces.map((marketplace, index) => (
							<div key={index}>
								<a
									href={marketplace.url}
									className="block rounded-full border-2 border-transparent hover:scale-105 transition-all duration-500"
								>
									<img
										src={marketplace.src}
										alt={marketplace.alt}
										className="rounded-full transition-opacity h-7 md:h-8"
									/>
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
