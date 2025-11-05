import { Button } from './UI/Button';
import { Heading } from './UI/Heading';
import { PrimaryTextPreview } from './UI/PrimaryTextPreview';
import { Input } from './UI/Input';
import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { validatePesel } from '../utils/validatePesel';

export function PeselCheckForm() {
	const [pesel, setPesel] = useState('');
	const [validationResult, setValidationResult] = useState<{
		isValid: boolean;
		message: string;
	} | null>(null);
	const [isChecked, setIsChecked] = useState(false);

	const handleCheck = () => {
		if (!pesel.trim()) {
			setValidationResult({
				isValid: false,
				message: 'Proszę wprowadzić numer PESEL',
			});
		} else {
			const result = validatePesel(pesel);
			setValidationResult(result);
		}
		setIsChecked(true);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPesel(e.target.value);
		if (isChecked) {
			setIsChecked(false);
			setValidationResult(null);
		}
	};

	const getStatusIcon = () => {
		if (!validationResult) return null;

		return validationResult.isValid ? (
			<FaCheck className='text-green-500 text-8xl' />
		) : (
			<FaTimes className='text-red-500 text-8xl' />
		);
	};

	return (
		<div className='text-gray-600 flex flex-col gap-4'>
			<div className='flex flex-col gap-4'>
				<Heading>Sprawdź poprawność PESEL:</Heading>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleCheck();
					}}
					className='flex gap-4'>
					<Input
						placeholder='Wpisz PESEL'
						value={pesel}
						onChange={handleInputChange}
						className={`
              transition-all duration-300
              ${
					validationResult?.isValid
						? 'border-green-500 ring-1 ring-green-500'
						: ''
				}
              ${
					validationResult && !validationResult.isValid
						? 'border-red-500 ring-1 ring-red-500'
						: ''
				}
            `}
					/>
					<Button type='submit'>Sprawdź</Button>
				</form>
			</div>

			<div
				className={`transition-all duration ${
					isChecked ? 'opacity-100' : 'opacity-0'
				}`}>
				<PrimaryTextPreview className={`flex items-center gap-2`}>
					<div className='flex flex-col items-center'>
						{getStatusIcon()}
						<span className='text-gray-700 font-medium'>
							{validationResult?.message ||
								'Nie podano numeru PESEL'}
						</span>
					</div>
				</PrimaryTextPreview>
			</div>
		</div>
	);
}
