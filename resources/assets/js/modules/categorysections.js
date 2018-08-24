$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "Onlinev2.xml",
    dataType: "xml",
    success: function(xml){
      var ul_main=$('<ul class="nav navbar-nav navbar-right"> ');
      //var currentLocation = window.location;
      var currentLocation = "/redesign";
      $(xml).find("TocEntry").each(function(){
        if($(this).children().length && $(this).parent().is("CatapultToc")){
          var ulSub=$('<ul class="dropdown-menu"> ');
          $(this).children().each(function(){
            if(String($(this).attr("Link")).startsWith("http")){
              ulSub.append('<a href="'+$(this).attr("Link")+'"><li>'+$(this).attr("Title")+'</a>');
            }
            else{
              ulSub.append('<a href="'+currentLocation+$(this).attr("Link")+'"><li>'+$(this).attr("Title")+'</a>');
            }
          });
          if($(this).attr("Title") == "Language"){
            var li=$('<li class="dropdown"><a href="#" class="dropdown-toggle reverse" data-toggle="dropdown">'+$(this).attr("Title")+'<b class="caret"></b></a>');
          }
          else{
            var li=$('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">'+$(this).attr("Title")+'<b class="caret"></b></a>');
          }
          ul_main.append(li.append(ulSub));
        }
      });
      $("#topnavs").append(ul_main);
    }
  });
});
