export default ({ postcssConfig, lessConfig }) => ([
  {
    test(filePath) {
      return /\.css$/.test(filePath) && !/\.module\.css$/.test(filePath);
    },
    use: [
      {
        loader: 'css-loader',
        options: {
          restructuring: false,
          autoprefixer: false,
        },
      },
      {
      loader: 'postcss-loader',
        options: postcssConfig,
      }
    ],
  },
  {
    test: /\.module\.css$/,
    use: [
      {
        loader: 'css-loader',
        options: {
          restructuring: false,
          modules: true,
          localIdentName: '[local]___[hash:base64:5]',
          autoprefixer: false,
        },
      }, {
        loader: 'postcss-loader',
        options: postcssConfig,
      }
    ],
  },
  {
    test(filePath) {
      return /\.less$/.test(filePath) && !/\.module\.less$/.test(filePath);
    },
    use: [
      {
        loader: 'css-loader',
        options: {
          autoprefixer: false,
        },
      },
      {
        loader: 'postcss-loader',
        options: postcssConfig,
      }, {
        loader: require.resolve('less-loader'),
        options: lessConfig,
      }
    ],
  },
  {
    test: /\.module\.less$/,
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[local]___[hash:base64:5]',
          autoprefixer: false,
        },
      },
      {
        loader: 'postcss-loader',
        options: postcssConfig,
      }, {
        loader: require.resolve('less-loader'),
        options: lessConfig,
      }
    ],
  },
  {
    test(filePath) {
      return /\.scss$/.test(filePath) && !/\.module\.scss$/.test(filePath);
    },
    use: [
      {
        loader: 'css-loader',
        options: {
          autoprefixer: false,
        },
      },
      {
        loader: 'postcss-loader',
        options: postcssConfig,
      },
      'sass-loader',
    ],
  },
  {
    test: /\.module\.scss$/,
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[local]___[hash:base64:5]',
          autoprefixer: false,
        },
      },
      {
        loader: 'postcss-loader',
        options: postcssConfig,
      },
      'sass-loader',
    ],
  }
]);
