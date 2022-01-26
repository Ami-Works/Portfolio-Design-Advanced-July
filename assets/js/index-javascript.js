$(function(){

    
    $('.gallery1,.gallery2,#gallery1-2,#gallery2-2').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1
    });

    // $('.gallery1').slick({
    //     lazyLoad: 'ondemand',
    //     slidesToShow: 4,
    //     slidesToScroll: 1
    //     });
    
    // $('#gallery1-2').slick({
    //     lazyLoad: 'ondemand',
    //     slidesToShow: 4,
    //     slidesToScroll: 1
    // });


    
   
    $("#this-week").click(function(){
        $("#gallery1-2").hide(),
        $("#this-week").css("color","#9B1750"),
        $("#this-week").css("border-bottom","4px solid #9B1750"),
        $("#free").css("color","black"),
        $("#free").css("border-bottom","4px solid gray"),
        $(".gallery1").show();

        $('.slick-next.slick-arrow').click();
    });

    $("#free").click(function(){
        $(".gallery1").hide(),
        $("#free").css("color","#9B1750"),
        $("#free").css("border-bottom","4px solid #9B1750"),
        $("#this-week").css("color","black"),
        $("#this-week").css("border-bottom","4px solid gray"),
        $("#gallery1-2").show();

        $('.slick-next.slick-arrow').click();
    });


    $("#films").on({
        mouseover : function(){
            $("#films").css("color","#9B1750"),
            $("#films").css("border-bottom","4px solid #9B1750");
        },

        click : function(){
            $(".gallery2").hide(),
            $("#gallery2-3").hide(),
            $("#films").css("color","#9B1750"),
            $("#films").css("border-bottom","4px solid #9B1750"),
            $("#shows").css("color","black"),
            $("#shows").css("border-bottom","4px solid gray"),
            $("#concerts").css("color","black"),
            $("#concerts").css("border-bottom","4px solid gray"),
            $("#gallery2-2").show(),
            $('.slick-next.slick-arrow').click();
        }
    
    });

    $("#shows").on({
        mouseover : function(){
            $("#shows").css("color","#9B1750"),
            $("#shows").css("border-bottom","4px solid #9B1750");
        },

        click : function(){
            $("#gallery2-2").hide(),
            $("#gallery2-3").hide(),
            $("#shows").css("color","#9B1750"),
            $("#shows").css("border-bottom","4px solid #9B1750"),
            $("#films").css("color","black"),
            $("#films").css("border-bottom","4px solid gray"),
            $("#concerts").css("color","black"),
            $("#concerts").css("border-bottom","4px solid gray"),
            $(".gallery2").show(),
            $('.slick-next.slick-arrow').click();
        }
    });

    $("#concerts").on({
        mouseover : function(){
            $("#films").css("color","black"),
            $("#films").css("border-bottom","4px solid gray");
        },

        click : function(){
            $(".gallery2").hide(),
            $("#gallery2-2").hide(),
            $("#concerts").css("color","#9B1750"),
            $("#concerts").css("border-bottom","4px solid #9B1750"),
            $("#shows").css("color","black"),
            $("#shows").css("border-bottom","4px solid gray"),
            $("#films").css("color","black"),
            $("#films").css("border-bottom","4px solid gray"),
            $("#gallery2-3").show(),
            $('.slick-next.slick-arrow').click();
        },


    
    });
    
});



