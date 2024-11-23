import { ReactElement } from 'react';
import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { getLocale, getMessages } from 'next-intl/server';
import { LocaleProvider } from '@/library/locales';
import { LayoutProps } from '@/app/types';
import './globals.css';

export const metadata: Metadata = {
	formatDetection: {
		telephone: false,
	},
	appleWebApp: {
		capable: true,
	},
	icons: {
		icon: [
			{ rel: 'icon', type: 'image/png', sizes: '96x96', url: '/favicons/favicon-96x96.png' },
			{ rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' },
			{ rel: 'shortcut icon', url: '/favicon.ico' },
		],
		apple: { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicons/apple-touch-icon.png' },
	},
	manifest: '/favicons/site.webmanifest',
	openGraph: {
		images: [{ url: '/static/og-image.jpg' }],
	},
};

export default async function RootLayout({ children }: LayoutProps): Promise<ReactElement> {
	const locale = await getLocale();
	const translations = await getMessages();

	return (
		<html lang={locale}>
			<body>
				<NextTopLoader color="#006FFF" shadow="none" showSpinner={false} />
				<LocaleProvider translations={translations}>{children}</LocaleProvider>
			</body>
		</html>
	);
}
