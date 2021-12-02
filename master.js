$(document).ready(function(){

  /* 헤더 */
  var head_h = $('header');

  $(document).on('load scroll', function(){
    if( $(window).scrollTop() > head_h.height() ){
      head_h.addClass('fixed');
    } else {
      head_h.removeClass('fixed');
    }
  });

});
