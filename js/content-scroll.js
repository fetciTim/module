$(document).ready(function () {
    $('.content-scroll').bind('click', function(e) {
        var ContentLinkPosition = $($(this).attr(href)).offset.top();
        console.log(ContentLinkPosition);
    });
});