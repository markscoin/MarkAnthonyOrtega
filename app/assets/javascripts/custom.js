$(document).ready(function(){
    $(".resume").tooltip({placement: 'bottom'});
    
});

$('.btn').click(function(){
    $('.btn').removeClass('active');
    var collapseId = $(this).attr("href");
    if(!$(collapseId).hasClass("in")) { // the bootstrap class "in" when the collapse is expanded
        $(this).addClass('active');
    }
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-55858046-1', 'auto');
ga('send', 'pageview');

