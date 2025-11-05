import type { PropsWithChildren } from 'react';

type HeadingProps = PropsWithChildren;

export function TextPreview({ children }: HeadingProps) {
	return (
		<pre className='bg-gray-50 p-4 rounded-lg max-h-56 overflow-auto text-gray-700 text-sm border border-gray-200'>
			{children}
		</pre>
	);
}
