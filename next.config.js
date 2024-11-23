import path from 'path';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(path.join(process.cwd(), 'src/library/locales/utils/request.ts'));

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	headers: async () =>
		Promise.resolve([
			{
				source: '/(favicons|static)/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000',
					},
				],
			},
			{
				source: '/favicon.ico',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000',
					},
				],
			},
		]),
	webpack: (config) => {
		const srcFolder = path.join(process.cwd(), 'src');

		config.resolve.modules.push(srcFolder);

		config.resolve.fallback = {
			fs: false,
			path: false,
			net: false,
			child_process: false,
		};

		return config;
	},
};

export default withNextIntl(nextConfig);
