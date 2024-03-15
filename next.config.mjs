/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		loader: 'custom',
		loaderFile: './my-loader.ts',
	},
	// images: {
	// 	domains: ['credo-krosno.pl'],
	// },
};

export default nextConfig;
