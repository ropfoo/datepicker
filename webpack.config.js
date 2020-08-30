const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, '/src/ts/app.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new HTMLWebPackPlugin()
    ]
}