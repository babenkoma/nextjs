'use client';
import { ReactElement } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/library/locales';

export function NotFound(): ReactElement {
	const t = useTranslations();

	return (
		<section>
			<h1>{t('notFound.title')}</h1>
			<p>{t('notFound.text')}</p>
			<Link href={'/'}>{t('notFound.button')}</Link>
		</section>
	);
}
