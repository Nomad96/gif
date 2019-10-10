$(document).ready(function (e) {

    $(document).on('scroll', function (e) {

        var scrollTop;

        if ($(this).scrollTop() > 0) {
            $('nav').css({
                'box-shadow': '0 1px 6px #c4c4c4'
            });
        } else {
            $('nav').css({
                'box-shadow': 'none'
            });
        }
        /*
        scrollTop = $(document).scrollTop();
        $('.header_div').css({
            'opacity': 1-Math.abs(scrollTop/600)
        })*/

    });//scroll


    $('nav, .header_div ').on('click', 'a', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        console.log(href);

        $('body, html').animate({
            scrollTop: $(href).offset().top
        }, 500);
        if ($(window).width() < 991) {
            $('ul.menu').slideUp();
        }
    });//click


    $(window).on('mousemove', function (e) {
        var top = (e.pageY - ($('.about').offset().top + $('.about').height() / 2));
        var left = (e.pageX - ($('.about').offset().left + $('.about').width() / 2));
        $('.img_1').css({
            'transform': 'translate(' + left / 400 + 'px,' + top / 400 + 'px)'
        });
        $('.img_2').css({
            'transform': 'translate(' + -left / 400 + 'px,' + -top / 400 + 'px)'
        });

    });//mousemove


    // function initMap() {
    //     // The location of Uluru
    //     var uluru = {lat: 40.206192, lng: 44.521373};
    //     // The map, centered at Uluru
    //     var map = new google.maps.Map(
    //         document.getElementById('map'), {
    //             zoom: 18,
    //             scrollwheel: false,
    //             center: uluru
    //         });
    //     // The marker, positioned at Uluru
    //     var marker = new google.maps.Marker({
    //         position: uluru,
    //         map: map
    //     });
    // }
    //
    // initMap();


    var map = L.map('map', {
        center: [40.206082, 44.521926],
        zoom: 18,
        trackResize: true,
        dragging: false
    });

    let icon = L.icon({
        iconUrl: 'img/marker.png',
        iconSize: [30, 48],
        iconAnchor: [10, 33],
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([40.206082, 44.521926], {icon: icon}).addTo(map)
        .openPopup();

    var k;
    if ($(document).width() < 991) {
        k = 1;
    } else {
        k = 3;
    }

    $('.service-slick').slick({
        slidesToShow: k,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        arrows: true
    });

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 9000
        },
        effect: 'fade'

    });


    $('div.button').on('click', function (e) {
        e.preventDefault();
        $('ul.menu').slideToggle();
    });


    $('.socials').on('click', function (e) {
        // e.preventDefault()
        $(this).toggleClass('active');
    });//click

    // var swiper = new Swiper('.swiper-container');


});//ready