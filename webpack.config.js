const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");

module.exports = {
    mode: "development",

    entry: {
        main: path.resolve(__dirname, "./src/js/app.js"),
    },

    output: {
        filename: "js/[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "dic",
            filename: "index.html",
            template: "./src/temp.html",
            chunks: ["main"],
        }),

        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`
            new JsonMinimizerPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                // test: /\.(jpe?g|png|gif|svg)$/i,
                // loader: "file-loader",
                // generator: {
                //     filename: "[name]-[hash][ext]",
                // },
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.json$/i,
                type: "asset/resource",
            },
        ],
    },
};
