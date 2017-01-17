$(document).ready(function(){

	//top-menu toggle
	$('.top-menu_toggle').click(function(){
    if ($(this).hasClass('top-menu_toggle__on')) {
      $(this).removeClass('top-menu_toggle__on');
      $(".top-menu_nav").removeClass('top-menu_nav__on');
    } else{
      $(this).addClass('top-menu_toggle__on');
      $(".top-menu_nav").addClass('top-menu_nav__on');
    }
  });

});