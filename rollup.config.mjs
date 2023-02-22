import typescript from '@rollup/plugin-typescript';
import terser from "@rollup/plugin-terser";

const plugins = [
    typescript({ tsconfig: './tsconfig.json' }),
    terser({ format: { comments: false } })
];

export default [
    {
        input: 'src/index.ts',
        output: {
            format: 'es',
            file: './dist/index.js'
        },
        plugins,
    }
];
