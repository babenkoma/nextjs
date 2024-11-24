'use client';
import { ReactElement } from 'react';
import { useHeader } from './model';

export function Header(): ReactElement {
	const { siteTitle } = useHeader();

	return (
		<header>
			<p>{siteTitle}</p>
			<p>
				<a href={'/en'}>EN</a>
			</p>
			<p>
				<a href={'/uk'}>UK</a>
			</p>
		</header>
	);
}
