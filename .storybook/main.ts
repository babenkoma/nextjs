import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../src/stories/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-themes',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	staticDirs: [
		{
			from: '../public/static',
			to: '/images',
		},
	],
	docs: {
		autodocs: 'tag',
	},
};
export default config;
