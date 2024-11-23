import { PropsWithChildren } from 'react';

export interface LayoutProps<Params = Record<string, string>> extends PropsWithChildren {
	params: Params;
}

export interface PageProps<Params = Record<string, string>, SearchParams = Partial<Record<string, string | string[]>>> {
	params: Params;
	searchParams: SearchParams;
}

export interface MetadataProps<Params = Record<string, string>> {
	params: Params;
}
