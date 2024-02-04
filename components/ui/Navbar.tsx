"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WalletButton } from "../solana/solana-provider";
import { AccountBalance } from "@/components/account/account-ui";
import { useWallet } from "@solana/wallet-adapter-react";

export function Navbar() {
	const wallet = useWallet();
	const pathname = usePathname();

	const pages = [
		{ label: "Home", path: "/" },
		{ label: "Holders", path: "/holders" },
		{ label: "Page 3", path: "/clusters" },
		{ label: "Page 4", path: "/clusters" },
	];

	return (
		<nav className="flex items-center justify-between px-4 py-1">
			<img className="h-14" alt="logo" src="/tmpLogo.png" />
			<ul className="flex flex-1 justify-end items-center space-x-8 mr-8">
				{pages.map(({ label, path }) => (
					// Add a condition to check if the current path matches the link path
					<li
						key={path}
						className={`hover:text-[#54839b] ${
							pathname === path ? "text-[#54839b] font-semibold" : ""
						}`}
					>
						<Link href={path}>{label}</Link>
					</li>
				))}
			</ul>
			<div className="flex items-center space-x-2">
				{wallet.connected && wallet.publicKey && (
					<AccountBalance address={wallet.publicKey} />
				)}
				<WalletButton />
			</div>
		</nav>
	);
}
