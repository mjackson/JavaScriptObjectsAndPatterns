var fs = require('fs');
var path = require('path');
var mustache = require('mustache');
var strata = require('strata');
var redirect = strata.redirect;

function makePath() {
  var args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

strata.use(strata.commonLogger);
strata.use(strata.contentLength);
strata.use(strata.contentType, 'text/html');
strata.use(strata.file, makePath('public'));

var layout = fs.readFileSync(makePath('public', 'layout.mustache'), 'utf8');

strata.get('/:number', function (env, callback) {
  var number = env.route.number;
  var code = fs.readFileSync(makePath('public', number + '.js'), 'utf8');
  var content = mustache.render(layout, { code: code });
  callback(200, {}, content);
});

strata.get('/', function (env, callback) {
  redirect(env, callback, '/01');
});

strata.run({ port: 3000 });
