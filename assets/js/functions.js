$(function() {

  smoothScroller(1000); // smoothScroller

  crosmenu();

  dataload(); // work contents loading..

  happyclient(); // testimonials

  $(window).stellar();// Parallel scrolling

  blowme();

  winSpot();

  /*jQuery("header h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '75px' }); // Fit size*/

});

function winSpot() {

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();


   /* if ( wScroll > $('.experience').offset().top - ($(window).height() / 1.5 ) ) {

      $('.title-animateLeft').each(function(i){

        setTimeout(function(){

          $('.title-animateLeft').eq(i).addClass('title-effect');

        }, 100 * (i+1) );

      });

      $('.title-animateRight').each(function(i){

        setTimeout(function(){

          $('.title-animateRight').eq(i).addClass('title-effect');

        }, 100 * (i+1) );
      });

    }

    if ( wScroll > $('.education').offset().top - ($(window).height() / 1.8 ) ) {

      $('.title-animateLeftt').each(function(i){

        setTimeout(function(){

          $('.title-animateLeftt').eq(i).addClass('title-effect');

        }, 100 * (i+1) );

      });

      $('.title-animateRightt').each(function(i){

        setTimeout(function(){

          $('.title-animateRightt').eq(i).addClass('title-effect');

        }, 100 * (i+1) );

      });

    }
*/
    if ( wScroll > $('.service-wrapper').offset().top - ($(window).height() / 1.3 ) ) {

      $('.fa-icon').addClass('fa-effect');

      $('.service-animate').addClass('service-effect');

    }

    if ( wScroll > $('.codepen').offset().top - ($(window).height() / 2 ) ) {

      $('.penspot').addClass('pengotchya');

    }

    if ( wScroll > $('.contact-wrapper').offset().top - ($(window).height() / 1.5 ) ) {

      $('.contact-animate').each(function(i){

        setTimeout(function(){

         $('.contact-animate').addClass('contact-effect');

         $('.contact-zoomin').addClass('contact-zoomout');

        }, 100 * (i+1) );

      });

      

    }

  });

} 


function crosmenu() {

    $('.button-wrap').on('click', function(){

        if (!$('.button-wrap span').hasClass("rotatespan")) {

            $('.button-wrap span').addClass('rotatespan');

            $('.menu-background').addClass('menu-show');

            $(this).addClass('button-marg');
        }

        else {

            clearBucket();
        }

    });

    $('.point-break').on('click', function(){

      clearBucket();

    });

}

function clearBucket() {

    $('.menu-background').removeClass('menu-show');

    $('.button-wrap span').removeClass('rotatespan');

    $('.button-wrap').removeClass('button-marg');

}


function blowme() {

  $('.splash').on('click', function(){

    $('.about-buwah').addClass('splash2');

      $('.goback').on('click', function(){

        $('.about-buwah').removeClass('splash2', 1);

      });

  });

}

// smoothScroll to the sections
function smoothScroller(duration) {
    $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, duration);
    }

    });
}

function shuffleJs() {
    var filterizd = $('.filtr-container').filterizr({
         //options object
    });
}

function dataload() {

    $.ajaxSetup({ cache : true });

    $('.thumb-unit').click(function() {

        var $this     = $(this),
            spinner   = '<div class="loader"> Loading... </div>'
            newTitle  = $this.find('span').text()
            newFolder = $this.data('folder'),
            newHtml   = '/work/'+ newFolder +'.html'

            $('.content-load').html(spinner).load(newHtml);
            $('.work-title').text(newTitle);

    });
}

function happyclient() {

    $('.client-unit, .client').first().addClass('active-client');
    $('.mob-controller').first().addClass('active-client');


    $('.client, .mob-controller').click(function() {

        var $this = $(this),
            $sibilings = $this.parent().children(),
            position = $sibilings.index($this);

        $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');

        $sibilings.removeClass('active-client');
        $this.addClass('active-client');
    });

    $('.next, .prev').click(function() {

    var $this = $(this),
        curActiveClient = $('.control-auto').find('.active-client'),
        position = $('.control-auto').children().index(curActiveClient),
        clientNum = $('.client-unit').length;

      if($this.hasClass('next')) {

        if(position < clientNum -1){
          $('.active-client').removeClass('active-client').next().addClass('active-client');
        } else {
          $('.client-unit').removeClass('active-client').first().addClass('active-client');
          $('.client').removeClass('active-client').first().addClass('active-client');
        }

     } else {

        if (position === 0) {
          $('.client-unit').removeClass('active-client').last().addClass('active-client');
          $('.client').removeClass('active-client').last().addClass('active-client');
        } else {
          $('.active-client').removeClass('active-client').prev().addClass('active-client');
        }

      }


  });

}


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );