var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var path = require('path');

require('./postcss.config.js');

module.exports = {

    //页面入口文件配置
    entry: [ 
        path.resolve(__dirname, './src/enter.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },



    //插件项
    plugins: [
        new HtmlWebpackPlugin({
            title: '易企秀react',
            template: __dirname + '/src/index.html',
            minify: { //html压缩

                removeComments: true,
                collapseWhitespace: false
            }

        }),
        //单独提取css文件
        new ExtractTextPlugin("style/css.css")

    ],
    module: {

        //加载器配置
        loaders: [

            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: ['/node_modules/','/src/public/flexible.js','/src/public/swiper.min.js']
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })

            }, {
                test: /\.less$/,
                loader: "style-loader!css-loader!postcss-loader!less-loader"
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }  
                  }
                ]
            }

        ]
    },
    // //其它解决方案配置
    resolve: {
        // root: 'E:/github/flux-example/src', //绝对路径
        extensions: ['.js', '.jsx', '.css','.less','.json']

    }
};