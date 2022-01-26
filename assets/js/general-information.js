$(function(){

    $("#london").click(function(){
        $(".london-img").show(),
        $(".paris-img").hide(),
        $(".tokyo-img").hide(),
        $(".oslo-img").hide();
    });
    $("#paris").click(function(){
        $(".paris-img").show(),
        $(".london-img").hide(),
        $(".tokyo-img").hide(),
        $(".oslo-img").hide();
    });
    $("#tokyo").click(function(){
        $(".tokyo-img").show();
        $(".london-img").hide();
        $(".paris-img").hide();
        $(".oslo-img").hide();
    });
    $("#oslo").click(function(){
        $(".oslo-img").show();
        $(".london-img").hide();
        $(".paris-img").hide();
        $(".tokyo-img").hide();
    });













});