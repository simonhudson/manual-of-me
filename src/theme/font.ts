type Font = {
	size: number;
	heading: string;
	sansSerif: string;
	serif: string;
	semiBold: string;
	bold: string;
	code: string;
	weight: number;
	lineHeight: number;
};

export const font: Font = {
	size: 16,
	heading: `Poppins, arial, helvetica, sans-serif`,
	sansSerif: `'Open Sans', arial, helvetica, sans-serif`,
	serif: `'Lora', 'times new roman', serif`,
	semiBold: 'opensans_semibold',
	bold: 'opensans_bold',
	code: `'Courier New', Courier, monospace`,
	weight: 400,
	lineHeight: 1.8,
};
