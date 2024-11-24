import { ReactElement } from 'react';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';
import { getLocale, getMessages } from 'next-intl/server';
import { LocaleProvider } from '@/library/locales';
import { LayoutProps } from '@/app/types';
import '@/styles/index.css';

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
		<html lang={locale} className={'bg-background text-foreground'} suppressHydrationWarning>
			<body>
				<NextTopLoader color="#006FFF" shadow="none" showSpinner={false} />
				<LocaleProvider translations={translations}>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</LocaleProvider>
			</body>
		</html>
	);
}
