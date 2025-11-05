import { Button } from './UI/Button';
import { AiOutlineInfoCircle } from 'react-icons/ai';

type PostEditFormProps = {
	title: string;
	body: string;
	errors: { title?: string; body?: string };
	onChangeTitle: React.Dispatch<React.SetStateAction<string>>;
	onChangeBody: React.Dispatch<React.SetStateAction<string>>;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	onCancel: () => void;
	isSaving: boolean;
};

export function PostEditForm({
	title,
	body,
	errors,
	onChangeTitle,
	onChangeBody,
	onSubmit,
	onCancel,
	isSaving,
}: PostEditFormProps) {
	return (
		<form onSubmit={onSubmit} className='flex flex-col gap-2'>
			<input
				value={title}
				onChange={(e) => onChangeTitle(e.target.value)}
				data-error={!!errors.title}
				className='border p-2 rounded data-[error=true]:border-red-700 data-[error=true]:border-2'
				placeholder='Tytuł'
			/>
			{errors.title && (
				<span className='text-red-700 text-sm flex items-center gap-1'>
					<AiOutlineInfoCircle size={15} />
					{errors.title}
				</span>
			)}

			<textarea
				value={body}
				onChange={(e) => onChangeBody(e.target.value)}
				data-error={!!errors.body}
				className='border p-2 rounded h-24 data-[error=true]:border-red-700 data-[error=true]:border-2'
				placeholder='Treść posta'
			/>
			{errors.body && (
				<span className='text-red-700 text-sm flex items-center gap-1'>
					<AiOutlineInfoCircle size={15} />
					{errors.body}
				</span>
			)}

			<div className='flex gap-2'>
				<Button type='submit' disabled={isSaving}>
					{isSaving ? 'Zapisywanie...' : 'Zapisz'}
				</Button>
				<Button variant='secondary' onClick={onCancel}>
					Anuluj
				</Button>
			</div>
		</form>
	);
}
