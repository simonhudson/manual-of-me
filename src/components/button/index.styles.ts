import styled from 'styled-components';
import { rem } from 'polished';
import { BASE_SIZE, spacingRem } from '@/src/theme/spacing';
import { palette } from '@/src/theme/palette';
import { font } from '@/src/theme/font';
import { Icon } from '@/src/components/icon';

export const StyledButton = styled.button`
	align-items: center;
	border-radius: ${spacingRem.sm};
	display: flex;
	font-family: ${font.sansSerif};
	font-weight: bold;
	font-size: ${rem(BASE_SIZE)};
	padding: ${spacingRem.default};
	text-decoration: none;

	&:focus-visible {
		outline: 6px solid orange;
		text-decoration: underline;
	}

	&[data-variant='primary'] {
		background: ${palette.primary.brand};
		border: 3px solid transparent;
		color: ${palette.primary.white};

		&[data-is-destructive='true'] {
			background: ${palette.status.error};
		}
	}

	&[data-variant='secondary'] {
		background: transparent;
		border: 3px solid ${palette.primary.brand};
		color: ${palette.primary.brand};

		&[data-is-destructive='true'] {
			border: 3px solid ${palette.status.error};
			color: ${palette.status.error};
		}
	}

	&[data-variant='tertiary'] {
		background: transparent;
		border: 3px transparent;
		color: ${palette.primary.brand};

		&[data-is-destructive='true'] {
			color: ${palette.status.error};
		}
	}

	&[data-size='small'] {
		font-size: ${rem(BASE_SIZE - 2)};
		font-weight: normal;
		padding: ${spacingRem.sm} ${spacingRem.default};

		&[data-is-wide='true'] {
			padding: ${spacingRem.sm} ${spacingRem.md};
		}
	}

	&[data-size='medium'] {
		padding: ${spacingRem.default};

		&[data-is-wide='true'] {
			padding: ${spacingRem.default} ${spacingRem.md};
		}
	}

	&[data-size='large'] {
		font-size: ${rem(BASE_SIZE * 1.25)};

		&[data-is-wide='true'] {
			padding: ${spacingRem.default} ${spacingRem.lg};
		}
	}

	&[data-size='x-large'] {
		font-size: ${rem(BASE_SIZE * 1.5)};

		&[data-is-wide='true'] {
			padding: ${spacingRem.default} ${spacingRem.xlg};
		}
	}
`;

export const StyledButtonRow = styled.div`
	display: flex;
	gap: ${spacingRem.md};
`;

export const StyledIcon = styled(Icon)`
	color: ${palette.primary.brand};
`;
