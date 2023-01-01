/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				base: '#f7f8f8',
				background: '#000C1D',
			},
		},
	},
	plugins: [],
};
