'use client';
import { ReactElement, ReactNode } from 'react';

interface ProvidersProps {
	children: ReactNode;
}

export function Providers({ children }: ProvidersProps): ReactElement {
	return <>{children}</>;
}
