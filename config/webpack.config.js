const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PUBLIC_PATH = 'http://www.workservicekg.de';

const ENTRY = require('./entry.js');
const OUTPUT_DIR = 'dist';

module.exports = (env, argv) => {
  const type =
    argv.mode === 'production'
      ? {
        pathToDist: '../dist',
        mode: 'production',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      }
      : {
        pathToDist: 'dist',
        mode: 'development',
        minify: false
      };

  const entryHtmlPlugins = Object.keys(ENTRY.html).map(entryName => {
    const templateName = entryName === ('index-pl' || 'index-de') ? 'index' : 'index';
    const fileName = entryName === 'index-de' ? 'index' : 'index-pl';
    return new HtmlWebPackPlugin({
      filename: `${fileName}.html`,
      template: `./sources/templates/${templateName}.pug`,
      file: require(`../sources/data/${entryName}.json`),
      chunks: [entryName],
      minify: type.minify,
      mode: type.mode,
      inlineSource: '.(css)$'
      // inlineSource: '.(js|css)$',
    });
  });

  const output = {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vendor/js/index.[hash].js'
  };

  return {
    devtool: devProdOption('source-map', 'none', argv),
    entry: ENTRY.html,
    output: output,
    module: {
      rules: [
        {
          // JS
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env']
            }
          }
        },
        {
          // HTML
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize:
                  argv.mode === 'development' ? false : true
              }
            }
          ]
        },
        {
          // CSS SASS SCSS
          test: /\.(css|sass|scss)$/,
          use: [
            argv.mode === 'development'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [
                  require('autoprefixer')({
                    browsers: ['> 1%', 'last 2 versions']
                  }),
                  require('postcss-url')({
                    url: 'inline',
                    maxSize: 50
                    // assetsPath: root('dist')
                  })
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          // IMAGES
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            name: '[name]-[hash:8].[ext]',
            outputPath: argv.mode === 'production' ? '/images/' : '',
            publicPath: argv.mode === 'production' ? './images/' : '',
            useRelativePath: true
          }
        },
        {
          // PUG
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: true,
            self: true
          }
        }
      ]
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false
            }
          }
        })
      ]
    },
    plugins: [
      prodPlugin(
        new CleanWebpackPlugin('dist', {
          verbose: true,
          root: path.resolve('./')
        }),
        argv
      ),
      prodPlugin(
        new MiniCssExtractPlugin({
          filename: "vendor/css/index.[hash].css",
        }),
        argv
      ),
      prodPlugin(
        new SWPrecacheWebpackPlugin({
          cacheId: 'kg',
          dontCacheBustUrlsMatching: /\.\w{8}\./,
          filename: 'sw.js',
          minify: false,
          navigateFallback: PUBLIC_PATH + 'index.html',
          stripPrefix: OUTPUT_DIR,
          staticFileGlobs: [
            `${OUTPUT_DIR}/assets/manifest.json`,
            `${OUTPUT_DIR}/favicon.ico`,
            `${OUTPUT_DIR}/vendor/js/*.js`,
            // `${OUTPUT_DIR}/vendor/css/*.css`,
            `${OUTPUT_DIR}/images/static/*.png`,
            `${OUTPUT_DIR}/images/*.jpg`,
            `${OUTPUT_DIR}/images/*.png`,
            `${OUTPUT_DIR}/*.html`,
          ],
        }),
        argv
      ),
      prodPlugin(
        new CopyWebpackPlugin([
          { from: 'sources/assets/', to: 'assets/' },
          { from: 'sources/images/static/', to: 'images/static' },
          { from: 'sources/assets/favicon.ico', to: './' },
          { from: 'sources/assets/.htaccess', to: './' },
          { from: 'sources/assets/robots.txt', to: './' },
        ]),
        argv
      ),
      prodPlugin(new OptimizeCssAssetsPlugin(), argv),
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(true)
      })
    ]
      .concat(entryHtmlPlugins)
      .concat(
        prodPlugin(
          new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'async'
          }),
          argv
        )
      )
      .concat(prodPlugin(new HtmlWebpackInlineSourcePlugin(), argv))
    // .concat(
    //   prodPlugin(
    //     new BundleAnalyzerPlugin({
    //       openAnalyzer: true
    //     }),
    //     argv
    //   )
    // )
  };
};

function devProdOption(dev, prod, argv) {
  return argv.mode === 'development' ? dev : prod;
}

function prodPlugin(plugin, argv) {
  return argv.mode === 'production' ? plugin : () => { };
}

function devPlugin(plugin, argv) {
  return argv.mode === 'development' ? plugin : () => { };
}
