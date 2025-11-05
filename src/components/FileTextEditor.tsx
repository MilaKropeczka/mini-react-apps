import React, { useState } from 'react';
import { Heading } from './UI/Heading';
import { TextPreview } from './UI/TextPreview';
import { FileUploader } from './FileUploader';
import { mixText } from '../utils/mixText';

export function FileTextEditor() {
	const [fileName, setFileName] = useState<string | undefined>(undefined);
	const [text, setText] = useState<string>('');
	const [newText, setNewText] = useState<string>('');

	const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const file = e.target.files?.[0];
		if (!file) return;
		e.target.value = '';
		setFileName(file.name);

		const reader = new FileReader();
		reader.onload = () => {
			const result = reader.result as string;
			setText(result);
			const content = mixText(result);
			setNewText(content);
		};
		reader.readAsText(file);
	};

	const handleRemoveFile = (): void => {
		setFileName(undefined);
		setText('');
		setNewText('');
	};

	return (
		<div className='flex flex-col gap-5'>
			<FileUploader
				onFileChange={handleChangeFile}
				fileName={fileName}
				accept='.txt'
				label='Wybierz plik'
				onClick={handleRemoveFile}
			/>

			<div className='flex flex-col gap-2'>
				<Heading>Oryginalny tekst:</Heading>
				<TextPreview>{text || 'Brak tekstu'}</TextPreview>
			</div>

			<div className='flex flex-col gap-2'>
				<Heading>Tekst po zmienionym szyku liter:</Heading>
				<TextPreview>{newText || 'Brak tekstu'}</TextPreview>
			</div>
		</div>
	);
}
