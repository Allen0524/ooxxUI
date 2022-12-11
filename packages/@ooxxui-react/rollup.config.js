import jsx from 'acorn-jsx';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

export default {
	input: './src/index.ts',
	output: [
		{
			file: 'build/index.es.js',
			format: 'es',
			sourcemap: true,
		},
	],
	acornInjectPlugins: [jsx()],
	plugins: [
		babel({babelHelpers: 'bundled'}),
		typescript({
			exclude: ['**/*.test.(tsx|ts)', '**/*.stories.(tsx|ts)'],
		}),
		resolve(),
	],
};
