$(function(){
/*导航栏*/
$('#fm>li').mouseover(function(){
    $('#fm>li').not(this).children('ul').hide();
    $(this).children().show();
  }).mouseout(function(){
    $('#fm>li').children('ul').hide();
});

/********卡片高度对齐*********/
$('.intro').eq(1).height($('.intro').eq(0).height());
$('.intro').eq(3).height($('.intro').eq(2).height());
if($('#itemL').height() < 1200){
  $('.intro').eq(4).height($('#itemL').height()-20).end().eq(4).css({'line-height':'30px'})

};


/***********分割线 ***********/
$('#vhr').height($(this).prev().height());
});