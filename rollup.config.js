import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-react-svg';
// import less from 'less';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const isProductionEnv = process.env.NODE_ENV === 'production';

// const processLess = function(context, payload) {
//     return new Promise((resolve, reject) => {
//         less.render(
//             {
//                 file: context
//             },
//             function(err, result) {
//                 if (!err) {
//                     resolve(result);
//                 } else {
//                     reject(err);
//                 }
//             }
//         );

//         less.render(context, {}).then(
//             function(output) {
//                 // output.css = string of css
//                 // output.map = string of sourcemap
//                 // output.imports = array of string filenames of the imports referenced
//                 if (output && output.css) {
//                     resolve(output.css);
//                 } else {
//                     reject({});
//                 }
//             },
//             function(err) {
//                 reject(err);
//             }
//         );
//     });
// };

export default {
    input: `./src/index.js`,
    external: ['react', 'prop-types'],
    output: [
        {
            file: `./dist/es/index.js`,
            // css: `./dist/es/style/index.css`,
            format: 'es',
            name: '@oscarui'
        },
        {
            file: `./dist/umd/index.js`,
            // css: `./dist/es/style/index.css`,
            format: 'umd',
            name: '@oscarui'
        }
    ],
    plugins: [
        resolve(),
        filesize(),
        postcss({
            plugin: [autoprefixer, cssnano],
            extract: './dist/style/index.css',
            minimize: isProductionEnv
            // process: processLess
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
