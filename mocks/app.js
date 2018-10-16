var express = require('express');
var bodyParser = require('body-parser');
var rd = require('rd');

var app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const allowCrossDomain = function (req, res, next) {
  // 自定义中间件，设置跨域需要的响应头。
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Origin', '*');
  next();
}

// 运用跨域的中间件
app.use(allowCrossDomain);

app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});

/**
 * 加载路由配置
 */
rd.eachFileFilterSync('./routes', /\.js$/, function (f, s) {
  console.log(f);
  var mod = require(f);
  app.use(mod);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

process.on('uncaughtException', function (err) {
  console.log('exception catch ...');
  console.log(err.stack);
});

const server = app.listen(8081, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});