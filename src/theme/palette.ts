type Palette = {
	primary: {
		bodyBackground: string;
		brand: string;
		bodyText: string;
		black: string;
		white: string;
		grey: string;
		lightGrey: string;
	};
	status: {
		error: string;
		info: string;
		success: string;
		warning: string;
	};
};

export const palette: Palette = {
	primary: {
		bodyBackground: '#fef9f5',
		brand: '#0072d0',
		bodyText: '#5d5d5d',
		black: '#333',
		white: '#fff',
		grey: '#707070',
		lightGrey: '#f9f9f9',
	},
	status: {
		error: '#bb0000',
		info: '#CCDEFA',
		success: '#e6f7ed',
		warning: '#FEF7E6',
	},
};
