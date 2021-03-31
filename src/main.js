let slideWidth1 = $(".box1 img").width();
let slideWidth2 = $(".box2 img").width();
let Left1 = () => {
  $(".box1").animate(
    {
      left: +slideWidth1,
    },
    200,
    () => {
      $(".box1 img:last-child").prependTo(".box1");
    }
  );
};
let Right1 = () => {
  $(".box1").animate(
    {
      left: -slideWidth1,
    },
    200,
    () => {
      $(".box1 img:first-child").appendTo(".box1");
    }
  );
};

let Left2 = () => {
  $(".box2").animate(
    {
      left: +slideWidth2,
    },
    200,
    () => {
      $(".box2 img:last-child").prependTo(".box2");
    }
  );
};

let Right2 = () => {
  $(".box2").animate(
    {
      left: -slideWidth2,
    },
    200,
    () => {
      $(".box2 img:first-child").appendTo(".box2");
    }
  );
};

//arrows
$(".previous").on("click", (e) => {
  $(".picture:first-child").toggleClass("fadeOut");
  $(".picture").not(".picture:first-child").removeClass("fadeOut");
  $(".picture").removeClass("fadeIn");
  Right1();
  Right2();
});

$(".next").on("click", (e) => {
  $(".picture:last-child").toggleClass("fadeIn");
  $(".picture").not(".picture:last-child").removeClass("fadeIn");
  $(".picture").removeClass("fadeOut");
  Left1();
  Left2();
});
