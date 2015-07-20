module.exports = {
    context: __dirname,
    entry: {
        index:  "./frontend/javascripts/index.js"
    },
    output: {
        path: "./app/views/ideas/",
        filename: "_react.js",
    },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      }
    ]
  }
};
