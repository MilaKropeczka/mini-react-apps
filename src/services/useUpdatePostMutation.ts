import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Post } from './types';
import { api } from './api';

const updatePost = async (
	postId: number,
	data: { title: string; body: string }
): Promise<Post> => {
	const res = await api.patch(`/posts/${postId}`, data);
	return res.data;
};

export const useUpdatePostMutation = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({
			postId,
			data,
		}: {
			postId: number;
			data: { title: string; body: string };
		}) => updatePost(postId, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['userPosts'] });
		},
	});
};
