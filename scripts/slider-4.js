jQuery(document).ready(function ($) {

setInterval(function () {
moveRight();
}, 5000);

var slideCount = $('#slider-4 ul li').length;
var slideWidth = $('#slider-4 ul li').width();
var slideHeight = $('#slider-4 ul li').height();
var sliderUlWidth = slideCount * slideWidth;

$('#slider-4').css({ width: slideWidth, height: slideHeight });

$('#slider-4 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

$('#slider-4 ul li:last-child').prependTo('#slider-4 ul');

function moveLeft() {
$('#slider-4 ul').animate({
    left: + slideWidth
}, 500, function () {
    $('#slider-4 ul li:last-child').prependTo('#slider-4 ul');
    $('#slider-4 ul').css('left', '');
});
};

function moveRight() {
$('#slider-4 ul').animate({
    left: - slideWidth
}, 500, function () {
    $('#slider-4 ul li:first-child').appendTo('#slider-4 ul');
    $('#slider-4 ul').css('left', '');
});
};

$('a.control_prev').click(function () {
moveLeft();
});

$('a.control_next').click(function () {
moveRight();
});

});
