//탭틀고정/이동
$(window).scroll(function (event) {
    var nowScroll = 0,
        tabMenuOffset = $('.moc-header').offset().top;

    var offsetHeight = $('.moc-header .inner').outerHeight(true);
    var scrollPos = parseInt($(document).scrollTop() + offsetHeight);
    var fixPos = parseInt(tabMenuOffset);

    //틀고정
    if ($(window).scrollTop() > fixPos) {
        nowScroll = $(window).scrollTop();
        $('.moc-header .inner').addClass('fixed');

    } else if ($(window).scrollTop() <= fixPos) {
        nowScroll = $(window).scrollTop();
        $('.moc-header .inner').removeClass('fixed');
    }

    //스크롤 이동
    $('.moc-header li').each(function () {
        var currLink = $(this);
        var currLinkCnt = $(this).attr('data-url');
        var addElement = $('.' + currLinkCnt);

        if (addElement.offset().top <= scrollPos) {
            $('.moc-header li').removeClass('on');
            currLink.addClass('on');
        }
        // else if ($(window).scrollTop() < scrollPos) {
            // currLink.removeClass('on');
        // }
    });
});

$(function () {
    //탭이동
    tabMenuHeight = $('.moc-header .inner').outerHeight(true),
        $('.moc-header').css({ 'height': tabMenuHeight + 'px' });

    var tabMenuList = $('.moc-header li');
    tabMenuList.bind('click scroll', function (e) {
        e.preventDefault();

        tabMenuList.removeClass('on');
        $(this).addClass('on');

        var $activeTab = $('.moc-header'.concat(" li.on"));
        var target = $activeTab.attr('data-url');
        var targetCnt = $('.' + target);
        var offsetHeight = $('.moc-header .inner').outerHeight();

        if ($('.moc-header').hasClass('fixed')) {
            setTimeout(function () {
                window.scrollTo(0, targetCnt.offset().top - offsetHeight + 4);
            }, 0);
        } else {
            setTimeout(function () {
                window.scrollTo(0, targetCnt.offset().top - offsetHeight + 4);
            }, 0);
        }
        return false;
    });
});


$(document).ready(function(){
    var cursor = $(".cursor");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2,
                display:"block",
        });
    });

    $(window)
    .mouseleave(function() {
        cursor.css({
            opacity: "0",
            display:"block",
        });
    })
    .mouseenter(function() {
        cursor.css({
            opacity: "1",
            display:"block",
        });
    });


    // 연질캡슐 모드코 팝업열기 1
    $(document).on("click", "#cap-banner1", function() {
		$('#capsule-mod1').modal('show');
	});

    // 연질캡슐 모드콜 팝업열기 2
    $(document).on("click", "#cap-banner2", function() {
		$('#capsule-mod2').modal('show');
	});

    // 연질캡슐 모드코프 팝업열기 3
    $(document).on("click", "#cap-banner3", function() {
		$('#capsule-mod3').modal('show');
	});

    // 시럽 코프시럽 팝업열기 4
    $(document).on("click", "#syrup-banner1", function() {
		$('#syrup-mod1').modal('show');
	});

    // 시럽 콜드시럽 팝업열기 5
    $(document).on("click", "#syrup-banner2", function() {
		$('#syrup-mod2').modal('show');
	});

    // 시럽 노즈시럽 팝업열기 6
    $(document).on("click", "#syrup-banner3", function() {
		$('#syrup-mod3').modal('show');
	});

    // 모드콜로시럽 팝업열기 7
    $(document).on("click", "#syrup-banner4", function() {
		$('#syrup-mod4').modal('show');
        var mdModcolSlider = new Swiper('.md-modcol-swiper', {
            spaceBetween: 0,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
	});

    function resetAni(i){
        const target = $('.moving' + i);
        target.removeClass("on").removeClass('moving' + i),
        void target.outerWidth(),
        target.addClass('on moving' + i);
    }

    // 약리작용 모드코프S 모션1 
    $(document).on("click", "#map-mod1", function() {
		$('.moving-basic').removeClass('on');
		$('.moving1').addClass('on');
        resetAni(1);
       
	});
    $(document).on("click", ".moving1", function() {
		$(this).removeClass('on');
		$('.moving-basic').addClass('on');
	});

    // 약리작용 모드코S 모션2
    $(document).on("click", "#map-mod2", function() {
		$('.moving-basic').removeClass('on');
		$('.moving2').addClass('on');
        resetAni(2);
	});
    $(document).on("click", ".moving2", function() {
		$(this).removeClass('on');
		$('.moving-basic').addClass('on');
        
	});

    // 약리작용 모드콜S 모션3
    $(document).on("click", "#map-mod3", function() {
		$('.moving-basic').removeClass('on');
		$('.moving3').addClass('on');
        resetAni(3);
	});
    $(document).on("click", ".moving3", function() {
		$(this).removeClass('on');
		$('.moving-basic').addClass('on');
        
	});

    // modal 열기
	// $('#ending-modal').modal('show');
	// $('#syrup-mod4').modal('show');

});