/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "#0f0f0f",
				foreground: "#141414",
				mutedForeground: "#a8a8a8",
				primary: "#7B2937",
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
			fontFamily: {
				"pixelify-sans": ["Pixelify Sans", "sans-serif"],
				blinker: ["Blinker", "sans-serif"],
			},
			animation: {
				text: "text 5s ease infinite",
				fadeIn: "fadeIn 0.5s ease-in-out forwards", // Define the animation name, duration, timing function, and fill mode
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				text: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
			},
		},
	},
	plugins: [],
};
