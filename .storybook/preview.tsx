import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import '@/styles/index.css';

const preview: Preview = {
	parameters: {
		layout: 'centered',
		backgrounds: {
			values: [
				{ name: 'Dark', value: '#000000' },
				{ name: 'Light', value: '#ffffff' },
			],
			default: 'Light',
		},
	},
	decorators: [
		withThemeByClassName({
			themes: {
				light: 'light',
				dark: 'dark',
			},
			defaultTheme: 'light',
		}),
	],
};

export default preview;
