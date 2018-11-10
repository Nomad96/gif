$(document).ready(function (e) {

    $(document).on('scroll', function (e) {

        var scrollTop;

        if($(this).scrollTop()>0){
            $('nav').css({
                'box-shadow':'0 1px 6px #c4c4c4'
            })
        }else{
            $('nav').css({
                'box-shadow':'none'
            })
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
                scrollTop:$(href).offset().top-55
            }, 500);
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


    /*$('input[type="checkbox"]').on('click', function (e) {


        var all = $('input[type="checkbox"]').length, falses = 0;

        $.each($('input[type="checkbox"]'), function (key, val) {

                console.log(key, val.name)

            if(val.checked == false){
                falses ++;
                $('div[data-category="'+ val.name +'"]').css({display:"none"})
            }else {
                $('div[data-category="'+ val.name +'"]').css({display:"block"})
            }

        }) ;

        if(all == falses){
            $('.work').css({display:"block"})
        }
    });*/


});//ready