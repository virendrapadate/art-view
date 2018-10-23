var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    mode: 'development',
    entry: [SRC_DIR + "/app/index.js", SRC_DIR + "/app/style.scss"],
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [{
                test: /\.js?/, // include .js files
                enforce: "pre", // preload the jshint loader
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                include: SRC_DIR,
                use: [{
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },
            {
                test: /\.scss$/,
                include: SRC_DIR,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '/app/'
                        }
                    },
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "bundle.css"
        }),

        new CopyWebpackPlugin([{
            //Note:- No wildcard is specified hence will copy all files and folders
            from: SRC_DIR + '/app/assets', //Will resolve to RepoDir/src/assets 
            to: DIST_DIR + '/app/assets' //Copies all files from above dest to dist/assets
        }])
    ]
};

module.exports = config;