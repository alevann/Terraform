const path = require('path')
const glob = require('glob')
const babelConfig = require('./babel.config.json')

const configs = {
  paths: {
    output: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src')
  }
}

module.exports = {
  mode: 'development',
  entry: glob.sync(`${configs.paths.src}/**/*.tsx`).map(p => `${__dirname}/${p}`),
  output: {
    filename: 'index.js',
    path: configs.paths.output,
    clean: true,
    library: {
      name: 'terraform',
      type: 'umd'
    }
  },
  externals: {
    terra: 'terra'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        },
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': [configs.paths.src]
    }
  }
}
