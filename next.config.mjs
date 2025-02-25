/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		loader: 'custom',
		loaderFile: './my-loader.ts',
	},
	// images: {
	// 	domains: ['credotravel.pl'],
	// },
};

export default nextConfig;
