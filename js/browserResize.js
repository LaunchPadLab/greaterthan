$(function(){
	var resizePage = function(){
		$('.page-position-center').css({
        position:'absolute',
        left: ($(window).width() - $('.page-position-center').outerWidth())/2,
        top: ($(window).height() - $('.page-position-center').outerHeight())/2
    });
	};
	
	resizePage();

	$(window).resize(resizePage);
});