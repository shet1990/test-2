$(function() {

    /* Анимация гамбургера */
    $('.my__hamburger').on('click', function(){
        //Появление
        if(!$(this).hasClass('is-active')){
            $(this).addClass('is-active');
            $('.head__nav').slideDown();
        } else {
            //Скрытие
            $(this).removeClass('is-active');
            $('.head__nav').slideUp();
        }
    });
    /* Конец */

    /* Смена режимов */
    $('#switch').on('change', function () {
        $('body').toggleClass('dark__body');
    });
    /* Конец */

    /* Выпадение второго уровня меню */
    $('.menu-item-has-children').on('click', function () {
        $(this).find('.sub-menu').slideToggle();
    });
    /* Конец */

    /* Модалка авторизации и регистрации */
    $('.head__btn__login').fancybox({
        closeBtn: false,
        padding: 0,
        openEffect	: 'fade',
        closeEffect	: 'fade'
    });
    $('.modal__auth__link').on('click', function (e) {
        e.preventDefault();
       var href = $(this).attr('href');
       $(this).closest('.modal__auth__wrap').removeClass('is-active');
       $(href).addClass('is-active');
    });
    /* Конец */

    /* Форма поиска в header */
    $('.head__btn__search .fa-search').on('click', function () {
        $('.search__wrap').addClass('is-active');
    });
    $('.search__wrap .fa-search').on('click', function () {
        $('.search__wrap').removeClass('is-active');
    });
    $('.search__input').on('keyup', function () {
        var strQuery = $(this).val();
        if(strQuery.length >= 3){
            //тут Ajax
            $('.search__rezult').addClass('is-active');
        } else {
            $('.search__rezult').removeClass('is-active');
        }
    })
    /* Конец */

    /* Скролл сайдбара */
    var sidebarBlock = document.querySelector('.scroll__sidebar');
    if(sidebarBlock && $(window).width() > 767){
        var b = null, P = 0;
        window.addEventListener('scroll', Ascroll, false);
        document.body.addEventListener('scroll', Ascroll, false);
        function Ascroll() {
            if (b == null) {
                var Sa = getComputedStyle(sidebarBlock, ''), s = '';
                for (var i = 0; i < Sa.length; i++) {
                    if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                    }
                }
                b = document.createElement('div');
                b.style.cssText = s + ' box-sizing: border-box; width: ' + sidebarBlock.offsetWidth + 'px;';
                sidebarBlock.insertBefore(b, sidebarBlock.firstChild);
                var l = sidebarBlock.childNodes.length;
                for (var i = 1; i < l; i++) {
                    b.appendChild(sidebarBlock.childNodes[1]);
                }
                sidebarBlock.style.height = b.getBoundingClientRect().height + 'px';
                sidebarBlock.style.padding = '0';
                sidebarBlock.style.border = '0';
            }
            var Ra = sidebarBlock.getBoundingClientRect(),
                R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.main__wrap').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
            if ((Ra.top - P) <= 0) {
                if ((Ra.top - P) <= R) {
                    b.className = 'scroll__stop';
                    b.style.top = - R +'px';
                } else {
                    b.className = 'scroll__sticky';
                    b.style.top = P + 'px';
                }
            } else {
                b.className = '';
                b.style.top = '';
            }
            window.addEventListener('resize', function() {
                sidebarBlock.children[0].style.width = getComputedStyle(sidebarBlock, '').width
            }, false);
        }
    }
    /* Конец */

    /* Слайдер на главной */
    if($('div').hasClass('slick__top')){
        $('.slick__top').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            speed: 1000,
            appendArrows: $('.slider__nav'),
            prevArrow: '<div class="slider__btn slider__prev flex"><span class="fas fa-angle-left"></span></div>',
            nextArrow: '<div class="slider__btn slider__next flex"><span class="fas fa-angle-right"></span></div>',
        });
    }
    /* Конец */

    /* Слайдер в сайдбаре */
    if($('div').hasClass('slick__sidebar')){
        $('.slick__sidebar').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            appendArrows: $('.sidebar__slider__nav'),
            prevArrow: '<div class="slider__btn slider__prev flex"><span class="fas fa-angle-left"></span></div>',
            nextArrow: '<div class="slider__btn slider__next flex"><span class="fas fa-angle-right"></span></div>',
        });
    }
    /* Конец */

    /* Слайдер в секции */
    if($('div').hasClass('slick__sect')){
        $('.slick__sect').each( function ( index ) {
            $(this).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
                speed: 1000,
                appendArrows: $('.sect__slider__nav-' + (index + 1)),
                prevArrow: '<div class="slider__btn slider__prev flex"><span class="fas fa-angle-left"></span></div>',
                nextArrow: '<div class="slider__btn slider__next flex"><span class="fas fa-angle-right"></span></div>',
            });
        });



    }
    /* Конец */

});
