import { NextRequest, NextResponse } from 'next/server';
import { localeRedirect } from '@/library/locales';

export default async function middleware(request: NextRequest) {
	return localeRedirect(request)
		.then((response: NextResponse) => response)
		.catch((response: NextResponse) => response);
}
