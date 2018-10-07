


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

    var offset1 = $('.section1').offset().top;
    var offset2 = $('.section2').offset().top;
    var offset3 = $('.section3').offset().top;

    $(document).on('scroll',function(){
        var iScrollTop = $(document).scrollTop();

        var activeLi;

        var iScrollTopWithAdjustment = iScrollTop + 100;
        
        if(iScrollTopWithAdjustment<offset2){
            activeLi = $('.pure-menu-list>li:nth-child(1)');
        }

        if(iScrollTopWithAdjustment>=offset2 && iScrollTopWithAdjustment<offset3){
            activeLi = $('.pure-menu-list>li:nth-child(2)');
        }

        if(iScrollTopWithAdjustment>=offset3){
            activeLi = $('.pure-menu-list>li:nth-child(3)');
        }

        activeLi.addClass('active');
        $('.pure-menu-list>li').not(activeLi).removeClass('active');
    });

    $('a[data-to]').on('click',function(e){
        e.preventDefault();

        var sTarget = $(this).data('to');
        var targetOffsetTop = $(sTarget).offset().top;

        $('html,body').animate({scrollTop:targetOffsetTop},1000)
    });

    $('h1.animated').addClass('invisible');
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
















