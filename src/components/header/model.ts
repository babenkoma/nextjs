import { useTranslations } from 'next-intl';

interface HeaderModel {
	siteTitle: string;
}

export function useHeader(): HeaderModel {
	const t = useTranslations();

	return {
		siteTitle: t('header.title'),
	};
}
