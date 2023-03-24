/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#28d0d3",
					"secondary": "#1bb738",
					"accent": "#38d16b",
					"neutral": "#222027",
					"base-100": "#3C2942",
					"info": "#467FC8",
					"success": "#5CE0A5",
					"warning": "#EFBB43",
					"error": "#F9654E",
				},
			},
		],
	},
	content: ['./src/**/*.{js,ts,tsx,mdx}'],
	plugins: [require("@tailwindcss/typography"), require('daisyui')],
};