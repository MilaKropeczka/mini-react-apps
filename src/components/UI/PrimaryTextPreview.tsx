import type { PropsWithChildren } from 'react';
import { type ReactNode, type HTMLAttributes } from 'react';

type PrimaryTextPreviewProps = PropsWithChildren<{
	action?: ReactNode;
}> &
	HTMLAttributes<HTMLDivElement>;

export function PrimaryTextPreview({
	children,
	action,
	...props
}: PrimaryTextPreviewProps) {
	return (
		<div
			{...props}
			className='flex flex-col p-4 rounded-lg bg-indigo-50 border border-indigo-300 text-sm'>
			{action}
			{children}
		</div>
	);
}
