const express = require('express');
const path = require('path');
const fs = require('fs');

let createApp = function() {
  const app = express();
  return app;
};

let setupStaticRoutes = function(app) {
  app.use(express.static(path.join(__dirname, '../', 'client')));
  return app;
};

let setupAppRoutes = function(app) {

  app.get('/webseriesDetails', (req, res) => {

    fs.readFile('./server/models/webSeries.json','utf8', (err, fileData) => {
      if(!err)
      res.send(JSON.parse(fileData))
      else
      console.log('error',err)
    })
  })

  return app;
};

let setupRESTRoutes = function(app) {

  app.use(function (req, res) {
    let err = new Error('resource not found');
    err.status = 404;
    return res.status(err.status).json({
      error: err.message
    });
  });

  app.use(function (err, req, res) {
    console.error('internal error in watch processor: ', err);
    return res.status(err.status || 500).json({
      error: err.message
    });
  });

  return app;
};

let setupMiddlewares = function(app) {
  const bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  return app;
};

let setupWebpack = function(app) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../webpack.config.js');
  const webpackCompiler = webpack(webpackConfig);
  app.use(webpackHotMiddleware(webpackCompiler));
  app.use(webpackDevMiddleware(webpackCompiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
      stats: {colors: true}
  }));
  return app;
};



module.exports = {
  createApp,
  setupStaticRoutes,
  setupAppRoutes,
  setupRESTRoutes,
  setupMiddlewares,
  setupWebpack
};
