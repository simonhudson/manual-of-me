import { Checkbox } from './index';
import { CheckboxGroupWrap } from '@/src/components/form/checkbox/index.styles';
import { Fieldset, Legend } from '@/src/components/form/form.styles';

type CheckboxGroupProps = {
	handleCategoryChange?: () => void;
	items: any[];
	legend: string;
	required?: boolean;
};

export const CheckboxGroup = ({ required, handleCategoryChange, legend, items }: CheckboxGroupProps) => {
	return (
		<Fieldset>
			<Legend>{legend}</Legend>
			<CheckboxGroupWrap>
				{items.map((item) => {
					return (
						<Checkbox
							id={item._id}
							key={`category-${item._id}`}
							label={item.value}
							onChange={handleCategoryChange}
							value={item._id}
						/>
					);
				})}
			</CheckboxGroupWrap>
		</Fieldset>
	);
};
