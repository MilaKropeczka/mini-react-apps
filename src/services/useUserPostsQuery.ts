import { useQuery } from '@tanstack/react-query';
import type { Post } from './types';
import { api } from './api';

const getUserPosts = async (userId: number): Promise<Post[]> => {
	const res = await api.get(`/users/${userId}/posts`);
	return res.data;
};

export const useUserPostsQuery = (userId: number) => {
	return useQuery({
		queryKey: ['userPosts', userId],
		queryFn: () => getUserPosts(userId),
		enabled: !!userId,
	});
};
