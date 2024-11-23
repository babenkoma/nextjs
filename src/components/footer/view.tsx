'use client';
import { ReactElement } from 'react';
import { useFooter } from './model';

export function Footer(): ReactElement {
	const { copyright } = useFooter();

	return <footer>{copyright}</footer>;
}
