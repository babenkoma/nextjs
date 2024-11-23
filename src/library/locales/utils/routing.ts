import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { defaultLocale, locales } from '../constants';

export const routing = defineRouting({
	locales,
	defaultLocale,
});

export const { Link, getPathname, redirect, usePathname, useRouter } = createNavigation(routing);
