var Michael = {
  name: 'Michael',
  title: 'webmaster',
  sayHi: function () {
    log('Hello, my name is ' + this.name + ' the ' + this.title + '!');
  }
};

var Joe = {
  name: 'Joe',
  title: 'plumber',
  sayHi: function () {
    log('Hello, my name is ' + this.name + ' the ' + this.title + '!');
  }
};

Michael.sayHi();
Joe.sayHi();
