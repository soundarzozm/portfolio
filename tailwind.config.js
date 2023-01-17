/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontSize: {
				head: [
					'1.4em',
					{
						lineHeight: '2rem',
						letterSpacing: '-0.01em',
						fontWeight: '500',
					},
				],
			},
			fontFamily: {
				clubhouse: [
					'Apercu',
					'Source Sans Pro',
					'system',
					'system-ui',
					'-apple-system',
					'linkMacSystemFont',
					'Roboto',
					'Helvetica',
					'Arial',
					'sans-serif',
				],
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				'clubhouse-text-color': '#444452',
				'dark-bg': '#171c28',
				'dark-text': '#e7e7e7',
				'clubhouse-text-color-secondary': '#444452',
				'dark-text-secondary': '#afafbf',
			},
			keyframes: {
				wave: {
					'0%, 70%, 100%': { transform: 'rotate(0.0deg)' },
					'15%': { transform: 'rotate(14.0deg)' },
					'30%': { transform: 'rotate(-8.0deg)' },
					'40%': { transform: 'rotate(14.0deg)' },
					'50%': { transform: 'rotate(-4.0deg)' },
					'60%': { transform: 'rotate(10.0deg)' },
				},
			},
			animation: {
				wave: 'wave 1.5s infinite',
			},
		},
	},
	plugins: [],
}
