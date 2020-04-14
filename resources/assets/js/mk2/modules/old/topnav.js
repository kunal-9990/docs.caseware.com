  // temp removed
  // <div class="col-sm-4 col-xs-6">\
  //   <div id="taxmodalfilter" class="panel panel-default panel-filter filtermodalbtn" tabindex="0">\
  //     <div class="panel-body">\
  //       Tax\
  //       <span class="filter-checkmark filter-checkmark-active">&#x2713;</span>\
  //     </div>\
  //   </div>\
  // </div>\

$(document).ready(function(){

  filterQueryArr = getUrlVars();

  var modalHtml = '\
  <!-- Modal -->\
  <div id="filterModal" class="modal fade" role="dialog">\
    <div class="modal-dialog">\
      <!-- Modal content-->\
      <div class="modal-content">\
        <div class="modal-header">\
          <button type="button" class="close" data-dismiss="modal">&times;</button>\
          <h4 style="text-align:center" class="modal-title">See only the information you need by selecting the products applicable to you:</h4>\
        </div>\
        <div class="modal-body">\
          <!--start body-->\
          <div class="filterDropdown topic-filter">\
            <div class="filterDropDownMenu topic-filter__drop-down">\
              <div class="topic-filter__header topic-filter__header--modal">\
                See only the information you need by selecting the products applicable to you:\
              </div>\
              <div class="topic-filter__list-wrapper">\
                <div class="row">\
                  <div class="col-sm-4 col-xs-6">\
                    <div id="semodalfilter" class="panel panel-default panel-filter filtermodalbtn" tabindex="0">\
                      <div class="panel-body">\
                        SE\
                        <span class="filter-checkmark filter-checkmark-active">&#x2713;</span>\
                      </div>\
                    </div>\
                  </div>\
                  <div class="col-sm-4 col-xs-6">\
                    <div id="wpmodalfilter" class="panel panel-default panel-filter filtermodalbtn" tabindex="0">\
                      <div class="panel-body">\
                        Working<br> Papers\
                        <span class="filter-checkmark filter-checkmark-active">&#x2713;</span>\
                      </div>\
                    </div>\
                  </div>\
                  <div class="col-sm-4 col-xs-6">\
                    <div id="timemodalfilter" class="panel panel-default panel-filter filtermodalbtn" tabindex="0">\
                      <div class="panel-body">\
                        Time\
                        <span class="filter-checkmark filter-checkmark-active">&#x2713;</span>\
                      </div>\
                    </div>\
                  </div>\
                  <div class="col-sm-4 col-xs-6">\
                    <div id="analyticsmodalfilter" class="panel panel-default panel-filter filtermodalbtn" tabindex="0">\
                      <div class="panel-body">\
                        Analytics\
                        <span class="filter-checkmark filter-checkmark-active">&#x2713;</span>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>\
            <!--end body-->\
        </div>\
        <div class="modal-footer">\
          <button data-dismiss="modal" type="button" class="btn btn-default filtermodalbtn">Done</button>\
        </div>\
      </div>\
    </div>\
  </div>';

  $( "#modalcheckall" ).click(function() {
  $('#semodalfilter').prop('checked', true);

});

  $(modalHtml).appendTo("body"); 

  filterModal();

  $(document.body).on('mouseenter mouseleave click tap', '.dropdownhover' ,function(){
    $(this).toggleClass("open");
  
  });



  var link = window.location.href;
  var ul_main=$('<ul class="nav navbar-nav navbar-right"> ');
  //var currentLocation = window.location;
  //var currentLocation = "/redesign";
  var hostname = window.location.hostname;
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
              var ulSub=$('<ul class="dropdown-menu"> ');
              $(this).children().each(function(){
                //this ensure that switching the language directs user to the same topic/page in the language chosen.
                if($(this).parent().attr("Title") == "Language"){
                  var link = window.location.href;
                  for (var key in languages) {
                    if(link.search("/"+languages[key]+"/")!==-1){
                      var newlink = link.replace("/"+languages[key]+"/", "/"+languages[$(this).attr("Title")]+"/");
                    }
                  }
                  ulSub.append('<a href="'+newlink+'"><li>'+$(this).attr("Title")+'</a>');
                }

                else if($(this).attr("Link")){
                  ulSub.append('<a href="'+currentLocation+$(this).attr("Link")+'"><li>'+$(this).attr("Title")+'</a>');
                }
              });
              if(link.search("/"+$(this).attr("Title")+"/")!==-1){
                var li=$('<a class="topnavlinks currentcat" href="'+currentLocation+$(this).attr("Link")+'"><li class="dropdown dropdownhover">'+$(this).attr("Title")+'<b class="caret"></b></a>');
              }
              else{
                var li = $('<a class="topnavlinks" href="' + currentLocation + $(this).attr("Link") +'"><li class="dropdown dropdownhover">'+$(this).attr("Title")+'<b class="caret"></b></a>');
              }
              ul_main.append(li.append(ulSub));
            }
          });
          var languages = ["en","fr","es","nl","cn","de"];
          var languagesref = { en: "English", fr: "French", es: "Spanish", nl: "Dutch", cn: "Chinese", de: "German" };
          for (i = 0; i < languages.length; i++){
            if(link.search("/"+languages[i]+"/")!==-1){
              var currentlanguage = languages[i];
              var frLink = link.replace("/"+languages[i]+"/", "/fr/");
              var enLink = link.replace("/"+languages[i]+"/", "/en/");
              var esLink = link.replace("/"+languages[i]+"/", "/es/");
              var nlLink = link.replace("/"+languages[i]+"/", "/nl/");
              var cnLink = link.replace("/"+languages[i]+"/", "/cn/");
              var deLink = link.replace("/"+languages[i]+"/", "/de/");
            }
          }

          var languagesDropdown = '<li class="dropdown dropdownhover langdropdown"><a href="#" class="dropdown-toggle langdropdown" data-toggle="dropdown">' + languagesref[currentlanguage] + '<b class="caret"></b></a><ul class="dropdown-menu"><li><a href="' + enLink + '">English</a></li><li><a href="' + frLink + '">French</a></li><li><a href="' + esLink + '">Spanish</a></li><li><a href="' + nlLink + '">Dutch</a></li><li><a href="' + cnLink + '">Chinese</a></li><li><a href="' + deLink + '">German</a></li></ul></li></ul></li>';
          ul_main.append(languagesDropdown);
          // $("#topnavs").append(ul_main);

          var productFilterDropdown =
          '<div style="margin-top:22px" class="filterDropdown topic-filter">\
            <button type="button" class="btn btn-primary btn-sm dropdown-toggle topic-filter__button topic-filter--js" data-toggle="dropdown"><span class="glyphicon glyphicon-filter"></span> Filter &nbsp;<span class="caret"></span></button>\
            <div class="dropdown-menu filterDropDownMenu topic-filter__drop-down">\
              <div class="topic-filter__header">\
                See only the information you need by selecting the products applicable to you:\
              </div>\
              <div class="topic-filter__list-wrapper">\
                <div class="row">\
                  <div class="col-sm-4 col-xs-6">\
                    <div id="sefilter" class="panel panel-default panel-filter--js panel-filter" tabindex="0">\
                      <div class="panel-body">\
                        SE\
                        <span class="filter-checkmark filter-checkmark-active">&#x2713;</span>\
                      </div>\
                    </div>\
                  </div>\
                  <div class="col-sm-4 col-xs-6">\
                    <div id="wpfilter" class="panel panel-default panel-filter--js panel-filter" tabindex="0">\
                      <div class="panel-body">\
                        Working<br> Papers\
                        <span class="filter-checkmark filter-checkmark-active">&#x2713;</span>\
                      </div>\
                    </div>\
                  </div>\
                  <div class="col-sm-4 col-xs-6">\
                    <div id="timefilter" class="panel panel-default panel-filter--js panel-filter" tabindex="0">\
                      <div class="panel-body">\
                        Time\
                        <span class="filter-checkmark filter-checkmark-active">&#x2713;</span>\
                      </div>\
                    </div>\
                  </div>\
                  <div class="col-sm-4 col-xs-6">\
                    <div id="analyticsfilter" class="panel panel-default panel-filter--js panel-filter" tabindex="0">\
                      <div class="panel-body">\
                        Analytics\
                        <span class="filter-checkmark filter-checkmark-active">&#x2713;</span>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>';

            ul_main.append(productFilterDropdown);
            $("#topnavs").append(ul_main);
          //filterQueryArr ? filterModal() :
          loadFilter();

          $('div.filterDropDownMenu').on('click', function(event){
            var events = $._data(document, 'events') || {};
            events = events.click || [];
            for(var i = 0; i < events.length; i++) {
              if(events[i].selector) {

                //Check if the clicked element matches the event selector
                if($(event.target).is(events[i].selector)) {
                  events[i].handler.call(event.target, event);
                }

                // Check if any of the clicked element parents matches the
                // delegated event selector (Emulating propagation)
                $(event.target).parents(events[i].selector).each(function(){
                  events[i].handler.call(this, event);
                });
              }
            }
            event.stopPropagation(); //Always stop propagation
          });

          // $(document).on('click', '.filterbtn', function(event){
          //   $(this).toggleClass("deselected");
          //   updateFilter();
          // });

          $(document).on('click', '.filtermodalbtn', function(event){
            // $(this).toggleClass("deselected");
            var ff = filterBtnFn.bind(this);
            ff();
            updateFilterFromModal();
            checkSelectedFilterState();
          });

          $(document).on('click', '.panel-filter--js', function(event){
            var ff = filterBtnFn.bind(this);
            ff();
            updateFilter();
          });

          $(document).on('keyup', '.panel-filter--js', function(event){
            if (event.key === 'Enter') {
              var ff = filterBtnFn.bind(this);
              ff();
            }
            updateFilter();      
          });

          function filterBtnFn() {
            var spanNode = $(this).find('span')
            $(this).toggleClass("deselected");
            (spanNode.hasClass('filter-checkmark-active')) ? 
              spanNode.removeClass('filter-checkmark-active') : spanNode.addClass('filter-checkmark-active');
          };

          function checkSelectedFilterState() {
            var filterNode = Array.from(document.querySelectorAll('.panel-filter--js'));
            filterNode.forEach(function(node) {
              if (node.classList.contains('deselected')) {
                node.querySelector('.filter-checkmark').classList.remove('filter-checkmark-active');
              } else {
                node.querySelector('.filter-checkmark').classList.add('filter-checkmark-active');
              }              
            });
          };
          checkSelectedFilterState();

          $('.topic-filter--js').on('click', function() {
            checkSelectedFilterState();
          });

        }
      });
    }
  });

});
