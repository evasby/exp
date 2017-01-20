$(document).ready(function(){
  //init
  var calcRateElite = 1.1,
      calcRatePremium = 1.2,
      coefficient = 3,
      maxInput = 300,
      mobile,
      mobileBreakpointWidth = 1000;

  //calculate
  function calculate($curentItem) {

    var rate,
        radioValue,
        sliderValue,
        total;

    //get radio button value
    radioValue = $curentItem.find('input.components_radio:checked').val();
    switch (radioValue) {
      case 'standart':
        rate = 1;
        break;
      case 'elite':
        rate = calcRateElite;
        break;
      case 'premium':
        rate = calcRatePremium;
        break;
      default:
        rate = 1;
    }

    //get slider value
    radioValue = $curentItem.find('.quantity_text').val();

    //calculate
    total = Math.round(radioValue * coefficient * rate);
    $curentItem.find('.total_text').text(total);

  }

  //check window width
  if ($(window).width() < mobileBreakpointWidth){
    mobile = true;
  } else {
    mobile = false;
  }
  $(window).resize(function() {
    if ($(window).width() < mobileBreakpointWidth){
      mobile = true;
    }else{
      mobile = false;
    }
  });

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

  //jquery UI slider
  $(".quantity_slider").slider({
    range: "min",
    max: 300,
    value: 0,
    animate: true,
    slide: function(event, ui) {
      $(this).closest('.quantity_wrap').find('.quantity_text').val(ui.value);
      calculate($(this).closest('.calculator'))
    },
    classes: {
      'ui-slider': '',
      'ui-slider-handle': '',
      'ui-slider-range': ''
    }
  });

  //quanity input change
  $('.quantity_text').keyup(function(e) {
    if (parseInt($(this).val()) > maxInput) $(this).val(maxInput)
    if (parseInt($(this).val()) < 0) $(this).val(0)
    $(this).closest('.quantity_wrap').find('.quantity_slider').slider('value', $(this).val());
    calculate($(this).closest('.calculator'));
  });
  //for ie8
  $('.quantity_text').change(function(e) {
    if (parseInt($(this).val()) > maxInput) $(this).val(maxInput)
    if (parseInt($(this).val()) < 0) $(this).val(0)
    $(this).closest('.quantity_wrap').find('.quantity_slider').slider('value', $(this).val());
    calculate($(this).closest('.calculator'));
  });

  //radio button change
  $('.components_radio').change(function() {
    calculate($(this).closest('.calculator'));
  });

  //calculator transition show
  if (!mobile) {
    $('.experience_item').hover(function(){
      $(this).find('.calculator').addClass('calculator__show');
    }, function() {
      $(this).find('.calculator').removeClass('calculator__show');
    });
  };

  //scroll to top item after click
  if (mobile) {
    $('.experience_item').click(function(){
      clearInterval(timeout);
      var $this = $(this);
      var timeout = setTimeout(function(){
        $('html, body').animate({
          scrollTop: $this.offset().top - 28
        }, 500);
      }, 200);   
    });
  };

});