$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var blurValue = Math.min(10, scroll / 10); // Adjust blur intensity as needed
    var translateYValue = Math.min(200, scroll); // Adjust translateY amount as needed

    $('.background-image').css({
      'filter': 'blur(' + blurValue + 'px)'
    });

    $('.content').css({
      'transform': 'translateY(' + translateYValue + 'px)'
    });
  });
});