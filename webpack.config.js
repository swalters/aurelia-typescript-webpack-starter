let path = require('path'),
  webpack = require('webpack'),
  aureliaCoreDependencies = require('aurelia-core-dependencies'),
  {AureliaPlugin, ModuleDependenciesPlugin} = require('aurelia-webpack-plugin');

module.exports = {
  entry: {
    app: 'aurelia-bootstrapper'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },

  resolve: {
    extensions: [
      '.webpack.js',
      '.web.js',
      '.js',
      '.jsx',
      '.ts',
      '.tsx'
    ],
    modules: [
      'src',
      'node_modules'
    ],
    symlinks: false
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // CSS required in JS/TS files should use the style-loader that auto-injects it into the website
        test: /\.css$/i,
        use: ['style-loader'],
        issuer: {
          // only when the issuer is a .js/.ts file, so the loaders are not applied inside templates
          test: /\.[tj]s$/i
        }
      },
      {
        // CSS anywhere should use the css-loader
        test: /\.css$/i,
        use: ['css-loader']
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: ['url-loader']
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }

    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new AureliaPlugin({
      includeAll: 'src'
    }),
    new ModuleDependenciesPlugin({
      "aurelia-materialize-bridge": [
        './autocomplete/autocomplete',
        './badge/badge',
        './box/box',
        './breadcrumbs/breadcrumbs',
        './button/button',
        './carousel/carousel',
        './carousel/carousel-item',
        './char-counter/char-counter',
        './card/card',
        './checkbox/checkbox',
        './chip/chip',
        './chip/chips',
        './click-counter',
        './collapsible/collapsible',
        './collection/collection',
        './collection/collection-item',
        './collection/collection-header',
        './collection/md-collection-selector',
        './colors/md-colors',
        './datepicker/datepicker',
        './dropdown/dropdown',
        './fab/fab',
        './file/file',
        './footer/footer',
        './input/input',
        './input/input-prefix',
        './modal/modal',
        './modal/modal-trigger',
        './navbar/navbar',
        './pagination/pagination',
        './parallax/parallax',
        './progress/progress',
        './pushpin/pushpin',
        './radio/radio',
        './range/range',
        './scrollfire/scrollfire',
        './scrollfire/scrollfire-target',
        './scrollspy/scrollspy',
        './select/select',
        './sidenav/sidenav',
        './sidenav/sidenav-collapse',
        './slider/slider',
        './switch/switch',
        './tabs/tabs','./tooltip/tooltip',
        './transitions/fadein-image',
        './transitions/staggered-list',
        './waves/waves',
        './well/md-well.html']
    }),
    aureliaCoreDependencies
  ]
};
