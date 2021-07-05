$(function(){ 
  $(window).scroll(function(){ 
    if($(this).scrollTop()!=0){ 
      $('.btn_up').fadeIn(); 
    } 
    else{ 
      $('.btn_up').fadeOut(); 
    } 
    }); 
    $('.btn_up').click(function(){ 
    $('body,html').animate({scrollTop:0},500); 
    }); 
  }); 
  $(function() { 
  $('a[href="#scroll"]').click(function(event) { 
    event.preventDefault() 
      var el = $('.block_scroll'); 
    $('body,html').animate({ 
      scrollTop: $(el).offset().top 
    }, 1000); 
  });
});