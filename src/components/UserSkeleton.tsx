export const UserSkeleton = () => (
	<div className='flex flex-col gap-2 animate-pulse'>
		<div className='flex items-center justify-between p-3 rounded-lg bg-indigo-50'>
			<div className='flex-1 space-y-2'>
				<div className='h-6 bg-indigo-200 rounded w-1/2'></div>
			</div>
			<div className='h-11 bg-indigo-200 rounded-lg w-28'></div>
		</div>
	</div>
);
