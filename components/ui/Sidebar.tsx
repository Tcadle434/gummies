"use client";

import React from "react";
import Link from "next/link";

import { HomeIcon, UserGroupIcon, PhotoIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

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

export function Sidebar() {
	return (
		<div className="fixed top-1/2 left-0 -translate-y-1/2 flex flex-col items-center space-y-2 z-10 sidebar">
			<ul>
				{pages.map(({ label, path, icon, iconClasses }) => (
					<li
						key={label}
						className="w-12 h-12 m-2 bg-foreground hover:bg-primaryHover text-white flex items-center justify-center rounded-md shadow-lg transition duration-150 ease-in-out border-border border-2"
					>
						<Link href={path} key={path}>
							{React.createElement(icon, { className: iconClasses })}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
