const webpack = require('webpack');
const BabelMultiTargetPlugin = require('../../').BabelMultiTargetPlugin
// const NamedLazyChunksPlugin =  require('../../').NamedLazyChunksPlugin

/**
 * @type {Configuration}
 *
 * this configuration is merged with ~/examples/webpack.common.js
 **/
module.exports = {

  entry: {
    'main': './src/entry.js',
  },

  module: {
    rules: [
      // switch rules to test without multi target
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         ['@babel/preset-env', {
      //           modules: false,
      //           useBuiltIns: 'usage',
      //           targets: {
      //             browsers: ['IE 11'],
      //           },
      //         }],
      //       ],
      //       plugins: [
      //         '@babel/plugin-syntax-dynamic-import',
      //         // '@babel/plugin-transform-runtime',
      //       ]
      //     },
      //   }
      // },
      {
        test: /\.js$/,
        use: BabelMultiTargetPlugin.loader(),
      },
    ],
  },

  plugins: [
    new webpack.ContextReplacementPlugin(/plugins$/, /(a)\/plugin\.js$/),
    // enable for smarter dynamic chunk naming
    // new NamedLazyChunksPlugin(),
  ],

}
