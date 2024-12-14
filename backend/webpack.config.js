const path = require('path');
const webpackExternal = require('webpack-node-externals');
const NodemoonWebpackPlugins = require('nodemon-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var webpack = require("webpack");
const WebpackManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
    entry: {
        app: './api/app',
        // index:'./api/routes/index'
    },
    mode: 'development',
    target: 'node',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
         
            {    
                // loader: 'file-loader',
                // options:{ outputPath: 'static/public/',
                // publicPath: 'static/public/',}

            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: "file-loader"
            },
            
        ]
    },
    externals: [webpackExternal()],
    plugins: [
        new NodemoonWebpackPlugins(),
        // new WebpackManifestPlugin()
    ],
    optimization: {
        minimize: true,
    },
    mode: 'production',
    // optimization: {
    //     minimizer: [
    //       new UglifyJsPlugin({
    //         chunkFilter: (chunk) => {
    //           // Exclude uglification for the `vendor` chunk
    //           if (chunk.name === 'vendor') {
    //             return false;
    //           }

    //           return true;
    //         },
    //       }),
    //     ],
    //   },

}