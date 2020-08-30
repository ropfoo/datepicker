const path = require('path')

module.exports = {
    entry: path.join(__dirname, '/src/ts/app.ts'),
    output: {
        filename: 'datepicker.js',
        path: path.resolve(__dirname, 'public/dist/js')
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}