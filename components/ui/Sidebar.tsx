"use client";

import React from "react";
import Link from "next/link";

import { HomeIcon, UserGroupIcon, PhotoIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

const pages = [
	{ label: "Home", path: "/", icon: HomeIcon, iconClasses: "h-8 w-8 text-primary" },
	{
		label: "Holders",
		path: "/holders",
		icon: UserGroupIcon,
		iconClasses: "h-8 w-8 text-gumshoe",
	},
	{
		label: "Gallery",
		path: "/gallery",
		icon: PhotoIcon,
		iconClasses: "h-8 w-8 text-skin",
	},
	{
		label: "Investments",
		path: "/investments",
		icon: RocketLaunchIcon,
		iconClasses: "h-8 w-8 text-noun",
	},
];

export function Sidebar() {
	return (
		<div className="fixed top-1/2 left-0 -translate-y-1/2 flex flex-col items-center space-y-2">
			<ul>
				{pages.map(({ label, path, icon, iconClasses }) => (
					<li
						key={label}
						className="w-16 h-16 m-2 bg-foreground hover:bg-primaryHover text-white flex items-center justify-center rounded-md shadow-lg transition duration-150 ease-in-out border-border border-2"
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
