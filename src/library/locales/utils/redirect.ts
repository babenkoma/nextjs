import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from '@/library/locales';
import { pathnameWithoutLocale } from '../constants';

export function localeRedirect(request: NextRequest): Promise<NextResponse> {
	return new Promise<NextResponse>((resolve, reject) => {
		const { pathname } = request.nextUrl;
		const isPathnameWithoutLocale = pathnameWithoutLocale.some((path) => pathname.startsWith(path));
		if (!isPathnameWithoutLocale) {
			const currentDefaultLocale = request.headers.get('x-locale') || defaultLocale;
			const handleI18nRouting = createMiddleware({
				locales,
				defaultLocale: currentDefaultLocale,
			});
			const response = handleI18nRouting(request);
			response.headers.set('x-locale', currentDefaultLocale);
			resolve(response);
		}
		reject(NextResponse.next());
	});
}
