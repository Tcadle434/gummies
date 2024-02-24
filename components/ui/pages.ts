import {
	HomeIcon,
	NewspaperIcon,
	PhotoIcon,
	CurrencyDollarIcon,
	MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

export const navPages = [
	{ label: "Home", path: "/", icon: HomeIcon, iconClasses: "h-5 w-5 text-primary" },
	{
		label: "Blog",
		path: "/blog",
		icon: NewspaperIcon,
		iconClasses: "h-5 w-5 text-primary",
	},
	{
		label: "Gallery",
		path: "/gallery",
		icon: PhotoIcon,
		iconClasses: "h-5 w-5 text-primary",
	},
	{
		label: "Analysis",
		path: "/analysis",
		icon: MagnifyingGlassIcon,
		iconClasses: "h-5 w-5 text-primary",
	},
	{
		label: "Investments",
		path: "/investments",
		icon: CurrencyDollarIcon,
		iconClasses: "h-5 w-5 text-primary",
	},
];
