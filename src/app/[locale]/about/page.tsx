import { ReactElement } from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { MainLayout } from '@/layouts/main';
import { PageProps } from '@/app/types';
import { Link } from '@/library/locales';

interface Props {
	h1: string;
}

async function getData(): Promise<Props> {
	return {
		h1: 'About',
	};
}

export async function generateMetadata(props: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const previousImages = (await parent).openGraph?.images || [];
	const title = 'About';
	const description = 'About';

	return {
		title: title,
		description: description,
		openGraph: {
			title: title,
			description: description,
			images: [...previousImages],
		},
	};
}

export default async function Page(): Promise<ReactElement> {
	const { h1 } = await getData();

	return (
		<MainLayout>
			<h1>{h1}</h1>
			<Link href="/">Home</Link>
		</MainLayout>
	);
}