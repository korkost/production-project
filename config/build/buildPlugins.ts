import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[countenthash:8].css',
        }),
    ]
}