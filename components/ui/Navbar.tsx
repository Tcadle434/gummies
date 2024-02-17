"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WalletButton } from "../solana/solana-provider";
import { AuctionFeature } from "../auctions/auction-feature";
import { AccountBalance } from "@/components/account/account-ui";
import { useWallet } from "@solana/wallet-adapter-react";

export function Navbar() {
	const wallet = useWallet();
	const pathname = usePathname();

	const pages = [
		{ label: "Home", path: "/" },
		{ label: "Holders", path: "/holders" },
		{ label: "Gallery", path: "/gallery" },
		{ label: "Investments", path: "/investments" },
	];

	return (
		<>
			<div className="fixed top-0 z-10 w-full">
				<AuctionFeature />
				<nav className="bg-foreground flex items-center justify-between px-4 py-1 border-border border-2">
					<div className="container mx-auto flex items-center justify-between px-4 py-1 lg:px-8">
						<Link href="/" className="flex flex-row items-center">
							<img className="h-14" alt="logo" src="/gummies-logo.png" />
							<p className="text-white font-blinker font-bold text-2xl">GUMMIES</p>
						</Link>
						<div className="flex-1 flex justify-center">
							<ul className="flex justify-center items-center space-x-8 text-white font-blinker font-semibold text-lg">
								{pages.map(({ label, path }) => (
									<li
										key={label}
										className={`hover:text-primary ${
											pathname === path ? "text-primary font-bold" : ""
										}`}
									>
										<Link href={path}>{label}</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="flex items-center space-x-4">
							<a
								href="https://twitter.com/GummiesART"
								className="hover:scale-125 transition duration-500"
							>
								<img className="h-6" alt="twitter" src="/x.svg" />
							</a>
							<a
								href="https://discord.com/invite/94BGg4s6Rp"
								className="hover:scale-125 transition duration-500"
							>
								<img className="h-6" alt="discord" src="/discord.svg" />
							</a>
							<WalletButton />
						</div>
					</div>
				</nav>
			</div>
		</>
	);
}
