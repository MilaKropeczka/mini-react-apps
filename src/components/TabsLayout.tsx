import type { PropsWithChildren } from 'react';

type TabsLayoutProps = PropsWithChildren<{
	activeTab: number;
	setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}>;

export function TabsLayout({
	activeTab,
	setActiveTab,
	children,
}: TabsLayoutProps) {
	return (
		<div className='flex justify-center items-start min-h-screen bg-linear-to-br from-indigo-50 to-indigo-200 p-6'>
			<div className='bg-white p-6 max-w-2xl w-full rounded-2xl shadow-2xl space-y-6 relative z-10'>
				<div className='flex border-b border-indigo-200'>
					{['Zadanie 1', 'Zadanie 2', 'Zadanie 3'].map(
						(tab, index) => (
							<button
								key={index}
								className={`px-6 py-3 text-sm -mb-px font-semibold rounded-t-md transition-all ${
									activeTab === index
										? 'bg-white border-t border-x border-indigo-300 text-indigo-600'
										: 'text-gray-500 hover:text-indigo-600'
								}`}
								onClick={() => setActiveTab(index)}>
								{tab}
							</button>
						)
					)}
				</div>
				{children}
			</div>
		</div>
	);
}
