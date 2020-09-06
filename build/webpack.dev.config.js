const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // production|development
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../example/src/index.html')
        })
    ],
    devServer: {
        port: 3005
    }
}