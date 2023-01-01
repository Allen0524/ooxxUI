import {ReactNode} from 'react';

export function DocsLayout({children}: {children: ReactNode}) {
	return <div className=" p-6">{children}</div>;
}
