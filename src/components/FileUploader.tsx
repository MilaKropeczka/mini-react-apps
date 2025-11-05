import React from 'react';
import { FiUpload } from 'react-icons/fi';
import { PrimaryTextPreview } from './UI/PrimaryTextPreview';
import { FaTimes } from 'react-icons/fa';

interface FileUploaderProps {
	onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	fileName: string | undefined;
	accept: string;
	label: string;
	onClick: () => void;
}

export const FileUploader = ({
	onFileChange,
	fileName,
	accept,
	label,
	onClick,
}: FileUploaderProps) => {
	return (
		<PrimaryTextPreview>
			<div className='flex gap-3 items-center'>
				<label className='flex items-center space-x-2 bg-indigo-500 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-indigo-600 transition'>
					<FiUpload />
					<span>{label}</span>
					<input
						type='file'
						accept={accept}
						className='hidden'
						onChange={onFileChange}
					/>
				</label>
				{fileName ? (
					<div className='flex items-center justify-between bg-white border border-gray-300 shadow-sm/5 rounded-md px-4 py-1'>
						<span className='text-gray-700 font-medium'>
							{fileName}
						</span>
						<button
							onClick={onClick}
							className='flex items-center justify-center w-6 h-6 rounded-full hover:bg-gray-100 transition'
							title='Usuń plik'>
							<FaTimes size={14} className='text-gray-500' />
						</button>
					</div>
				) : (
					<span>Brak pliku</span>
				)}
			</div>
		</PrimaryTextPreview>
	);
};
