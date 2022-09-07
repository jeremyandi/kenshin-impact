$(function()
{
    $('.next').on('click',function()
    {
        var current = $('.active');
        var next = current.next();
        var first = current.prevAll().last();

        if(next.length > 0)
        {
            current.removeClass('active').css('z-index','-10');
            next.addClass('active').css('z-index','10');
        }
        else
        {
            current.removeClass('active').css('z-index','-10');
            first.addClass('active').css('z-index','10');
        }
    });

    $('.prev').on('click',function()
    {
        var current = $('.active');
        var prev = current.prev();
        var last = current.nextAll().last();

        if(prev.length > 0)
        {
            current.removeClass('active').css('z-index','-10');
            prev.addClass('active').css('z-index','10');
        }
        else
        {
            current.removeClass('active').css('z-index','-10');
            last.addClass('active').css('z-index','10');
        }
    });
});