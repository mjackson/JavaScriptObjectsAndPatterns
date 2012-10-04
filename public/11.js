Function.prototype.extend = function (properties) {
  var parent = this;
  var child = function () {
    if (typeof this.initialize === 'function') {
      var args = Array.prototype.slice.call(arguments, 0);
      this.initialize.apply(this, args);
    }
  };

  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;

  for (var prop in properties) {
    child.prototype[prop] = properties[prop];
  }

  return child;
};

var Person = Object.extend({
  initialize: function (name, title) {
    this.name = name;
    this.title = title;
  },
  sayHi: function () {
    log('Hello, my name is ' + this.name + ' the ' + this.title + '!');
  }
});

var Webmaster = Person.extend({
  initialize: function (name) {
    Person.prototype.initialize.call(this, name, 'webmaster');
  }
});

var FounderOfTwitter = Person.extend({
  initialize: function (name) {
    Person.prototype.initialize.call(this, name, 'founder of Twitter');
  }
});

var Michael = new Webmaster('Michael');
var Jack = new FounderOfTwitter('Jack');

Michael.sayHi();
Jack.sayHi();
