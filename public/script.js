$(function () {
  $('pre').addClass('sh_javascript');
  sh_highlightDocument();

  var $example = $('pre.example');
  var $button = $('<button>').addClass('run').text('Run this example').insertAfter($example);

  var $messages;

  log = function (message, className) {
    className = className || 'log';
    $messages.append('<li class="' + className + '">' + message + '</li>');
  };

  assert = function (condition, message) {
    log(message, condition ? 'pass' : 'fail');
  };

  $button.click(function (e) {
    var $output = $('<h2>Output:</h2>').replaceAll($button);
    $messages = $('<ul>').addClass('messages').insertAfter($output);
    eval($example.text());
  });
});
