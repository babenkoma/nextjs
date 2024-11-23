import { ReactElement } from 'react';
import { MainLayout } from '@/layouts/main';
import { NotFound } from '@/components/not-found';

export default function NotFoundPage(): ReactElement {
	return (
		<MainLayout>
			<NotFound />
		</MainLayout>
	);
}
