const webpackConfig = (config, { dev }) => {
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'css-loader',
          options: {
            minimize: !dev
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    }
  )
  return config
}

module.exports = webpackConfig