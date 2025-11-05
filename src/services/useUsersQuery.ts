import { useQuery } from '@tanstack/react-query';
import type { User } from './types';
import { api } from './api';

const getUsers = async (search?: string): Promise<User[]> => {
	const res = await api.get('/users', {
		params: search ? { name: search } : {},
	});
	return res.data;
};

export const useUsersQuery = (search: string) => {
	return useQuery({
		queryKey: ['users', search],
		queryFn: () => getUsers(search),
		enabled: true,
	});
};
