

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        path: __dirname + '/dist',
        filename: 'output.js'
    },
    module: {
        rules: [
            {
                test: /\.(js||jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ]
    },
    devServer: {
        static: './dist',
        port: 3000
    }
}