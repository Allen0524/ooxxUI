import {ReactNode} from 'react';
interface SwitchProps {
	id?: string;
	checked?: boolean;
	className?: string;
	onChange?: (checked: boolean) => void;
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
			className={className}
			onClick={handleOnClick}
			{...restProps}
		>
			{children}
		</button>
	);
}
