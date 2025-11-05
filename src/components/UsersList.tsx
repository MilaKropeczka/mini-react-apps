import { useState } from 'react';
import { useUsersQuery } from '../services/useUsersQuery';
import { Button } from './UI/Button';
import { Heading } from './UI/Heading';
import { Input } from './UI/Input';
import { PrimaryTextPreview } from './UI/PrimaryTextPreview';
import { UserSkeleton } from './UserSkeleton';
import { UserPosts } from './UserPosts';
import type { User } from '../services/types';

export function UsersList() {
	const [search, setSearch] = useState<string>('');
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const { data, isLoading, error, refetch } = useUsersQuery(search);

	if (error) return <p>Coś poszło nie tak</p>;

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-col gap-4'>
				<Heading>Szukaj użytkownika:</Heading>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						refetch();
					}}
					className='flex gap-4'>
					<Input
						placeholder='Wpisz nazwę użytkownika'
						value={search}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setSearch(e.target.value)
						}
					/>
					<Button type='submit' variant='secondary'>
						Wyszukaj
					</Button>
				</form>
			</div>

			<div className='flex flex-col gap-3'>
				{isLoading ? (
					<>
						{[1, 2, 3, 4].map((i) => (
							<UserSkeleton key={i} />
						))}
					</>
				) : (
					<>
						{data?.map((user: User) => (
							<div key={user.id} className='flex flex-col gap-2'>
								<PrimaryTextPreview
									action={
										<div className='flex justify-between items-center w-full'>
											<span className='text-gray-700 font-medium'>
												{user.name}
											</span>
											<Button
												onClick={() =>
													setSelectedUser(
														selectedUser?.id ===
															user.id
															? null
															: user
													)
												}>
												{selectedUser?.id === user.id
													? 'Ukryj'
													: 'Podgląd'}
											</Button>
										</div>
									}>
									{selectedUser?.id === user.id && (
										<UserPosts userId={selectedUser.id} />
									)}
								</PrimaryTextPreview>
							</div>
						))}
					</>
				)}
			</div>
		</div>
	);
}
