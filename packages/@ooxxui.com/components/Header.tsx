import Link from 'next/link';

export function Header() {
	return (
		<header className="fixed top-0 left-0 w-full z-20 h-[var(--navigation-height)] backdrop-blur-[12px]">
			<div className="py-5 px-4 flex justify-between items-center">
				<Link href="/">
					<div>OOXX UI</div>
				</Link>
				<div className="flex justify-end items-center space-x-4">
					<div>github</div>
					<div>dark</div>
					<div className="hidden md:inline-flex">menu</div>
				</div>
			</div>
		</header>
	);
}
