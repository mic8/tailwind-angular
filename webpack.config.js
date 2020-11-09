module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'resolve-url-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                syntax: 'postcss-scss',
                                sourceMap: false,
                                plugins: [
                                    require('postcss-import'),
                                    require('postcss-preset-env')({ stage: 0 }),
                                    require('tailwindcss')('tailwind.config.js'),
                                    require('autoprefixer'),
                                ],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                hmr: true,
                                modules: true,
                                sourceMap: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
};
