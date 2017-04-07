
$(document).ready(function(){
    $(document).width( $(window).width() );
    $("#list").height( $("body").height() - $("header").height() );    
    
    $("#nav .left").click(function(){
        event.stopPropagation();
        $("#dropdown").toggleClass("show");
    });
    $("body").click(function(){
        $("#dropdown").removeClass("show");
    });
    
    // checking all dropdowns in resizing windows
     $(window).resize(function(){
        if( $(window).width() < 768 )
            $("#dropdown").removeClass("show");   
        
         else
             $("#droped-links").removeClass("show");
     });
    // Toggling Nav Links |ON MOBILE|
    function navLinksToggling()
    { $("#droped-links").toggleClass("show"); }
    
    $(".navToggler").click(function()
    {  navLinksToggling(); });
    $("#droped-links .glyphicon-remove").click(function()
    {  navLinksToggling(); });
});