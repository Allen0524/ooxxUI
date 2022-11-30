module.exports = {
	stories: [
		'../packages/**/*.stories.(ts|tsx)',
		// '../packages/**/*.stories.@(ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/react',
};
