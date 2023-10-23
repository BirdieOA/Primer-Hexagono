/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			source: ['Source Serif Pro', 'Georgia', 'serif'],
			poppinsBlack: ['Poppins-Black'],
			poppinsThin: ['Poppins-Thin'],
			abrilFatface: ['AbrilFatface-Regular'],
			orbitron:['Orbitron-Regular'],
		},
		extend: {
			backgroundImage: {
				rombodoted:
					'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("./rombodoted.svg")',
			},
			backgroundColor: {
				fondo: '#1f1f1f',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
