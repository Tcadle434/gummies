import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WalletButton } from "../solana/solana-provider";

export function Footer() {
	const pathname = usePathname();

	return (
		<div className=" bottom-0 z-10 w-full bg-foreground border-t-2 border-primary">
			<>
				<div className="px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center opacity-75">
							<img className="h-14" alt="logo" src="/gummies-logo.png" />
							<p className="text-white font-blinker font-bold text-lg md:text-xl">
								GUMMIES
							</p>
						</div>
						<div className="flex items-center space-x-4 opacity-75">
							<a
								href="https://twitter.com/GummiesART"
								className="cursor-pointer hover:scale-105 duration-500 ease-in-out"
							>
								<img className="h-6 md:h-8" alt="logo" src="/x.svg" />
							</a>
							<a
								href="https://discord.com/invite/94BGg4s6Rp"
								className="cursor-pointer hover:scale-105 duration-500 ease-in-out"
							>
								<img className="h-6 md:h-8" alt="logo" src="/discord.svg" />
							</a>
						</div>
					</div>
				</div>
			</>
		</div>
	);
}
