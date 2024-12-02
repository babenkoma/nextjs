'use client';
import { ReactElement } from 'react';
import { useTheme } from 'next-themes';
import { usePathname, Link, locales } from '@/library/locales';
import { useHeader } from './model';

export function Header(): ReactElement {
	const { siteTitle } = useHeader();
	const { setTheme } = useTheme();
	const pathname = usePathname();

	return (
		<header>
			<p>{siteTitle}</p>
			{locales.map((locale) => (
				<p key={locale}>
					<Link href={pathname} locale={locale}>
						{locale.toUpperCase()}
					</Link>
				</p>
			))}
			<div onClick={() => setTheme('light')}>Light Mode</div>
			<div onClick={() => setTheme('dark')}>Dark Mode</div>
		</header>
	);
}
