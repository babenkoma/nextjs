'use client';
import { ReactElement } from 'react';
import { useTranslations } from 'next-intl';

export function ErrorBlock(): ReactElement {
	const t = useTranslations();

	return (
		<section>
			<h1>{t('errorBlock.title')}</h1>
			<p>{t('errorBlock.text')}</p>
			<button onClick={() => window.location.reload()}>{t('errorBlock.button')}</button>
		</section>
	);
}
