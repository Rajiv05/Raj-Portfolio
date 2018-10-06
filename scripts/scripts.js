


$(function() {

    // Open and close nav on mobile ------------------------------
    $('.bars').on('click', function(e) {

        var navData = $('.navigation').data('nav');

        e.stopPropagation();

        if (navData == 'close') {
            $('.navigation').addClass('nav-open')
                .data('nav', 'open');

            $('.bars>i').first().removeClass('fas fa-bars')
                .addClass('fas fa-times');

        } else {
            $('.navigation').removeClass('nav-open')
                .data('nav', 'close');
            $('.bars>i').removeClass('fas fa-times')
                .addClass('fas fa-bars');

        }
    });
});

// var $btns = $('.btn').click(function() {
//   if (this.id == 'all') {
//     $('#parent > div ').fadeIn(450);
//   } else {
//     var $el = $('.' + this.id).fadeIn(450);
//     $('#parent > div ').not($el).hide();
//   }
//   $btns.removeClass('active2');
//   $(this).addClass('active2');
// })

var $boxs = $("#parent > .box");
var $btns = $(".btn").on("click", function() {
  
  var active = 
    $btns.removeClass("active2")
      .filter(this)
      .addClass("active2")
      .data("filter");
  
  $boxs
    .hide()
    .filter( "." + active )
    .fadeIn(1);

});
















