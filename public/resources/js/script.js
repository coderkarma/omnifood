

$(document).ready(function(){

    /* FOR STICKY NAVIGATION */
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else {
           $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    /* SCROLL ON THE BUTTONS */

    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });


    /* NAVIGATION SCROLL */

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });



        /* ANIMATION ON SCROLL */

     $('.js--wp-1').waypoint(function(){
        $('.js--wp-1').addClass('animated fadeIn');
            },{
                offset: '50%'
            });

        $('.js--wp-2').waypoint(function () {
            $('.js--wp-2').addClass('animated fadeInUp');
        }, {
                offset: '50%'
            });

        $('.js--wp-3').waypoint(function () {
            $('.js--wp-3').addClass('animated fadeIn');
        }, {
                offset: '50%'
            });


        $('.js--wp-4').waypoint(function () {
            $('.js--wp-4').addClass('animated pulse');
        }, {
                offset: '50%'
     });



    /* MOBILE NAVIGATION  */

    $('js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--icon-nav i');
    
    nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

});

  /*   MAPS */
    var map = new GMaps({
        div: '.map',
        lat: 38.745317,
        lng: - 9.05,
        zoom: 12
    });

    map.addMarker({
        lat: 38.745317,
        lng:-9.195614,

        title: 'Lisbon',
         infoWindow: {
                content: '<p>Our Lisbon HQ</p>'
            }   
     });


});

