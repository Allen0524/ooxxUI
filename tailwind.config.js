/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./packages/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#14213D',
				secondary: '#FCA311',
				destructive: '#ef476f',
				monochrome: '#E5E5E5',
			},
		},
	},
	plugins: [],
};
