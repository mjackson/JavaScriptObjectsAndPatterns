var fs = require('fs');
var path = require('path');
var mustache = require('mustache');
var strata = require('strata');
var redirect = strata.redirect;

function makePath() {
  var args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function leftPad(value, length, padding) {
  value = String(value);
  padding = padding || '0';

  while (value.length < length) {
    value = padding + value;
  }

  return value;
}

strata.use(strata.commonLogger);
strata.use(strata.contentLength);
strata.use(strata.contentType, 'text/html');
strata.use(strata.file, makePath('public'));

var layout = fs.readFileSync(makePath('public', 'layout.mustache'), 'utf8');

strata.get('/:number', function (env, callback) {
  var number = env.route.number;
  var file = makePath('public', number + '.js');

  fs.exists(file, function (exists) {
    if (exists) {
      var code = fs.readFileSync(file, 'utf8');
      var nextNumber = leftPad(parseInt(number, 10) + 1, 2);
      var nextFile = makePath('public', nextNumber + '.js');
      var next = fs.existsSync(nextFile) && JSON.stringify('/' + nextNumber);
      var content = mustache.render(layout, { code: code, next: next });
      callback(200, {}, content);
    } else {
      strata.utils.notFound(env, callback);
    }
  });
});

strata.get('/', function (env, callback) {
  redirect(env, callback, '/01');
});

strata.run({ port: 3000 });
