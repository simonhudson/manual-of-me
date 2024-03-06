import { rem } from 'polished';
import { font } from './font';
export const BASE_SIZE = font.size;

type SpacingPx = {
	default: number;
	xsm: number;
	sm: number;
	md: number;
	lg: number;
	xlg: number;
	xxlg: number;
	xxxlg: number;
};

export const spacingPx: SpacingPx = {
	default: BASE_SIZE,
	xsm: BASE_SIZE / 4,
	sm: BASE_SIZE / 2,
	md: BASE_SIZE * 2,
	lg: BASE_SIZE * 4,
	xlg: BASE_SIZE * 6,
	xxlg: BASE_SIZE * 8,
	xxxlg: BASE_SIZE * 12,
};

type SpacingRem = {
	default: string;
	xsm: string;
	sm: string;
	md: string;
	lg: string;
	xlg: string;
	xxlg: string;
	xxxlg: string;
};

export const spacingRem: SpacingRem = {
	default: rem(spacingPx.default),
	xsm: rem(spacingPx.xsm),
	sm: rem(spacingPx.sm),
	md: rem(spacingPx.md),
	lg: rem(spacingPx.lg),
	xlg: rem(spacingPx.xlg),
	xxlg: rem(spacingPx.xxlg),
	xxxlg: rem(spacingPx.xxxlg),
};
