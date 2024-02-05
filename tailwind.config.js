/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "#0f0f0f",
				foreground: "#141414",
				mutedForeground: "#a8a8a8",
				primary: "#54839b",
				border: "#27272a",
				punk: "#54839b",
				noun: "#A8313D",
				skin: "#FDE6CB",
				gumshoe: "#3C5F57",
				btn: {
					background: "hsl(var(--btn-background))",
					"background-hover": "hsl(var(--btn-background-hover))",
				},
			},
		},
	},
	plugins: [],
};
