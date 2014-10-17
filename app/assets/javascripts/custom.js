$(document).ready(function(){
    $(".resume").tooltip({placement: 'bottom'});
    
});

$('.btn').click(function(){
    $('.btn').removeClass('active');
    var collapseId = $(this).attr("href");
    if(!$(collapseId).hasClass("in")) { // the bootstrap class "in" when the collapse is expanded
        $(this).addClass('active');
    }
})
