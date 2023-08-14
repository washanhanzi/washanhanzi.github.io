/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
		themes: [
			"night",
		],
	},
	content: ['./src/**/*.{js,ts,tsx,mdx}'],
	plugins: [require("@tailwindcss/typography"), require('daisyui')],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				"cold-start": "#2c9bdf",
				"cold-mid": "#19d3b5",
				"cold-end": "#a4f158",
			}
		},
	}
};