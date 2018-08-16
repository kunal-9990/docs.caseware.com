var hash = window.location.hash;
if (location.hash && document.referrer.indexOf("webapps.htm") == -1) {
setTimeout(function() {

  window.scrollTo(0, 0);
}, 1);
}

$(document).ready(function(){


  if(hash){

  $('a[href="'+hash+'"]').css("color","#c99700");
  $('a[href="'+hash+'"]').fadeIn("500");
  $('a[href="'+hash+'"]').fadeOut("500");
  $('a[href="'+hash+'"]').fadeIn("500");
  $('a[href="'+hash+'"]').fadeOut("500");
  $('a[href="'+hash+'"]').fadeIn("500");
  $('a[href="'+hash+'"]').fadeOut("slow");
  $('a[href="'+hash+'"]').fadeIn("slow");


  setTimeout(function(){
    $('a[href="'+hash+'"]').fadeOut("500");
    $('a[href="'+hash+'"]').fadeIn("500");
  }, 4000);
  setTimeout(function(){ $('a[href="'+hash+'"]').css("color","#337ab7"); }, 4400);
}
});
