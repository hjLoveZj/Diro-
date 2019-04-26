(function () {
    // 鼠标悬停事件
    $('.title li').mouseenter(function () {
        $(this).find('a').css('borderBottom', '2px solid #000').end().siblings().find('a').css('borderBottom', '');
        var index = $(this).index();
        $('.title_content > div').eq(index).css('display', 'block').siblings().css('display', 'none');
    });
    // 功能1: 点击右按钮，轮播图下一张
    var index = 0;
    function rightPlay() {
        $('.controls a').eq(index).removeClass('active');
        index++;
        var lis = $('.slider li');
        if (index == lis.length) {
            index = 0;
        }
        $('.slider li').eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
        $('.controls a').eq(index).addClass('active');
    }
    $('.arrow .arrow-right').click(function () {
        rightPlay();
    });
    // 功能2: 点击左按钮，轮播图上一张
    $('.arrow .arrow-left').click(function () {
        $('.controls a').eq(index).removeClass('active');
        index--;
        var lis = $('.slider li');
        if (index < 0) {
            index = lis.length - 1;
        }
        $('.slider li').eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
        $('.controls a').eq(index).addClass('active');
    });
    // 功能3：小点点轮播
    $('.controls a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        index = $(this).index();
        $('.slider li').eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    });
    // 功能4：自动轮播
    var flag;
    function autoPlay() {
        flag = setInterval(function () {
            rightPlay();
        }, 2000);
    };
    autoPlay();
    $('.slider').mouseenter(function () {
        clearInterval(flag);
    });
    $('.slider').mouseleave(function () {
        // clearInterval(flag);
        autoPlay();
    });

})();
