var CopyWebpackPlugin = require("copy-webpack-plugin")
var webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    node: {
        __dirname: false,
        __filename: false,
    },
    entry:
    {
        main: "./src/Main.tsx",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.(eot|woff|woff2|svg|ttf|png)([\?]?.*)$/, loader: "file-loader" },
            { test: /\.jpg$/, loader: "url-loader?mimetype=image/jpg" },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: "src/Index.html",
            to: "Index.html"
        }]),
        new webpack.DefinePlugin({
            'process.env': {
                // Useful to reduce the size of client-side libraries, e.g. react
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    externals: {}
};