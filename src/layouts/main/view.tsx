import { ReactElement, ReactNode } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

interface MainLayoutProps {
	children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps): ReactElement {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
