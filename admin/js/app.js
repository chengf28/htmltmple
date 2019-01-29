// 生成涟漪效果函数
function ripple(obj,x,y)
{
    var ripple = document.createElement('div');
    $(ripple).css({
        "position"                   : "absolute",
        "border-radius"              : "100%",
        "background-color"           : "rgba(0, 0, 0, .5)",
        "-webkit-transform"          : "scale(0)",
        "transform"                  : "scale(0)",
        "height"                     : obj.width(),
        "width"                      : obj.width(),
        "-webkit-transition-duration": "1s",
        "transition-duration"        : "1s",
        "top"                        : y,
        "left"                       : x,
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
$('.click-ripple').mousedown(function(e){
    var x = e.pageX - $(this).offset().left - ($(this).width()/2);
    var y = e.pageY - $(this).offset().top - ($(this).height()/2);
    ripple($(this),x,y);
});

//  处理侧边
$('.aside-menu').on('click',function(){
    var dom = $('aside');
    var classname = 'sidebar-mini';
    if(dom.hasClass(classname))
    {
        dom.removeClass(classname);
    }else{
        dom.addClass(classname);
    }
});