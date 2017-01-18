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



  $(".quantity_slider").slider({
    range: "min",
    max: 255,
    value: 100,
    create: function() {
      $(".quantity_text").val($(this).slider( "value" ));
    },
    slide: function(event, ui) {
      $(".quantity_text").val(ui.value);
    },
    classes: {
      'ui-slider': '',
      'ui-slider-handle': '',
      'ui-slider-range': ''
    }
  });


});