$(function() {

  smoothScroller(1000); // smoothScroller
  workslider(); // work slider
  dataload(); // work contents loading..
  happyclient(); // testimonials
  $(window).stellar();// Parallel scrolling


  jQuery("header h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '75px' }); // Fit size

});

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

function workslider() {

    $('.thumb-unit').click(function() {
        $('.work-slider').css('left' , '-100%');
        $('.work-info').show();
    });

    $('.back').click(function() {
        $('.work-slider').css('left' , '0');
        $('.work-info').hide();
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