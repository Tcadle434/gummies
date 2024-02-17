import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WalletButton } from "../solana/solana-provider";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HomeIcon, UserGroupIcon, PhotoIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

export function Navbar() {
	const pathname = usePathname();

	const pages = [
		{ label: "Home", path: "/", icon: HomeIcon, iconClasses: "h-5 w-5 text-primary" },
		{
			label: "Holders",
			path: "/holders",
			icon: UserGroupIcon,
			iconClasses: "h-5 w-5 text-primary",
		},
		{
			label: "Gallery",
			path: "/gallery",
			icon: PhotoIcon,
			iconClasses: "h-5 w-5 text-primary",
		},
		{
			label: "Investments",
			path: "/investments",
			icon: RocketLaunchIcon,
			iconClasses: "h-5 w-5 text-primary",
		},
	];

	return (
		<Disclosure
			as="nav"
			className="fixed top-0 z-10 w-full bg-foreground border-b-2 border-border"
		>
			{({ open }) => (
				<>
					<div className="px-4 py-1 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="flex items-center justify-between h-16">
							<div className="flex items-center">
								<Link href="/" className="flex flex-row items-center">
									<img className="h-14" alt="logo" src="/gummies-logo.png" />
									<p className="text-white font-blinker font-bold text-2xl">
										GUMMIES
									</p>
								</Link>
							</div>
							<div className="-mr-2 flex md:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block w-6 h-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block w-6 h-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="hidden md:block">
								<ul className="flex items-center justify-center flex-1 space-x-4 md:space-x-8 list-none">
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
							<div className="hidden md:flex md:items-center space-x-4">
								<WalletButton />
							</div>
						</div>
					</div>

					<Disclosure.Panel className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							{pages.map(({ label, path, icon, iconClasses }) => (
								<Disclosure.Button
									key={label}
									as="a"
									href={path}
									className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
								>
									<div className="flex flex-row items-center">
										{React.createElement(icon, { className: iconClasses })}

										<p className="ml-4">{label}</p>
									</div>
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
