import type { PropsWithChildren } from 'react';
import { type InputHTMLAttributes } from 'react';

type InputProps = PropsWithChildren<{
	placeholder?: string;
}> &
	InputHTMLAttributes<HTMLInputElement>;

export function Input({ placeholder = 'placeholder', ...props }: InputProps) {
	return (
		<input
			{...props}
			className='p-2 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none text-sm w-full shadow/5'
			placeholder={placeholder}
		/>
	);
}
