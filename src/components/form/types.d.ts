export type FormFieldProps = {
	errorText?: string;
	id: string;
	isInvalid?: boolean;
	label: string;
	onChange?: () => void;
	required?: boolean;
	value?: string;
};
