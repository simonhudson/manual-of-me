/** @type {import('next').NextConfig} */

const setEnvVars = () => {
	const returnObj = {};
	// ['API_DOMAIN'].forEach((key) => {
	// 	returnObj[key] = process.env[key];
	// });
	return returnObj;
};

const nextConfig = {
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	env: setEnvVars(),
	poweredByHeader: false,
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{ key: 'Referrer-Policy', value: 'same-origin' },
					{ key: 'X-Frame-Options', value: 'deny' },
					{ key: 'X-Xss-Protection', value: '1; mode=block' },
				],
			},
		];
	},
};

module.exports = nextConfig;
