// function filterTOC(){
//   $.post("/assets/phpfunctions/productFilter.php",
//   {
//     'function': 'loadFilter',
//
//   },
//   function(data) {
//     var filtersettings = JSON.parse(data);
//     if(filtersettings['se']!="true"){ $('.se').hide()};
//   });
// }

$(document).ready(function(){

  $(document.body).on('click tap', '.toc_caret' ,function(){
    $(this).toggleClass("glyphicon-menu-down");
    $(this).toggleClass("fa fa-minus");
  });



  var ul_main=$('<ul class="nav nav-stacked toc" id="toc">');
  // alert(window.location.hostname);
  var hostname = window.location.hostname;

  var languages = ["en","fr","es","nl","cn","de"];
  var link = window.location.href;
  for (i = 0; i < languages.length; i++){
    if(link.search("/"+languages[i]+"/")!==-1){
      var currentlanguage = languages[i];
    }
  }

  var currentLocation;
  var TOCxml;
  $.ajax({
    type: "GET",
    url: "/productmapping.xml",
    dataType: "xml",
    success: function(prdxml){
      var currentURL = window.location.href;
      $(prdxml).find("row").each(function(){
        if(link.search($(this).attr("Server"))!==-1 && link.search($(this).attr("Keyword"))!==-1){
          currentLocation = $(this).attr("Protocol")+hostname+$(this).attr("LinkPrefix")+currentlanguage;
          TOCxml = $(this).attr("TOCxmlfile");
          return false;
        }
      });

      $.ajax({
        type: "GET",
        url: TOCxml,
        success: function(xml){
          $(xml).find("TocEntry").each(function(){
            if($(this).children().length && $(this).parent().is("CatapultToc")){
              var ulSub=$('<ul id="'+$(this).attr("Title").replace(/\W/g, '')+'" class="collapse toc tocchild">');
              $(this).children().each(function(){
                if($(this).children().length){
                  var ulSubSub=$('<ul id="'+$(this).attr("Title").replace(/\W/g, '')+'" class="collapse toc tocchild">');
                  $(this).children().each(function(){
                    var producttags;
                    if(($(this).attr("conditions"))){producttags=$(this).attr("conditions").replace("Product.","").toLowerCase();};
                    if(producttags){
                      ulSubSub.append('<li id="'+$(this).attr("Title").replace(/\W/g, '')+'" class="panel toc toctopic '+producttags+'"><a href="'+currentLocation+$(this).attr("Link")+'">'+$(this).attr("Title")+'</a>');
                    }
                    else{
                      ulSubSub.append('<li id="'+$(this).attr("Title").replace(/\W/g, '')+'" class="panel toc toctopic"><a href="'+currentLocation+$(this).attr("Link")+'">'+$(this).attr("Title")+'</a>');
                    }
                  });
                  var link;
                  if($(this).attr("Link")){link = '<a href="'+currentLocation+$(this).attr("Link")+'">';}
                  else{ link = '';}
                  var li=$('<li class="panel toc tocsub">'+link+$(this).attr("Title")+'</a>'+'<a data-toggle="collapse" data-parent="'+$(this).parent().attr("Title").replace(/\W/g, '')+'" href="#'+$(this).attr("Title").replace(/\W/g, '')+'"><span class="glyphicon glyphicon-menu-down toc_caret subcaret"></span></a>');

                  ulSub.append(li.append(ulSubSub));
                }
                else{
                  ulSub.append('<li id="'+$(this).attr("Title").replace(/\W/g, '')+'" class="panel toc "><a href="'+currentLocation+$(this).attr("Link")+'">'+$(this).attr("Title")+'</a>');
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

          $("#toc").append(ul_main);
          var pageID = document.title.replace(/\W/g, '');


          //this controls how the toc will open and show it's links according to the current pageID (document.title).
          if($("#"+pageID).children().children().length == 0){
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
    }
  });

});
