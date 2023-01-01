// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});

const nextConfig = {
	/* config options here */
	// experimental: {appDir: true},
	images: {
		domains: [''],
	},
};

module.exports = withMDX({
	// Append the default value with md extensions
	// ...nextConfig,
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
