import { useState } from 'react';
import { Button } from './UI/Button';
import { PostSkeleton } from './PostSkeleton';
import { z } from 'zod';
import { PostEditForm } from './PostEditForm';
import type { Post } from '../services/types';
import { useUserPostsQuery } from '../services/useUserPostsQuery';
import { useUpdatePostMutation } from '../services/useUpdatePostMutation';

const postSchema = z.object({
	title: z.string().min(1, 'Tytuł wymagany'),
	body: z.string().min(1, 'Treść wymagana'),
});

export function UserPosts({ userId }: { userId: number }) {
	const { data: posts, isLoading } = useUserPostsQuery(userId);
	const [editingPost, setEditingPost] = useState<number | null>(null);
	const [editTitle, setEditTitle] = useState('');
	const [editBody, setEditBody] = useState('');
	const [errors, setErrors] = useState<{ title?: string; body?: string }>({});
	const updateMutation = useUpdatePostMutation();

	const handleEdit = (post: Post) => {
		setEditingPost(post.id);
		setEditTitle(post.title);
		setEditBody(post.body);
	};

	const handleSave = (postId: number) => {
		const result = postSchema.safeParse({
			title: editTitle,
			body: editBody,
		});

		if (!result.success) {
			const formErrors: { title?: string; body?: string } = {};

			result.error.issues.forEach((issue) => {
				if (issue.path[0] === 'title') formErrors.title = issue.message;
				if (issue.path[0] === 'body') formErrors.body = issue.message;
			});

			setErrors(formErrors);
			return;
		}
		setErrors({});

		updateMutation.mutate(
			{
				postId,
				data: result.data,
			},
			{
				onSuccess: () => {
					setEditingPost(null);
				},
			}
		);
	};

	const handleCancel = () => {
		setEditingPost(null);
	};

	if (isLoading && !posts) {
		return (
			<div className='flex flex-col gap-3 mt-4'>
				<div className='h-7 bg-indigo-200 rounded w-52 mb-2 animate-pulse'></div>
				{[1].map((i) => (
					<PostSkeleton key={i} />
				))}
			</div>
		);
	}
	if (!posts || posts.length === 0) return <div>Brak postów</div>;

	return (
		<div className='flex flex-col gap-3 mt-2'>
			<h3 className='font-semibold text-lg'>Posty użytkownika:</h3>
			{posts.map((post: Post) => (
				<div
					key={post.id}
					className='rounded-lg p-4 bg-white shadow-lg/5'>
					{editingPost === post.id ? (
						<PostEditForm
							title={editTitle}
							body={editBody}
							errors={errors}
							onChangeTitle={setEditTitle}
							onChangeBody={setEditBody}
							onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
								e.preventDefault();
								handleSave(post.id);
							}}
							onCancel={handleCancel}
							isSaving={updateMutation.isPending}
						/>
					) : (
						<div className='flex flex-col gap-2'>
							<h4 className='font-semibold'>{post.title}</h4>
							<p className='text-gray-700'>{post.body}</p>
							<div className='flex gap-2 mt-2'>
								<Button onClick={() => handleEdit(post)}>
									Edytuj post
								</Button>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
}
