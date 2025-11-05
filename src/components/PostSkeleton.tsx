export const PostSkeleton = () => (
	<div className='rounded-lg p-4 bg-indigo-50 animate-pulse'>
		<div className='flex flex-col gap-3'>
			<div className='h-7 bg-indigo-200 rounded w-3/4'></div>
			<div className='space-y-3'>
				<div className='h-4 bg-indigo-200 rounded w-full'></div>
				<div className='h-4 bg-indigo-200 rounded w-11/12'></div>
				<div className='h-4 bg-indigo-200 rounded w-full'></div>
				<div className='h-4 bg-indigo-200 rounded w-11/12'></div>
			</div>
			<div className='h-10 bg-indigo-200 rounded-lg w-38 mt-2'></div>
		</div>
	</div>
);
