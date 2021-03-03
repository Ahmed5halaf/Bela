$(document).ready(function(){
        // run slider boot strab 
    $('.carousel').carousel();
 
// function animtion wimdow scroll

a = 0;

$(window).scroll(function(){
    var winScroll = $(window).scrollTop();
    var navBar = $('nav');
    if(winScroll > 50) {
        navBar.addClass('nav-fixed');
  
    } else {
        navBar.removeClass('nav-fixed');
    }

    var ourStyle = $('.our-style  .title-bod');


    var offSetOur = ourStyle.offset();
    var outerOur = ourStyle.outerHeight();
    var windowHeight = $(window).innerHeight();


    if (winScroll > (offSetOur + outerOur - windowHeight - 200  )) {
        ourStyle.addClass('animated-style zoomIn');
        console.log('ok')

    }

// ///////////////////////////about count


    var winScrollAb =  $(window).scrollTop();
    
    var abCount = $('.ab-count');

    var abCountOff = abCount.offset().top;
    var abCountOuter = abCount.outerHeight();
    
  
    
    if (a == 0 && winScrollAb > (abCountOff + abCountOuter - 900 )) {
         

  
        $('.timer').countTo({
            from: 0,
            to: 1000,
            speed: 1000,
            refreshInterval: 50,
          });
        
        
        $('.timer2').countTo({
            from: 0,
            to: 5000,
            speed: 3000,
            refreshInterval: 50,
          });
        
        
        $('.timer3').countTo({
            from: 0,
            to: 2000,
            speed: 1500,
            refreshInterval: 50,
          });
        
        
        $('.timer4').countTo({
            from: 0,
            to: 1800,
            speed: 1800,
            refreshInterval: 50,
        });
        
        
        a = 1;
    } 

});

// dorb dowen slide toggle
$('.bars').click(function(){
    $('.ul-parent').slideToggle()
});



$('.ul-parent li.active-list > a').click(function() {
 
    $(this).parent().siblings().find('.ul-chiled').stop(true,false,true).slideUp(400);

    $(this).parent().children('.ul-chiled').stop(true,false,true).slideToggle(400);

})



// fillter shufle 
$('.ul-menu li a').click(function(e) {
    var aValue = $(this).attr('data-fillter');
    e.preventDefault();

     if (aValue == 'starters') {

        $('.content-item').show('1000');
  } else {
        $('.content-item').not('.' +aValue).hide('200');
        $('.content-item').filter('.' +aValue).show('200')
  }
});

// owl crousel 
$('.dishes-day .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,   
            loop:false
        }
    }
})
// owl crousel 

$('.owl-carousel.cus-slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
})
$('.up').click(function(){
    $('body , html').animate({scrollTop: 0} , 2500)
});

});



