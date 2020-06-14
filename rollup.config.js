// import builtins from '@erquhart/rollup-plugin-node-builtins';
// import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
// import json from 'rollup-plugin-json';

export default [{
    input: 'src/user.js',
    output: {
        file: 'dist/user.esm.js',
        format: 'esm',
        name: 'previewUtil',
    },
    plugins: [
        // builtins(),
        nodeResolve(),
        // commonjs(),
        // json(),
    ]
},
{
    input: 'src/user.js',
    output: {
        file: 'dist/user.iife.js',
        format: 'iife',
        name: 'userState',
    },
    plugins: [
        // builtins(),
        nodeResolve(),
        // commonjs(),
        // json(),
    ]
}
];
