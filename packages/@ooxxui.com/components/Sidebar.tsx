import Link from 'next/link';
const components = [
	{id: 'Switch', name: 'switch'},
	{id: 'Switch1', name: 'Switch1'},
	{id: 'Switch2', name: 'Switch2'},
	{id: 'Switch3', name: 'Switch3'},
	{id: 'Switch4', name: 'Switch4'},
	{id: 'Switch5', name: 'Switch5'},
	{id: 'Switch6', name: 'Switch6'},
	{id: 'Switch7', name: 'Switch7'},
];

export function Sidebar() {
	return (
		<nav className="hidden md:block scrollbar overflow-x-hidden w-64 p-5 fixed left-0 bottom-0 top-[var(--navigation-height)] z-10">
			<ul className=" space-y-96">
				{components.map(({id, name}) => (
					<Item key={id} name={name} />
				))}
			</ul>
		</nav>
	);
}

function Item({name}: {name: string}) {
	return (
		<li>
			<Link href={`docs/${name}`}>{name}</Link>
		</li>
	);
}
