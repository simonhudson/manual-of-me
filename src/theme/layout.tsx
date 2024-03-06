import styled from 'styled-components';
import { rem } from 'polished';
import { media } from './media';
import { Breakpoints } from './breakpoints';
import { spacingRem } from './spacing';
import { palette } from './palette';
import { ReactNode } from 'react';

export const Wrap = styled.div`
	margin: 0 auto;
	width: 90%;

	&:first-of-type {
		height: 100%;
	}

	${media.tabletLandscape(`
		width: ${rem(Breakpoints.tabletLandscape + 'px')};
	`)};

	${media.desktop(`
		width: ${rem(Breakpoints.desktop + 'px')};
	`)};
`;

export const Inner = styled.div`
	&:first-of-type {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-evenly;
	}
`;

export const StyledSection = styled.section`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: ${spacingRem.lg} 0;

	&:nth-of-type(2n) {
		background: ${palette.primary.lightGrey};
	}

	${media.tabletLandscape(`
		height: auto;
		padding: ${spacingRem.lg} 0;
	`)};
`;

type SectionProps = {
	children: ReactNode;
	className?: string;
};
export const Section = ({ children, className }: SectionProps) => {
	return (
		<StyledSection className={className}>
			<Wrap>
				<Inner>{children}</Inner>
			</Wrap>
		</StyledSection>
	);
};

export const BoxShadow = `0 0 10px #ddd`;

export const ButtonLink = styled.a`
	background: transparent;
	border: 2px solid ${palette.primary.bodyText};
	border-radius: ${rem(25)};
	color: ${palette.primary.bodyText};
	display: inline-block;
	font-weight: 700;
	padding: ${spacingRem.sm} ${spacingRem.md};
	text-align: center;
	text-decoration: none;

	&:focus-visible {
		background: ${palette.primary.bodyText};
		color: ${palette.primary.white};
		text-decoration: underline;
	}
`;

export const VisuallyHidden = styled.span`
	border: 0;
	clip: rect(0 0 0 0);
	color: ${palette.primary.white};
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
`;
