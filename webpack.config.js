/**
 * Created by Agnieszka on 21.02.2017.
 */
module.exports = {
    entry: ["./utils.js", "./app.js"],
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                enforce:'pre',
                test: /\.js$/,
                exclude: 'node_modules',
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}