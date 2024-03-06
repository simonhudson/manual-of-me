import styled from 'styled-components';
import { FieldRow } from '@/src/components/form/form.styles';
import { spacingRem } from '@/src/theme/spacing';

export const CheckboxWrap = styled.div`
	label {
		margin: 0 ${spacingRem.md} 0 ${spacingRem.xsm};
	}
`;

export const CheckboxGroupWrap = styled(FieldRow)`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;

	${CheckboxWrap} {
		min-width: 25%;
		padding: ${spacingRem.sm} 0;
		text-align: left;
	}
`;
