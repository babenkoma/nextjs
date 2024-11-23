import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#000',
					foreground: '#fff',
				},
			},
		},
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
