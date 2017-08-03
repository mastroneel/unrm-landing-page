jQuery(document).ready(function ($) {

setInterval(function () {
moveRight();
}, 5000);

var slideCount = $('#slider-3 ul li').length;
var slideWidth = $('#slider-3 ul li').width();
var slideHeight = $('#slider-3 ul li').height();
var sliderUlWidth = slideCount * slideWidth;

$('#slider-3').css({ width: slideWidth, height: slideHeight });

$('#slider-3 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

$('#slider-3 ul li:last-child').prependTo('#slider-3 ul');

function moveLeft() {
$('#slider-3 ul').animate({
    left: + slideWidth
}, 500, function () {
    $('#slider-3 ul li:last-child').prependTo('#slider-3 ul');
    $('#slider-3 ul').css('left', '');
});
};

function moveRight() {
$('#slider-3 ul').animate({
    left: - slideWidth
}, 500, function () {
    $('#slider-3 ul li:first-child').appendTo('#slider-3 ul');
    $('#slider-3 ul').css('left', '');
});
};

$('a.control_prev').click(function () {
moveLeft();
});

$('a.control_next').click(function () {
moveRight();
});

});
