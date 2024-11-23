import { ReactElement, ReactNode } from 'react';
import { Providers } from '@/components/providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

interface MainLayoutProps {
	children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps): ReactElement {
	return (
		<Providers>
			<Header />
			<main>{children}</main>
			<Footer />
		</Providers>
	);
}
