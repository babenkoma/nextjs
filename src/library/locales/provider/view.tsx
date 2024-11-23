import { ReactElement, ReactNode } from 'react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

interface LocaleProviderProps {
	children: ReactNode;
	translations: AbstractIntlMessages;
}

export function LocaleProvider({ children, translations }: LocaleProviderProps): ReactElement {
	return <NextIntlClientProvider messages={translations}>{children}</NextIntlClientProvider>;
}
