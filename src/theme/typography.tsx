import styled from 'styled-components';
import { rem } from 'polished';
import { palette } from './palette';
import { font } from './font';
import { spacingRem } from './spacing';
import { media } from './media';

export const H1 = styled.h1`
	color: ${palette.primary.bodyText};
	font-family: ${font.sansSerif};
	font-size: ${rem(30)};
	font-weight: 400;
	line-height: ${rem(50)};
	margin: 0;

	${media.tabletLandscape(`
		font-size: ${rem(40)};
	`)};
`;

export const H2 = styled.h2`
	color: ${palette.primary.bodyText};
	font-family: ${font.sansSerif};
	font-size: ${rem(24)};
	font-weight: 700;
	line-height: ${rem(16)};
	margin: 0 0 ${spacingRem.default};
	text-transform: uppercase;

	${media.tabletLandscape(`
		line-height: ${rem(36)};
	`)};
`;

export const H3 = styled.h3`
	color: ${palette.primary.bodyText};
	font-family: ${font.sansSerif};
	font-size: ${rem(font.size * 1.15)};
	font-weight: 700;
	line-height: ${rem(30)};
	margin: 0 0 ${spacingRem.sm};
	padding: 0 0 ${spacingRem.sm} 0;
	text-transform: uppercase;

	${media.tabletLandscape(`
		font-size: ${rem(18)};
		line-height: ${rem(30)};
	`)};
`;

export const Paragraph = styled.p`
	color: ${palette.primary.bodyText};
	font-family: ${font.sansSerif};
	font-size: ${rem(font.size)};
	font-weight: ${font.weight};
	line-height: ${font.lineHeight};
	margin: 0 0 ${rem(24)};
`;

export const SmallerParagraph = styled(Paragraph)`
	font-size: ${rem(font.size * 0.9)};
`;

export const Strong = styled.strong`
	color: inherit;
	font-weight: 700;
`;

export const Small = styled.small`
	font-size: ${rem(font.size * 0.85)};
`;

export const ListItem = styled.li`
	color: ${palette.primary.bodyText};
`;
