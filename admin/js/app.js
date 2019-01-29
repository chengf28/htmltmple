// 生成涟漪效果函数
function ripple(obj,x,y,width)
{
    var ripple = document.createElement('div');
    var width  = obj.width() > obj.height() ? obj.height() : obj.width();
    $(ripple).css({
        "position"                   : "absolute",
        "border-radius"              : "100%",
        "background-color"           : "rgba(0, 0, 0, .5)",
        "-webkit-transform"          : "scale(0)",
        "transform"                  : "scale(0)",
        "height"                     : width,
        "width"                      : width,
        "-webkit-transition-duration": "1s",
        "transition-duration"        : "1s",
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
            "-webkit-transform": "scale(5)",
            "transform"        : "scale(5)",
             "background-color" : "transparent",
        });
    });
    // 1.2秒后清除多余的dom
    setTimeout(function (){
        $(ripple).remove();
     },1200);
}

// 点击触发涟漪效果
$('.click-ripple').click(function(e){
    var width = $(this).width() > $(this).height() ? $(this).height() : $(this).width();
    var x = e.pageX - $(this).offset().left - (width/2);
    var y = e.pageY - $(this).offset().top - (width/2);
    ripple($(this),x,y,width);
});

//  处理侧边
$('.aside-menu').on('click',function(){
    var dom       = $('aside');
    var classname = "sidebar-mini";
    if(dom.hasClass(classname))
    {
        dom.removeClass(classname);
    }else{
        dom.addClass(classname);
    }
});

// 子菜单栏
$('.sidebar-title').on('click',function(){
    var $this = $(this);
    var dom   = $this.siblings('ul[class=sidebar-child]');
    var  icon = $this.children('span[class*=oi-chevron-left]');
    if( icon.length > 0 )
    {
        icon.removeClass('oi-chevron-left').addClass('oi-chevron-bottom');
    }else{
        $this.children('span[class*=oi-chevron-bottom]').addClass('oi-chevron-left').removeClass('oi-chevron-bottom');
    }
    dom.toggle();

})