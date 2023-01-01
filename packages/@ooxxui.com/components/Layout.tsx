import {ReactNode} from 'react';
import {Header} from '@components/Header';
import {Sidebar} from '@components/Sidebar';

export function Layout({children}: {children: ReactNode}) {
	return (
		<>
			<Header />
			<main className="overflow-hidden pt-[var(--navigation-height)]">
				<Sidebar />
				<div className="text-yellow-400 pl-72 pt-16">{children}</div>
			</main>
			<footer></footer>
		</>
	);
}
