import { CheckboxWrap } from './index.styles';
import type { FormFieldProps } from '@/src/components/form/types';

export interface CheckboxProps extends FormFieldProps {}

export const Checkbox = ({ id, label, onChange, value }: CheckboxProps) => {
	const fieldId = `checkbox-${id}`;
	return (
		<CheckboxWrap>
			<input
				id={fieldId}
				name={fieldId}
				onChange={(e) => {
					if (onChange) onChange(e);
				}}
				type="checkbox"
				value={value ?? ''}
			/>
			<label htmlFor={fieldId}>{label}</label>
		</CheckboxWrap>
	);
};
