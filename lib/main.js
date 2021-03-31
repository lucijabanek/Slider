"use strict";

var slideWidth1 = $(".box1 img").width();
var slideWidth2 = $(".box2 img").width();
var Left1 = function Left1() {
  $(".box1").animate({
    left: +slideWidth1
  }, 200, function () {
    $(".box1 img:last-child").prependTo(".box1");
  });
};
var Right1 = function Right1() {
  $(".box1").animate({
    left: -slideWidth1
  }, 200, function () {
    $(".box1 img:first-child").appendTo(".box1");
  });
};

var Left2 = function Left2() {
  $(".box2").animate({
    left: +slideWidth2
  }, 200, function () {
    $(".box2 img:last-child").prependTo(".box2");
  });
};

var Right2 = function Right2() {
  $(".box2").animate({
    left: -slideWidth2
  }, 200, function () {
    $(".box2 img:first-child").appendTo(".box2");
  });
};

//arrows
$(".previous").on("click", function (e) {
  $(".picture:first-child").toggleClass("fadeOut");
  $(".picture").not(".picture:first-child").removeClass("fadeOut");
  $(".picture").removeClass("fadeIn");
  Right1();
  Right2();
});

$(".next").on("click", function (e) {
  $(".picture:last-child").toggleClass("fadeIn");
  $(".picture").not(".picture:last-child").removeClass("fadeIn");
  $(".picture").removeClass("fadeOut");
  Left1();
  Left2();
});