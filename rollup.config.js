import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'packages/index.ts',
	output: [
		{
			file: 'build/index.js',
			format: 'cjs',
		},
		{
			file: 'build/index.js',
			format: 'es',
			sourcemap: true,
		},
	],
	plugins: [
		resolve(),
		commonjs(),
		babel({babelHelpers: 'bundled'}),
		typescript(),
	],
};
