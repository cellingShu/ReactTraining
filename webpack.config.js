var path = require("path")
var webpack = require('../../Library/Caches/typescript/2.9/node_modules/@types/webpack')
var HtmlWebpackPlugin = require('../../Library/Caches/typescript/2.9/node_modules/@types/html-webpack-plugin')

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: '[name].js',
    },

    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.less']
    },
    module: {
        rules: [
            {
                test: /(\.js)|(\.jsx)|(\.ts)|(\.tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
                        presets: ['env', 'react'],
                        plugins: [["import", { "libraryName": "antd", "style": "css" }]]
                    },
                    // options: {
                    //   plugins: [["import", { "libraryName": "antd", "style": "css" }]]
                    // }
                   
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.less$/,
                use: [ {
                    loader: "style-loader"
                  },
                  {
                    loader: "css-loader",
                    options: {
                      sourceMap: true,
                      modules: true,
                      localIdentName: "[local]___[hash:base64:5]"
                    }
                  },
                  {
                    loader: "less-loader"
                  }
                ]
              },
            {
                test: /\.(png|jpg|gif|svg|eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/styleResource/[name].[ext]'
                }
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: 'localhost',
        compress: true,
        port: 8088
    },
}