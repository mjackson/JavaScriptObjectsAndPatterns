function Person(name, title) {
  this.name = name;
  this.title = title;
}

Person.prototype.sayHi = function () {
  log('Hello, my name is ' + this.name + ' the ' + this.title + '!');
};

function Webmaster(name) {
  Person.call(this, name, 'webmaster');
}

Webmaster.prototype = Object.create(Person.prototype);

function FounderOfTwitter(name) {
  Person.call(this, name, 'founder of Twitter');
}

FounderOfTwitter.prototype = Object.create(Person.prototype);

var Michael = new Webmaster('Michael');
var Jack = new FounderOfTwitter('Jack');

Michael.sayHi();
Jack.sayHi();
