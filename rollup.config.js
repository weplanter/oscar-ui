import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-react-svg';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const isProductionEnv = process.env.NODE_ENV === 'production';

export default {
    input: `./src/index.js`,
    external: ['react', 'prop-types'],
    output: [
        {
            file: `./dist/es/index.js`,
            format: 'es',
            name: '@oscarui'
        },
        {
            file: `./dist/umd/index.js`,
            format: 'umd',
            name: '@oscarui'
        }
    ],
    plugins: [
        resolve(),
        filesize(),
        postcss({
            plugins: [autoprefixer, cssnano],
            extract: './dist/style/index.css',
            minimize: isProductionEnv,
            user: ['less']
        }),
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
