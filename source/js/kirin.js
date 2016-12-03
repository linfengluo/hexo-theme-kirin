
$(document).ready(function () {
    var kirin = {

        init: function () {
            var _this = this;

            _this.$postContent = $('.post-content');
            _this.$dicetory = $('.directory');
            _this.$html = $('html');
            _this.hasVelocity = $.isFunction(_this.$html.velocity);
            _this.viewHeight = $(window).height();
            _this.$header = $('.J_header');
            _this.$pageWrapper = $('.page-content');

            _this.initResize();
            _this.initPostNav();
            _this.initLazeLoad();
            _this.initScrollTop();
            _this.initMobildAnimation();
        },

        initResize: function(){
            var _this = this;
            $(window).resize(function(){

                _this.initResizeHeader();



            });
        },

        initResizeHeader: function(){
            var _this = this;
            if($(window).width() > 667){
                _this.$header.height("100%");
            }else{
                _this.$header.height("35px");
            }
        },

        initResizeContent: function(){
            var _this = this;
            _this.viewHeight = $(window).height();

            var pageWrapperHeight = _this.viewHeight ;
            _this.$pageWrapper.css("min-height", pageWrapperHeight);

        },

        initPostNav: function () {
            var _this = this;
            var titleElement = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

            if($('#post').length === 0){
                 return false;
            }

            $.each(titleElement, function (idx, item) {
                _this.initScrollSpy(item);
            });

            _this.$dicetory.find('a').on('click', function (e) {
                e.preventDefault();
                var $target = $(e.target);
                if (!$target.hasClass('directory-link')) {
                    $target = $target.closest('.directory-link');
                }
                var targetSelector = $target.attr("href");
                var offset = $(targetSelector).offset().top;

                if (_this.hasVelocity) {
                    _this.$html.velocity('stop').velocity('scroll', {
                        offset: offset + 'px',
                        mobileHA: false
                    });
                } else {
                    $('html, body').stop().animate({
                        scrollTop: offset
                    }, 500);
                }
            });
        },

        initScrollSpy: function (ele) {
            var _this = this;
            var activeClass = 'active-link';

            _this.$postContent.find(ele).on('scrollSpy:enter', function () {
                var targetId = $(this).attr('id');
                var $targetDirectory = _this.$dicetory.find('a[href=#' + targetId + ']');
                if ($targetDirectory.hasClass(activeClass)) {
                    return;
                } else {
                    _this.$dicetory.find('a').removeClass(activeClass);
                    $targetDirectory.addClass(activeClass);
                }
            });

            _this.$postContent.find(ele).scrollSpy();
        },

        initLazeLoad: function () {
            $("img").lazyload({
                effect : "fadeIn"
            });
        },

        initScrollTop: function(){
            var _this = this;

            $(document).scroll(function(){
                var scrollTop = $(document).scrollTop();
                if(scrollTop > _this.viewHeight / 3){
                    $(".scrolly-wrapper").fadeIn();
                }else{
                    $(".scrolly-wrapper").fadeOut();
                }
            })

            //回到顶部
            $("#scrollTop").on('click', function(e){
                e.preventDefault();

                if(_this.hasVelocity){
                    _this.$html.velocity('stop').velocity('scroll', {
                        offset: '0px',
                        mobileHA: false
                    });
                }else{
                    $('html, body').stop().animate({
                        scrollTop: 0
                    }, 500);
                }
            });
        },

        initMobildAnimation: function(){
            var _this = this;

            $('.J_mobileBtn').on("click", function(){
                if(_this.$header.height() === 35){
                    _this.$header.height("295px");
                }else{
                    _this.$header.height("35px");
                }
            });
        }
    }

    kirin.init();
});