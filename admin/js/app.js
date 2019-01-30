// 生成涟漪效果函数
function ripple(obj,x,y,width,scale)
{
    var ripple = document.createElement('div');
    $(ripple).css({
        "position"                   : "absolute",
        "border-radius"              : "100%",
        "background-color"           : "rgba(0, 0, 0, .5)",
        "-webkit-transform"          : "scale(0)",
        "transform"                  : "scale(0)",
        "height"                     : width,
        "width"                      : width,
        "-webkit-transition-duration": ".7s",
        "transition-duration"        : ".7s",
        "top"                        : y,
        "left"                       : x,
        "z-index"                    : 0,
    });
    // 将对象转换成父类容器
    $(obj).css({
        "overflow":"hidden",
        "position":"relative",
    }).append(ripple);

    $(ripple).animate({},function()
    {
        $(ripple).css({
            "-webkit-transform": "scale("+scale+")",
            "transform"        : "scale("+scale+")",
             "background-color" : "transparent",
        });
    });
    // 1.2秒后清除多余的dom
    setTimeout(function (){
        $(ripple).remove();
     },1000);
}

// 点击触发涟漪效果
$('.click-ripple').click(function(e){
    var width = $(this).width() > $(this).height() ? $(this).height() : $(this).width();
    var x = e.pageX - $(this).offset().left - (width/2);
    var y = e.pageY - $(this).offset().top - (width/2);
    var scale = 0;
    if ( $(this).width() > $(this).height() ) 
    {
        width = $(this).height();
        scale = parseInt($(this).width() / width)+1;
    }else{
        width = $(this).width();
        scale = parseInt($(this).height() / width)+1;
    }
    ripple($(this),x,y,width,scale);
});

//  处理侧边
$('.aside-menu').on('click',function(){
    var dom       = $('aside').parents();
    var classname = "sidebar-mini";
    if(dom.hasClass(classname))
    {
        dom.removeClass(classname);
    }else{
        dom.addClass(classname);
    }
});


$('.sidebar-li').children('div').on('click', function () 
{
    var $this = $(this);
    var otherdom = $this.parents('.sidebar-li').siblings().children('ul[class*=sidebar-child]');
    otherdom.slideUp(0);
    var dom = $this.siblings('ul[class*=sidebar-child]');
    if ($this.parent().hasClass("active")) 
    {
        dom.slideUp(0);
        $this.parent().removeClass("active");
    } else {
        // dom.slideDown(300);
        $this.parent().addClass("active").siblings().removeClass("active");
    }
});
