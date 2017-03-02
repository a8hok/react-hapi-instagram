'use strict';
 require('babel-polyfill');
 require('whatwg-fetch');

module.exports = {
    context: __dirname + "/app",

    //entry: "./js/app.js",
    entry: [
        "babel-polyfill",
        "whatwg-fetch",
        "./js/app.js",
        "./index.html"
    ],
    output: {
        filename: "app.js",
        path: __dirname + "/dist",
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },

    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader"]
            }, {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },

        ]
    },

};
