$(document).ready(function () {
    function ScrollContentEffect(ScrollEffectNameOn, ScrollEffectNameOff) {
        $(window).scroll(function () {
            var WindowScrollTop = $(window).scrollTop();
            var ScrollContentLength = $('.scroll').length;
            for (let index = 0; index < ScrollContentLength; index++) {
                var ContentPositionTop = $('.scroll').eq(index).offset().top;
                if (WindowScrollTop >= ContentPositionTop) {
                    $('.scroll').eq(index).addClass(ScrollEffectNameOn).removeClass(ScrollEffectNameOff);
                } else {
                    $('.scroll').eq(index).addClass(ScrollEffectNameOff).removeClass(ScrollEffectNameOn);
                }
            }
        });
    }
    ScrollContentEffect('scroll-fadein','scroll-fadeout')
});