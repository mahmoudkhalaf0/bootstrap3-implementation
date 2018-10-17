/*global console, window,$*/
$(document).ready(function(){
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
    if(sc > 90){
        $(".navbar-inverse").addClass("scroll");
    }
    else{
        $(".navbar-inverse").removeClass("scroll");
    }
    if(sc > 1900 )
        {
            $('.timer').countTo({speed: 3000});
            $(window).off('scroll')
        }
    /************scrolltop********** */
    if(sc < 500){
        $('.scrtop').hide();
    }
    else{
        $('.scrtop').show();
    }
    $('.scrtop i').click(function(){
        $('html,body').animate({scrollTop:0},2000)
    });
    });
/**************************************************************/
    $(".buttons button").click(function(){
        $(this).addClass("active").siblings().removeClass('active');
        var cssfilter = $(this).attr('id');
        if(cssfilter === "showall") {
            $(".images > div").fadeIn(1000);
        } else {
            $(".images > div").fadeOut();
            $(".images").contents().filter("." + cssfilter).fadeIn(750);
        }
    });
    $(".more").click(function(){
        $(".vmore").css({display:'block'})
    });

    /*************************************************** */
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    /*****************************/
    $('.comp ul li').click(function(){
        var p = $(this).data('role');
        $(this).addClass('active').siblings().removeClass('active');
        $('.contents > div').hide();
        $('.contents').contents().filter('#' + p).fadeIn();
    });
    /************************************clickable link**** */
    $('.collapse .navbar-nav li').click(function(){
        $(this).addClass('active-btn').siblings().removeClass('active-btn');
    });
  /***************************************/
  $('.popup').magnificPopup({type:'iframe'});
  /*******************************************/
  $('.slick').slick(
      {
        arrows :false
    });
/*********************************************/
   
    $("html").niceScroll({
   
        cursorcolor: '#7cb62f',
        cursorwidth:'8',
        height:'60',
        cursorborderradius:'none',
        cursorborder:'none',
        zindex:'10'
        
    });
    /***********/
   
});
$(window).on('load', function(){
    $('body').css({'overflow':'auto'})
    $('.sk-folding-cube').fadeOut(2000, function(){
        $('.loading h2').fadeIn(0 ,function(){
            $('.loading h2').fadeOut(1500,function(){
                $('.loading').fadeOut(1500);
            });
        });
    });
});