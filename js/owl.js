$(document).ready(function () {
  owl_one = $(".owl-carousel");

  owl_one.owlCarousel({
    loop: true,
    items: 1,
  });

  $(".arrow.prev").on("click", function () {
    owl_one.trigger("prev.owl.carousel");
  });

  $(".arrow.next").on("click", function () {
    owl_one.trigger("next.owl.carousel");
  });
});
