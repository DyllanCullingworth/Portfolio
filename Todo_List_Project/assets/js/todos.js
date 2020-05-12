$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});
//span clicked inside a new ul
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    //Stops it from bubbling up to other elements
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    };
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});