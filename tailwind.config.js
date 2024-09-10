/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				inter: "'Inter Variable', sans-serif",
				garamod: "'Cormorant Garamond', serif"
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
