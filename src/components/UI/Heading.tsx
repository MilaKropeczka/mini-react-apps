import type { PropsWithChildren } from 'react';

type HeadingProps = PropsWithChildren;

export const Heading = ({ children }: HeadingProps) => (
	<h2 className='font-medium text-gray-600 text-sm'>{children}</h2>
);
