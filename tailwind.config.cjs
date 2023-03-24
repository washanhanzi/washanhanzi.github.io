/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#61f4d2",
					"secondary": "#55e0a1",
					"accent": "#a7c62b",
					"neutral": "#1D141F",
					"base-100": "#3B284D",
					"info": "#86ACDA",
					"success": "#25AD6B",
					"warning": "#B88C14",
					"error": "#DC2E42",
				},
			},
		],
	},
	content: ['./src/**/*.{js,ts,tsx,mdx}'],
	plugins: [require("@tailwindcss/typography"), require('daisyui')],
	darkMode: 'class',
	theme: {
		extend: {
			fontSize: {
			}
		},
	}
};