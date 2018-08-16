$(document).ready(function(){
  $(document.body).on('click tap', '.toc_caret' ,function(){
    $(this).toggleClass("glyphicon-menu-down");
    $(this).toggleClass("fa fa-minus");
  });

  $("#video").prependTo("#videocontainer");
  $.ajax({
    type: "GET",
    url: "/Online Output.xml",
    dataType: "xml",
    success: function(xml){
      var ul_main=$('<ul class="nav nav-stacked toc" id="toc">');
      // alert(window.location.hostname);
      var hostname = window.location.hostname;
      var currentLocation = "http://"+hostname+"/demo/2017/WebApps/23/en";
      // var currentLocation = window.location;
      //var currentLocation = "/redesign";
      $(xml).find("TocEntry").each(function(){
        if($(this).children().length && $(this).parent().is("CatapultToc")){
          var ulSub=$('<ul id="'+$(this).attr("Title").replace(/\W/g, '')+'" class="collapse toc tocchild">');
          $(this).children().each(function(){
            if($(this).children().length){
              var ulSubSub=$('<ul id="'+$(this).attr("Title").replace(/\W/g, '')+'" class="collapse toc tocchild">');
              $(this).children().each(function(){
                ulSubSub.append('<li id="'+$(this).attr("Title").replace(/\W/g, '')+'" class="panel toc"><a href="'+currentLocation+$(this).attr("Link")+'">'+$(this).attr("Title")+'</a>');
              });
              var link;
              if($(this).attr("Link")){link = '<a href="'+currentLocation+$(this).attr("Link")+'">';}
              else{ link = '';}
              var li=$('<li class="panel toc">'+link+$(this).attr("Title")+'</a>'+'<a data-toggle="collapse" data-parent="'+$(this).parent().attr("Title").replace(/\W/g, '')+'" href="#'+$(this).attr("Title").replace(/\W/g, '')+'"><span class="glyphicon glyphicon-menu-down toc_caret"></span></a>');
              ulSub.append(li.append(ulSubSub));
            }
            else{
              ulSub.append('<li id="'+$(this).attr("Title").replace(/\W/g, '')+'" class="panel toc"><a href="'+currentLocation+$(this).attr("Link")+'">'+$(this).attr("Title")+'</a>');
            }
          });
          var li=$('<li  class="panel toc toccat"><a data-toggle="collapse" data-parent="#toc" href="#'+$(this).attr("Title").replace(/\W/g, '')+'">'+$(this).attr("Title")+'<span class="glyphicon glyphicon-menu-down toc_caret"></span></a>');
          var link;
          if($(this).attr("Link")){link = '<a href="'+currentLocation+$(this).attr("Link")+'">';}
          else{ link = '';}
          var li=$('<li class="panel toc toccat">'+link+$(this).attr("Title")+'</a>'+'<a data-toggle="collapse" data-parent="#toc" href="#'+$(this).attr("Title").replace(/\W/g, '')+'"><span class="glyphicon glyphicon-menu-down toc_caret"></span></a>');
          ul_main.append(li.append(ulSub));
        }
      });

      // var languages = ["en","fr","es"];
      // var link = window.location.href;
      // for (i = 0; i < languages.length; i++){
      //   if(link.search("/"+languages[i]+"/")!==-1){
      //     var frLink = link.replace("/"+languages[i]+"/", "/fr/");
      //     var enLink = link.replace("/"+languages[i]+"/", "/en/");
      //     var esLink = link.replace("/"+languages[i]+"/", "/es/");
      //   }
      // }
      //
      // var languagesDropdown = `
      // <li class="panel toc toccat">Language<a data-toggle="collapse" data-parent="#toc" href="#Language" class="" aria-expanded="true"><span class="glyphicon glyphicon-menu-down toc_caret"></span></a>
      // <ul id="Language" class="toc tocchild collapse in" aria-expanded="true">
      // <li id="English" class="panel toc"><a href="`+enLink+`">English</a></li>
      // <li id="French" class="panel toc"><a href="`+frLink+`">French</a></li>
      // <li id="Spanish" class="panel toc"><a href="`+esLink+`">Spanish</a></li>
      // </ul></li>
      // `
      // ul_main.append(languagesDropdown);
      $("#toc").append(ul_main);
      var pageID = document.title.replace(/\W/g, '');


      //this controls how the toc will open and show it's links according to the current pageID (document.title).
      if($("#"+pageID).children().length == 1){
        $("#"+pageID).css("font-weight","Bold");


        // $("#"+pageID).removeAttr('style').css("color","100px");
        $("#"+pageID).children().first().addClass("tochighlight");



        $("#"+pageID).parent().addClass("in");
        $("#"+pageID).parent().parent().parent().addClass("in");
        $("#"+pageID).parent().parent().parent().addClass("in");
        $("#"+pageID).parent().parent().children().children().first("span").toggleClass("glyphicon-menu-down");
        $("#"+pageID).parent().parent().children().children().first("span").toggleClass("fa fa-minus");
        $("#"+pageID).parent().parent().parent().parent().children().children().first("span").toggleClass("glyphicon-menu-down");
        $("#"+pageID).parent().parent().parent().parent().children().children().first("span").toggleClass("fa fa-minus");

      }
      else{

        $("#"+pageID).parent().css("font-weight","Bold");
        $("#"+pageID).parent().children().first().addClass("tochighlight");

        // $('a[href="http://google.com"]').addClass("tochighlight");
        // $("#"+pageID).parent().children().first().addClass("tochighlight");
        $("#"+pageID).parent().parent().addClass("in");
        $("#"+pageID).addClass("in");

        $("#"+pageID).parent().children().children().first("span").toggleClass("glyphicon-menu-down");
        $("#"+pageID).parent().children().children().first("span").toggleClass("fa fa-minus")

        //tests to see if we are on a subcategory page. if not, these carets should be toggled
        if($("#"+pageID).parents().length != 8){
          $("#"+pageID).parent().parent().parent().children().children().first("span").toggleClass("glyphicon-menu-down");
          $("#"+pageID).parent().parent().parent().children().children().first("span").toggleClass("fa fa-minus");
        }



      }
    }
  });
});
