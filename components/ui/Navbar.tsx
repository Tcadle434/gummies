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
					<Link href="/">
						<img className="h-14" alt="logo" src="/gummies-logo.png" />
					</Link>
					<ul className="flex flex-1 justify-end items-center space-x-8 mr-8 text-skin font-mono">
						{pages.map(({ label, path }) => (
							<li
								key={label}
								className={`hover:text-primary ${
									pathname === path ? "text-primary font-semibold" : ""
								}`}
							>
								<Link href={path}>{label}</Link>
							</li>
						))}
					</ul>
					<div className="flex items-center space-x-2">
						<WalletButton />
					</div>
				</nav>
			</div>
		</>
	);
}
