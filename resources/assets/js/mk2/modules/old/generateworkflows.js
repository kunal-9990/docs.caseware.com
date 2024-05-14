$(document).ready(function(){



  var languages = ["en","fr","es","nl","cn","de"];
  var link = window.location.href;
  for (i = 0; i < languages.length; i++){
    if(link.search("/"+languages[i]+"/")!==-1){
      var currentlanguage = languages[i];
    }
  }
  var hostname = window.location.hostname;
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
          TOCxml = $(this).attr("Epicsxmlfile");
          return false;
        }
      });

      $.ajax({
        type: "GET",
        url: TOCxml,
        success: function(xml){
          var firstWorkflowID;
          $(xml).find("relrow").each(function(){
            // tests for relrow href as a substring of the current url. if a match is found, we've found the relrow "epic" for our current url
            if (String(window.location).search($(this).find("topicref").attr("href")) !== -1 && String(window.location).search($(this).find("topicref").attr("href")) !== 0){

              //correct workflow found, start to build workflow panels
              var workflows = '<p class="rightcoltitle">Related Scenarios</p><div class="panel-group visible-xs-inline visible-sm-inline visible-md-inline visible-lg-inline workflowpanels rightcolitem" id="wf">';
              $(this).find("topicgroup").each(function(){
                var titleStart = $(this).children().first().attr("href").lastIndexOf("/");
                var titleEnd = $(this).children().first().attr("href").search(".htm");
                var href = $(this).children().first().attr("href").slice(titleStart+1, titleEnd);

                //store first workflow ID
                if (typeof firstWorkflowID == 'undefined'){
                  firstWorkflowID = href.replace(/[.,\/#!$%\^&\*;:{}=\_'~()]/g,"");
                }

                var title = href.replace(/-/g, ' ');

                //remove all punctuation EXCEPT for "-" hyphen
                href = href.replace(/[.,\/#!$%\^&\*;:{}=\_'~()]/g,"");


                workflows += '<div class="panel panel-default workflowbody rightcolitem workflowpanelmargin"><div class="panel-heading workflowhead"><h4 class="panel-title"> <a class="collapsed" data-toggle="collapse" data-parent="#wf"  href="#'+href+'" class="workflowtitle">'+title+'<b class="caret"></b></a> </h4></div><div id="'+href+'" class="panel-collapse collapse"><div class="panel-body workflowbody"><ul class="workflowlist">';

                $(this).find("topicref").each(function(){
                  var liStart = $(this).attr("href").lastIndexOf("#");
                  var li = $(this).attr("href").slice(liStart+1);
                  li = li.replace(/-/g, ' ');
                  if($(this).attr("collection-type")){
                    workflows += '<a href='+currentLocation+$(this).attr("href")+' ><b><li>'+li+'</li></b></a>';
                  }
                  else{
                    workflows += '<a href='+currentLocation+$(this).attr("href")+' ><li>'+li+'</li></a>';
                  }
                });
                workflows += '</ul></div></div></div>';
              });
              workflows += "</div>";
              $("#workflows").append(workflows);
              //open first workflow
              $("#"+firstWorkflowID).addClass("in");
              $("#workflows").show();
              //prevent from looping through the rest of the workflows
              return false;
            }
          });
        }
      });
        }
      });
    });
