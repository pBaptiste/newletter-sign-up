/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'pale-navy' : '#36384D',
				'dark-navy' : '#242742',
				'vermillion' : '#FF6155',
				'grey' : 'rgba(25, 24, 43, 0.25)',
			},
			boxShadow: {
				'card': '0px 16px 32px 0px rgba(255, 97, 85, 0.50)',
			},
			backgroundImage: {
				'btn-gradient': "linear-gradient(204deg, #FF6A3A 0%, #FF527B 100%)",
			},
		},
	},
	plugins: [],
}
