/**jQuery.Class 使用方法
 * 1. 必须有2个对象
 * 2.第一个对象中的方法可以直接点，第二个对象的方法必须要 new 出来才可以
 */
jQuery.Class('App',
    {
        mobileNavEvents:function(){
            //移动端导航
            jQuery(".menubtnwrapper").click(function () {
                jQuery(this).toggleClass("active");
                jQuery("body").toggleClass("gn-list-active");
            });
        },
        swiper: function (expr, params) {
            //轮播
            var settings = {
                slidersPerView: 1,
                spaceBetween: 30,
                hideOnClick: true,
                loop: true,
                speed: 1000,
                autoplay: 5000,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    slideChange: function () {
                        if (!this.navigation.$nextEl)
                            return false;
    
                        if (this.isEnd) {
                            this.navigation.$nextEl.css('display', 'none');
                        } else {
                            this.navigation.$nextEl.css('display', 'block');
                        }
                    },
                }
            };
    
            if (typeof params == 'object') {
                settings = jQuery.extend(settings, params);
            }
    
            var element = jQuery(expr);
            if (element.length <= 0)
                return false;
    
            if (jQuery(settings.pagination.el, element).length <= 0) {
                element.append('<div class="swiper-pagination"></div>');
                settings.pagination.el = '.swiper-pagination';
            }
    
            if (jQuery(settings.navigation.nextEl, element).length <= 0) {
                element.append('<div class="swiper-button-prev"></div>');
                settings.navigation.nextEl = '.swiper-button-next';
            }
    
            if (jQuery(settings.navigation.prevEl, element).length <= 0) {
                element.append('<div class="swiper-button-next"></div>');
                settings.navigation.prevEl = '.swiper-button-next';
            }
    
            var swiper = new Swiper(expr, settings);
            return swiper;
        },
        headerScroll:function(){
            //当滚动超过 57 px 时，header 更改透明度 为 .7
            $(window).scroll(function () {
                if ($(this).scrollTop() > 4) {
                    $('.header').addClass('header-opacity07-bg');
                    $('.header .nav ul .home.active').addClass('header-opacity00-bg');
                } else if (App.isMobile()) {
                    $('.header').addClass('header-opacity07-bg');
                    $('.header .nav ul .home.active').addClass('header-opacity00-bg');
                } else {
					$('.header').addClass('header-opacity00-bg').removeClass('header-opacity07-bg');
					$('.header .nav ul .home.active').removeClass('header-opacity00-bg');
                }
            });
            $(window).trigger('scroll');
        },
        isMobile:function(){
            if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                return true;
            } else {
                return false;
            }
        },
        topSearch:function(){
            var searchForm = jQuery('#topSearchForm');
            jQuery("label button.isshow", searchForm).on('click', function () {
                jQuery(this).parent().addClass("active");
                jQuery("label input", searchForm).focus();
                jQuery("label button:submit", searchForm).show();
                jQuery(this).children('.icon-search_line').addClass('icon-black');
            });

            jQuery(".hot-search a", searchForm).click(function (e) {
                e.preventDefault();
                var keyword = jQuery(this).find('span').text();

                jQuery('[name="keyword"]', searchForm).val(keyword);
                searchForm.submit();
            });
        },
        crossChexTab:function(){
            jQuery('.cross-chex-tab .tab-header-item').click(function (e) {
                
                var _this = jQuery(this);
                var index = _this.index();

                _this.addClass('active').siblings().removeClass('active');
                jQuery('.cross-chex-pannel .tab-content').eq(index).addClass('active').siblings().removeClass('active');
            });
        },
        featureNav:function(){
            jQuery('.feature-nav-content ul li a').on(App.linkAfterAjax, function (e) {
                jQuery('.feature-nav-content ul li a.nav-btn-active').removeClass('nav-btn-active');
                jQuery(this).addClass('nav-btn-active');
            });
        }
    },
    {}
);



