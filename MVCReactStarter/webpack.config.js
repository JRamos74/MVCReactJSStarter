/// <binding BeforeBuild='Run - Development' />
"use strict";
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.jsx', '.js']
    },
    entry: {
        app: "./index.js",
        appStyles: "./css/site.css",
        vendor: [
            "react",
            "react-dom",
            "react-router-dom",
            "toastr",
            "axios",
        ],
        vendorStyles: [
            "../node_modules/toastr/build/toastr.css",
        ]
    },
    output: {
        path: path.join(basePath, "dist"),
        filename: "[name].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ]
            },
            // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
            // Using here url-loader and file-loader
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
        ],


    },
    devtool: "inline-source-map",
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor", "manifest"],
        }),

    ]
};
