(function($) {

    $(document).ready(function() {

        // форма поиска
        $('.search-input input').each(function() {
            if ($(this).val() == '') {
                $(this).parent().find('span').css({'display': 'block'});
            }
        });

        $('.search-input input').focus(function() {
            $(this).parent().find('span').css({'display': 'none'});
        });

        $('.search-input input').blur(function() {
            if ($(this).val() == '') {
                $(this).parent().find('span').css({'display': 'block'});
            }
        });

        // слайдер
        $('.slider').each(function() {
            var curSlider = $(this);
            curSlider.data('disableAnimation', true);

            curSlider.find('ul').width(curSlider.find('li:first').width() * curSlider.find('li').length);
        });

        $('.slider-ctrl a').live('click', function() {
            var curSlider = $(this).parents().filter('.slider');

            if (curSlider.data('disableAnimation')) {
                var curIndex = curSlider.find('.slider-ctrl a').index($(this));

                curSlider.find('.slider-ctrl a.active').removeClass('active');
                curSlider.find('.slider-ctrl a').eq(curIndex).addClass('active');

                curSlider.data('disableAnimation', false);
                curSlider.find('ul').animate({'left': -curIndex * curSlider.find('li:first').width()}, curSlider.data('speed'), function() {
                    curSlider.data('disableAnimation', true);
                });
            }

            return false;
        });

        $('.slider-blocks').each(function() {
            var curSlider = $(this).parent();
            curSlider.data('curIndex', 0);
        });

        $('.slider-next').click(function() {
            var curSlider = $(this).parents().filter('li');

            var curIndex = curSlider.data('curIndex');
            curIndex++;
            if (curIndex == curSlider.find('.slider-block').length) {
                curIndex = 0;
            }
            curSlider.data('curIndex', curIndex);

            curSlider.find('.slider-blocks-ctrl a').removeClass('active');
            curSlider.find('.slider-blocks-ctrl a').eq(curIndex).addClass('active');
            curSlider.find('.slider-block').removeClass('active');
            curSlider.find('.slider-block').eq(curIndex).addClass('active');

            return false;
        });

        $('.slider-prev').click(function() {
            var curSlider = $(this).parents().filter('li');

            var curIndex = curSlider.data('curIndex');
            curIndex--;
            if (curIndex < 0) {
                curIndex = curSlider.find('.slider-block').length - 1;
            }
            curSlider.data('curIndex', curIndex);

            curSlider.find('.slider-blocks-ctrl a').removeClass('active');
            curSlider.find('.slider-blocks-ctrl a').eq(curIndex).addClass('active');
            curSlider.find('.slider-block').removeClass('active');
            curSlider.find('.slider-block').eq(curIndex).addClass('active');

            return false;
        });

        $('.slider-blocks-ctrl a').click(function() {
            var curBlock = $(this).parent().parent();
            var curIndex = curBlock.find('.slider-blocks-ctrl a').index($(this));
            curBlock.data('curIndex', curIndex);
            curBlock.find('.slider-blocks-ctrl a').removeClass('active');
            curBlock.find('.slider-blocks-ctrl a').eq(curIndex).addClass('active');
            curBlock.find('.slider-block').removeClass('active');
            curBlock.find('.slider-block').eq(curIndex).addClass('active');
            return false;
        });

        $('.slider-objects-photos').each(function() {
            var curSlider = $(this);
            var curHTML = '';
            curSlider.find('.slider-objects-photo').each(function() {
                curHTML += '<a href="#"></a>';
            });
            curSlider.find('.slider-objects-photos-ctrl').html(curHTML);
            curSlider.find('.slider-objects-photos-ctrl a:first').addClass('active');
        });

        $('.slider-objects-photos-ctrl a').live('click', function() {
            var curSlider = $(this).parents().filter('.slider-objects');
            var curIndex = curSlider.find('.slider-objects-photos-ctrl a').index($(this));
            curSlider.find('.slider-objects-list a').removeClass('active');
            curSlider.find('.slider-objects-list a').eq(curIndex).addClass('active');
            curSlider.find('.slider-objects-photos-ctrl a').removeClass('active');
            curSlider.find('.slider-objects-photos-ctrl a').eq(curIndex).addClass('active');
            curSlider.find('.slider-objects-photo').removeClass('active');
            curSlider.find('.slider-objects-photo').eq(curIndex).addClass('active');
            return false;
        });

        $('.slider-objects-list a').click(function() {
            var curSlider = $(this).parents().filter('.slider-objects');
            var curIndex = curSlider.find('.slider-objects-list a').index($(this));
            curSlider.find('.slider-objects-list a').removeClass('active');
            curSlider.find('.slider-objects-list a').eq(curIndex).addClass('active');
            curSlider.find('.slider-objects-photos-ctrl a').removeClass('active');
            curSlider.find('.slider-objects-photos-ctrl a').eq(curIndex).addClass('active');
            curSlider.find('.slider-objects-photo').removeClass('active');
            curSlider.find('.slider-objects-photo').eq(curIndex).addClass('active');
            return false;
        });

        // все мероприятия
        $('.main-list-all a').click(function() {
            $('#place-load').load($(this).attr('href'), function() {
                $('.main-list').append($('#place-load .main-list').html());
                $('.main-list-all').remove();
                $('#place-load').html('');
            });
            return false;
        });

        // партнеры
        $('.partners').each(function() {
            var curSlider = $(this);
            var curHTML = '';
            curSlider.find('li').each(function() {
                curHTML += '<a href="#"></a>';
            });
            curSlider.find('.partners-ctrl').html(curHTML);
            curSlider.find('.partners-ctrl a:first').addClass('active');
            curSlider.data('curIndex', 0);
            curSlider.data('disableAnimation', true);
        });

        $('.partners-next').click(function() {
            var curSlider = $(this).parents().filter('.partners');

            if (curSlider.data('disableAnimation')) {
                var curIndex = curSlider.data('curIndex');
                curIndex++;
                if (curIndex == curSlider.find('li').length) {
                    curIndex = curSlider.find('li').length - 1;
                }

                curSlider.data('disableAnimation', false);
                curSlider.find('ul').animate({'left': -curIndex * curSlider.find('li:first').width()}, curSlider.data('speed'), function() {
                    curSlider.find('.partners-ctrl a.active').removeClass('active');
                    curSlider.find('.partners-ctrl a').eq(curIndex).addClass('active');

                    curSlider.data('curIndex', curIndex);
                    curSlider.data('disableAnimation', true);
                });
            }

            return false;
        });

        $('.partners-prev').click(function() {
            var curSlider = $(this).parents().filter('.partners');

            if (curSlider.data('disableAnimation')) {
                var curIndex = curSlider.data('curIndex');
                curIndex--;
                if (curIndex < 0) {
                    curIndex = 0;
                }

                curSlider.data('disableAnimation', false);
                curSlider.find('ul').animate({'left': -curIndex * curSlider.find('li:first').width()}, curSlider.data('speed'), function() {
                    curSlider.find('.partners-ctrl a.active').removeClass('active');
                    curSlider.find('.partners-ctrl a').eq(curIndex).addClass('active');

                    curSlider.data('curIndex', curIndex);
                    curSlider.data('disableAnimation', true);
                });
            }

            return false;
        });

        $('.partners-ctrl a').live('click', function() {
            var curSlider = $(this).parents().filter('.partners');

            if (curSlider.data('disableAnimation')) {

                var curIndex = curSlider.find('.partners-ctrl a').index($(this));

                curSlider.data('disableAnimation', false);
                curSlider.find('ul').animate({'left': -curIndex * curSlider.find('li:first').width()}, curSlider.data('speed'), function() {
                    curSlider.find('.partners-ctrl a.active').removeClass('active');
                    curSlider.find('.partners-ctrl a').eq(curIndex).addClass('active');

                    curSlider.data('curIndex', curIndex);
                    curSlider.data('disableAnimation', true);
                });
            }
            return false;
        });

        // новости
        $('.news-more a').click(function() {
            $('#place-load').load($(this).attr('href'), function() {
                $('.news-list').append($('#place-load .news-list').html());
                if ($('#place-load .news-more').length == 1) {
                    $('.news-more a').attr('href', $('#place-load .news-more a').attr('href'));
                } else {
                    $('.news-more').remove();
                }
                $('#place-load').html('');
            });
            return false;
        });

        // faq
        $('.faq-more a').click(function() {
            $('#place-load').load($(this).attr('href'), function() {
                $('.faq-list').append($('#place-load .faq-list').html());
                if ($('#place-load .faq-more').length == 1) {
                    $('.faq-more a').attr('href', $('#place-load .faq-more a').attr('href'));
                } else {
                    $('.faq-more').remove();
                }
                $('#place-load').html('');
            });
            return false;
        });

    });

})(jQuery);