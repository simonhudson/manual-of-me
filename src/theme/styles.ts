import styled from 'styled-components';
import { rem } from 'polished';
import { spacingRem } from '@/src/theme/spacing';
import { media } from '@/src/theme/media';

export const ItemsList = styled.ul`
	list-style: none;
`;

export const ItemsItem = styled.li`
	align-items: center;
	background: #eee;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 0 ${spacingRem.sm};
	padding: ${spacingRem.sm};

	${media.tabletPortrait(`
		flex-direction: row;
	`)}
`;

export const ItemInfo = styled.div`
	align-self: flex-start;
	padding: 0 0 ${spacingRem.sm};

	${media.tabletPortrait(`
	align-self: auto;
		padding: 0;
	`)}
`;

export const ItemName = styled.span`
	display: block;
	font-weight: bold;
`;

export const ItemCategories = styled.span`
	display: block;
	font-size: ${rem(14)};
`;

export const Actions = styled.div`
	align-self: center;
	display: flex;
	gap: ${spacingRem.sm};
	justify-content: flex-end;
`;
