$(document).ready(function(){
  $.post("/assets/phpfunctions/adEngine.php", {'url': window.location.href, "title": document.title},
  function(data) {
    if(data){
      $( "#toc" ).append( '<div id="tocAd"></div>' );
      $("#tocAd").css("background-image", "url('/Resources/CaseWare_Logos/"+data+"')");
    }
  });
});
