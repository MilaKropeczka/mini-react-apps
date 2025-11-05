import type { PropsWithChildren } from 'react';
import { type ButtonHTMLAttributes } from 'react';

type ButtonProps = PropsWithChildren<{
	variant?: 'primary' | 'secondary';
}> &
	ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
	children,
	variant = 'primary',
	...props
}: ButtonProps) {
	const initClass = 'px-6 py-2 rounded-lg transition font-medium shadow-md';

	const variants = {
		primary: 'bg-indigo-500 text-white hover:bg-indigo-600 duration',
		secondary: 'bg-gray-500 text-white hover:bg-gray-600 duration',
	};

	return (
		<button {...props} className={`${initClass} ${variants[variant]}`}>
			{children}
		</button>
	);
}
