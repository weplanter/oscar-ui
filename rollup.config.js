import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import less from 'rollup-plugin-less';
import svg from 'rollup-plugin-react-svg';

export default {
    input: `./src/index.js`,
    external: ['react', 'prop-types'],
    output: {
        file: `./dist/es/index.js`,
        format: 'es'
    },
    name: 'my-library',
    plugins: [
        resolve(),
        filesize(),
        less(),
        babel({
            exclude: 'node_modules/**',
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false
                    }
                ],
                '@babel/preset-react'
            ],
            plugins: ['@babel/plugin-external-helpers']
        }),
        svg()
    ]
};
