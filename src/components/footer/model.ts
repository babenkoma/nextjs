import { useTranslations } from 'next-intl';

interface FooterModel {
	copyright: string;
}

export function useFooter(): FooterModel {
	const t = useTranslations();

	return {
		copyright: `© ${new Date().getFullYear()} ${t('footer.copyright')}`,
	};
}
