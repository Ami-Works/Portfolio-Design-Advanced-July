// var pics_src = new Array("images/shops/shop-main.jpeg","images/shops/inst.jpeg","images/shops/some.jpeg");

// var num = -1;

// slideshow_timer();

// function slideshow_timer(){
//         if (num == 2){
//             num = 0;
//         }
//         else {num ++;
//         }
//         document.getElementById("mypic").src=pics_src[num];
//         setTimeout("slideshow_timer()",3500);
//     }

$(function(){
    var setImg = '#automatic';
    var fadeSpeed = 1000;
    var switchDelay = 4500;

    $(setImg).children('img').css({opacity:'0'});
    $(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);

    setInterval(function(){
        $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
    },switchDelay);
});