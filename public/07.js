function sayHi() {
  log('Hello, my name is ' + this.name + ' the ' + this.title + '!');
}

var Michael = {
  name: 'Michael',
  title: 'webmaster'
};

var Joe = {
  name: 'Joe',
  title: 'plumber'
};

sayHi.call(Michael);
sayHi.call(Joe);
