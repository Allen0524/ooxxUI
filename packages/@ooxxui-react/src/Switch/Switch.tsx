import {ReactNode} from 'react';

interface SwitchProps {
	id?: string;
	checked?: boolean;
	className?: string;
	onChange?: (value: boolean) => void;
	children?: ReactNode;
}

export function Switch({
	id = '',
	children,
	checked,
	className,
	onChange,
	...restProps
}: SwitchProps) {
	function handleOnClick() {
		onChange?.(!checked);
	}

	return (
		<button
			id={id}
			role="switch"
			aria-checked={checked}
			className={className}
			onClick={handleOnClick}
			{...restProps}
		>
			{children}
		</button>
	);
}
