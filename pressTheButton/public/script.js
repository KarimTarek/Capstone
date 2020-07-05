$(function() {

  var colors = ['red', 'blue', 'green', 'black'],
    color;

  $('#target').click(function() {
    var randColor;
    do {
      randColor = colors[Math.floor(Math.random() * colors.length)];
    } while (color == randColor);
    $('body').css('background-color', randColor);
    color = randColor;
  });
});