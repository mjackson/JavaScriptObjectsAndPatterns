function Person(name, title) {
  this.name = name;
  this.title = title;
}

Person.prototype.sayHi = function () {
  log('Hello, my name is ' + this.name + ' the ' + this.title + '!');
};

var Michael = new Person('Michael', 'webmaster');
var Jack = new Person('Jack', 'founder of Twitter');

Michael.sayHi();
Jack.sayHi();
