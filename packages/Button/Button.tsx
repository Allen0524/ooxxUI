import {MouseEvent} from 'react';

interface ButtonProps {
	id?: string;
	disabled?: boolean;
	children?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function Button({
	id,
	children,
	disabled,
	onClick,
	...restProps
}: ButtonProps) {
	function handleClick(event: MouseEvent<HTMLButtonElement>) {
		if (onClick) {
			onClick(event);
		}
	}

	return (
		<button
			id={id}
			disabled={disabled}
			aria-disabled={disabled}
			onClick={handleClick}
			className=" text-green-400"
			{...restProps}
		>
			{children}
		</button>
	);
}
