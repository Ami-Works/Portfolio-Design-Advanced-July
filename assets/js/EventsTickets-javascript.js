$(function(){

    // ========= featured shows =========
    $('.featured-shows').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 2
    });
	

    // ========= in the aside - for check mark ========

    //$("span").on({
      //  click : function(){
        //    $(this).toggleClass("show");
       // }
    //});

    // $(".block1 div").click(function(){
    //     $(this).find("span").toggleClass("show");
    //    // alert("test");
    // });

    $(".block3 div").click(function(){
        $(this).find("span").toggleClass("show");
    });
    $(".block4 div").click(function(){
        $(this).find("span").toggleClass("show");
    });
    $(".block5 div").click(function(){
        $(this).find("span").toggleClass("show");
    });

    $("#classical-music").click(function(){
        $(this).find("span").toggleClass("show");
    });

    function checkmark(){
        $('span')
    }


    // ========= in the main - group ==========

    // $("#all-shows").click(function(){
    //     $("span").toggleClass("show");
    // });
    $("#all-shows").click(function(){
        $(".block1,.block2,.block3,.block4").find("span").toggleClass("show");
        $(".arts").toggleClass("show");
        $(".proxy-article").children("div").show();
        $(".real-article > div").hide();
    });

    $("#all-music").click(function(){
        $(".block2").find("span").toggleClass("show");
    });

    // ========= in the main - individual =========

    $("#plays").click(function(){
        $(".proxy-article > div").hide();
        $(".real-article").find(".plays").toggle();
        // $("article").children("div").not(".plays").toggle(); //hide all div that does not have class of plays
        $(this).find("span").toggleClass("show");
    });
    
    $("#musicals").click(function(){
        $(".proxy-article > div").hide();
        $(".real-article").find(".musicals").toggle();
        // $("article").children("div").not(".musicals").toggle();
        $(this).find("span").toggleClass("show");

    });

    $("#cinema").click(function(){
        // $(".cinema").toggle();
        // $("article").children("div").not(".cinema").toggle();
        $(".proxy-article > div").hide();
        $(".real-article").find(".cinema").toggle();
        $(this).find("span").toggleClass("show");
    });
    $("#ballets").click(function(){
        // $(".ballets").toggle();
        // $("article").children("div").not(".ballets").toggle();
        $(".proxy-article > div").hide();
        $(".real-article").find(".ballets").toggle();
        $(this).find("span").toggleClass("show");
    });
    $("#others").click(function(){
        // $(".ballets").toggle();
        // $("article").children("div").not(".others").toggle();
        $(".proxy-article > div").hide();
        $(".real-article").find(".others").toggle();
        $(this).find("span").toggleClass("show");
    });
    $("#all-music").click(function(){
        // $(".ballets").toggle();
        // $("article").children("div").not(".music").toggle();
        $(".proxy-article > div").hide();
        $(".real-article").find(".music").toggle();
        $(this).find("span").toggleClass("show");
    });

});

// ============= modal ==============

var openBtn = document.getElementById("myBtn");

openBtn.onclick = function(){
    document.getElementById("myModal").style.display="block";
}

var closeBtn = document.getElementsByClassName("close");

closeBtn[0].onclick = function(){
    document.getElementById("myModal").style.display="none";
}

var modal = document.getElementById("myModal");

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}