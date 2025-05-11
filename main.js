$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  //   animateOut: "fadeOut",
  stagePadding: 50,
  smartSpeed: 450,
  loop: true,
  margin: 10,
  nav: true,
  //   animating the items
  onTranslate: function (event) {
    $(event.target)
      .find(".owl-item .item")
      .removeClass("animate__animated animate__flipInX");
  },
  onTranslated: function (event) {
    // Only get the last visible item in the active range
    var current = $(event.target).find(".owl-item.active").last().find(".item");
    current.addClass("animate__animated animate__flipInX");
  },
  //   adding responsiveness to the slider
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
