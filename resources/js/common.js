$(document).ready(function(){
    // cursor 
    var cursor = $(".cursor");
    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2,
                display:"block",
        });
    });

    $(window)
    .mouseleave(function() {
        cursor.css({
            opacity: "0",
            display:"block",
        });
    })
    .mouseenter(function() {
        cursor.css({
            opacity: "1",
            display:"block",
        });
    });
});