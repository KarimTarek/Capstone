$(function() {

  var colors = ['red', 'blue', 'green', 'grey'],
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