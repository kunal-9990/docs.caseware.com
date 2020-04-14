$(document).ready(function(){
  
  //some js for the dropdown that changes div content.
  $('[class^="option"]').on('click', function (e) {
    e.preventDefault();
    var numb = this.className.replace('option', '');
    $('[id^="content"]').hide();
    $('#content' + numb).show();
    $('#dropdownbutton').html($(this).text() + ' <span class="caret"></span>');
  });
  //end dropdown js

  $(document).find(".topiccontents").each(function(){
    // alert($(this).next().hasClass("reqworkingpapers"));
    if($(this).next().children().hasClass("prdsectiontext")){
      $(this).css("margin-bottom","0px");
      $(this).next().css("margin-bottom","30px");
    }
  });
  });

//used for filter query string params
function getUrlVars()
{
    if(window.location.href.indexOf('?') != -1){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
  }
    return vars;
}

var getQueryString = function ( field, url ) {
  var href = url ? url : window.location.href;
  var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
  var string = reg.exec(href);
  return string ? string[1] : null;
};

function updateFilter(){
  $.post("/assets/phpfunctions/productFilter.php",
  {
    'function': 'updateFilter',
    'sefilter': !$('#sefilter').hasClass("deselected"),
    'analyticsfilter': !$('#analyticsfilter').hasClass("deselected"),
    'timefilter': !$('#timefilter').hasClass("deselected"),
    'taxfilter': !$('#taxfilter').hasClass("deselected"),
    'wpfilter': !$('#wpfilter').hasClass("deselected"),
    'auditfilter': !$('#auditfilter').hasClass("deselected"),
}
  ,
  function(data) {
    var productNames = { analytics: "Analytics", time: "Time", se: "SE", wp: "Working Papers", analyticsai: "CaseWare Analytics.AI" }; 
    var filtersettings = JSON.parse(data);
    var topicExclusiveProduct = $("html").data("mc-conditions");
    for (var product in filtersettings) {
      // check if the property/key is defined in the object itself, not in parent
      if(filtersettings[product]=="false"){
        if(topicExclusiveProduct == "Product."+product.toUpperCase() && $(".maincontentarea").is(":visible")){
          $(".maincontentarea").hide();
          $(".rightcol").hide();
          $( ".toccol" ).after( '<div class="col-xs-12 col-lg-6 col-md-8 col-sm-8 filtermsg "> This content is exclusively related to ' + productNames[product] + ' and has been filtered out. Select the <span class="glyphicon glyphicon-filter"></span> in the top navigation to modify your filter settings. </div>');
        }
        $("div").find("[data-mc-conditions='Product." + product.toUpperCase() + "']").hide();
        $('.'+product).hide();
      }
      else{
        // alert(product+"="+filtersettings[product]);
        $("div").find("[data-mc-conditions='Product." + product.toUpperCase() + "']").show();
        $('.'+product).show();
        if(topicExclusiveProduct == "Product."+product.toUpperCase()){
          $(".maincontentarea").show();
          $(".rightcol").show();
          $(".filtermsg").hide();
        }

      };
    }

  });
}

function loadFilter(){
  $.post("/assets/phpfunctions/productFilter.php",
  {
    'function': 'loadFilter',
  },
  function(data) {
    var productNames = { analytics: "Analytics", time: "Time", se: "SE", wp: "Working Papers" }; 
    var filtersettings = JSON.parse(data);
    var topicExclusiveProduct = $("html").data("mc-conditions");
    for (var product in filtersettings) {
      // check if the property/key is defined in the object itself, not in parent
      if(filtersettings[product]=="false"){
        if(topicExclusiveProduct == "Product."+product.toUpperCase() && $(".maincontentarea").is(":visible")){
          $(".maincontentarea").hide();$(".rightcol").hide();
          $( ".toccol" ).after( '<div class="col-xs-12 col-lg-6 col-md-8 col-sm-8 filtermsg "> This content is exclusively related to ' + productNames[product] + ' and has been filtered out. Select the <span class="glyphicon glyphicon-filter"></span> icon in the top navigation to modify your filter settings. </div>');
        }
         $("div").find("[data-mc-conditions='Product." + product.toUpperCase() + "']").hide();
         $('.'+product).hide();
         $('#'+product+'filter').addClass("deselected");
      }

    }
  });
}

function updateFilterQueryString(){
  $.post("/assets/phpfunctions/productFilter.php",
  {
    'function': 'updateFilter',

    'sefilter': filterQueryArr["se"] ? filterQueryArr["se"] : false,
    'analyticsfilter': filterQueryArr["analytics"] ? filterQueryArr["analytics"] : false,
    'timefilter': filterQueryArr["time"] ? filterQueryArr["time"] : false,
    'taxfilter': filterQueryArr["tax"] ? filterQueryArr["tax"] : false,
    'wpfilter': filterQueryArr["wp"] ? filterQueryArr["wp"] : false,
    'auditfilter': filterQueryArr["audit"] ? filterQueryArr["audit"] : false,
}
  ,
  function(data) {

    var filtersettings = JSON.parse(data);

    for (var product in filtersettings) {

        // check if the property/key is defined in the object itself, not in parent
        if(filtersettings[product]=="false"){
          $("div").find("[data-mc-conditions='Product." + product.toUpperCase() + "']").hide();
          $('.'+product).hide();
          $('#'+product+'filter').addClass("deselected");
        }

    }
  });
}

function updateFilterFromModal(){
  $.post("/assets/phpfunctions/productFilter.php",
  {
    'function': 'updateFilter',
    'sefilter': !$('#semodalfilter').hasClass("deselected"),
    'analyticsfilter': !$('#analyticsmodalfilter').hasClass("deselected"),
    'timefilter': !$('#timemodalfilter').hasClass("deselected"),
    'taxfilter': !$('#taxmodalfilter').hasClass("deselected"),
    'wpfilter': !$('#wpmodalfilter').hasClass("deselected"),
    'auditfilter': !$('#auditmodalfilter').hasClass("deselected"),
  },
  function(data) {
    var productNames = { analytics: "Analytics", time: "Time", se: "SE", wp: "Working Papers" }; 
    var filtersettings = JSON.parse(data);
    var topicExclusiveProduct = $("html").data("mc-conditions");

    for (var product in filtersettings) {
      if(filtersettings[product]=="false"){
        if(topicExclusiveProduct == "Product."+product.toUpperCase() && $(".maincontentarea").is(":visible")){
          $(".maincontentarea").hide();
          $(".rightcol").hide();
          $( ".toccol" ).after( '<div class="col-xs-12 col-lg-6 col-md-8 col-sm-8 filtermsg "> This content is exclusively related to ' + productNames[product] + ' and has been filtered out. Select the <span class="glyphicon glyphicon-filter"></span> icon in the top navigation to modify your filter settings. </div>');
        }
        $('#'+product+'filter').addClass("deselected");
         $("div").find("[data-mc-conditions='Product." + product.toUpperCase() + "']").hide();
         $('.'+product).hide();
      }
      else{
        $('#'+product+'filter').removeClass("deselected");
        $("div").find("[data-mc-conditions='Product." + product.toUpperCase() + "']").show();
        $('.'+product).show();
        if(topicExclusiveProduct == "Product."+product.toUpperCase()){
          $(".maincontentarea").show();
          $(".rightcol").show();
          $(".filtermsg").hide();
        }
      };
    }
  });
}

function filterModal(){


  seGuids = [];
  $.ajax({
    type: "GET",
    url: "/guidList.xml",
    success: function (xml) {
      $(xml).find("guid").each(function () {
        seGuids.push($(this).attr("id"));
      });
    }
  });

  $.post("/assets/phpfunctions/productFilter.php",
  {
    'function': 'loadFilter',
  },
  function(data) {
    console.log(data);
    var productNames = { analytics: "Analytics", time: "Time", se: "SE", wp: "Working Papers" }; 
    filtersettings = JSON.parse(data);
    //absence of any cookie containing filter settings
    var prodList = getQueryString('prod');
    //absence of any cookie containing filter settings and product list found
    
    if(prodList && !filtersettings){
      var prodArr = prodList.split(',');
      //parameters:
      // setDefaultFilter(se,analytics,time,tax,wp,audit)

      //entering through SE
      //specifies default filter settings when entering through SE without any filter setting cookies
      
      //determine if there are SE guids present in the prod list
      var seGuidsPresent =
        prodArr.filter(function (n) {
          return seGuids.indexOf(n) !== -1;
        });

      if (seGuidsPresent.length){
        setDefaultFilter(true,true,true,true,false,true);
      }
      
      //entering through Cloud
      //specifies default filter settings when entering through cloud without any filter setting cookies

      if(prodArr.includes("WorkingPapersBundle")){
        setDefaultFilter(
            false,
            prodArr.includes("AnalyticsObject"),
            prodArr.includes("TimeWebSheet"),
            prodArr.includes("tax"),
            true,
            prodArr.includes("WorkingPapersBundle"));
      }
      //entering through Neither
      if(!seGuidsPresent && !prodArr.includes("WorkingPapersBundle")){
        setDefaultFilter(
          true,
          prodArr.includes("AnalyticsObject"), 
          prodArr.includes("TimeWebSheet"),
          prodArr.includes("tax"),
          prodArr.includes("WorkingPapersBundle"),
          prodArr.includes("WorkingPapersBundle"));
      }
    }
    else if(prodList){
      var prodArr = prodList.split(',');
      setFilter(
        seGuidsPresent,
        prodArr.includes("AnalyticsObject"),
        prodArr.includes("TimeWebSheet"),
        prodArr.includes("tax"),
        prodArr.includes("WorkingPapersBundle"),
        prodArr.includes("WorkingPapersBundle"));
    }
    else if(!filtersettings){
      jQuery3_1_1("#filterModal").modal("show");
    }
  });
}


function setDefaultFilter(se,analytics,time,tax,wp,audit){

  $.post("/assets/phpfunctions/productFilter.php",
  {
    'function': 'updateFilter',
    'sefilter': se,
    'analyticsfilter': analytics,
    'timefilter': time,
    'taxfilter': tax,
    'wpfilter': wp,
    'auditfilter': audit,
  }
  ,
  function(data) {
    var productNames = { analytics: "Analytics", time: "Time", se: "SE", wp: "Working Papers" }; 
    var filtersettings = JSON.parse(data);
    var topicExclusiveProduct = $("html").data("mc-conditions");

    for (var product in filtersettings) {
      if(filtersettings[product]=="false"){
        if(topicExclusiveProduct == "Product."+product.toUpperCase() && $(".maincontentarea").is(":visible")){
          $(".maincontentarea").hide();
          $(".rightcol").hide();
          $( ".toccol" ).after( '<div class="col-xs-12 col-lg-6 col-md-8 col-sm-8 filtermsg "> This content is exclusively related to ' + productNames[product] + ' and has been filtered out. Select the <span class="glyphicon glyphicon-filter"></span> icon in the top navigation to modify your filter settings. </div>');
        }
        $('#'+product+'filter').addClass("deselected");
         $("div").find("[data-mc-conditions='Product." + product.toUpperCase() + "']").hide();
         $('.'+product).hide();
      }
      else{
        $('#'+product+'filter').removeClass("deselected");
        $("div").find("[data-mc-conditions='Product." + product.toUpperCase() + "']").show();
        $('.'+product).show();
        if(topicExclusiveProduct == "Product."+product.toUpperCase()){
          $(".maincontentarea").show();
          $(".rightcol").show();
          $(".filtermsg").hide();
        }
      };
    }
  });
}

//this function is called when no filter setting cookies are present and the url contains the 'prod' query string listing all the enabled products
function setFilter(se,analytics,time,tax,wp,audit){

  $.post("/assets/phpfunctions/productFilter.php",
  {
    'function': 'setFilter',
    'sefilter': se,
    'analyticsfilter': analytics,
    'timefilter': time,
    'taxfilter': tax,
    'wpfilter': wp,
    'auditfilter': audit,
}
  ,
  function(data) {
    var productNames = { analytics: "Analytics", time: "Time", se: "SE", wp: "Working Papers" }; 
    var filtersettings = JSON.parse(data);
    var topicExclusiveProduct = $("html").data("mc-conditions");

    for (var product in filtersettings) {
      if(filtersettings[product]=="false"){
        if(topicExclusiveProduct == "Product."+product.toUpperCase() && $(".maincontentarea").is(":visible")){
          $(".maincontentarea").hide();
          $(".rightcol").hide();
          $( ".toccol" ).after( '<div class="col-xs-12 col-lg-6 col-md-8 col-sm-8 filtermsg "> This content is exclusively related to ' + productNames[product] + ' and has been filtered out. Select the <span class="glyphicon glyphicon-filter"></span> icon in the top navigation to modify your filter settings. </div>');
        }
        $('#'+product+'filter').addClass("deselected");
         $("div").find("[data-mc-conditions='Product." + product.toUpperCase() + "']").hide();
         $('.'+product).hide();
      }
      else{
        $('#'+product+'filter').removeClass("deselected");
        $("div").find("[data-mc-conditions='Product." + product.toUpperCase() + "']").show();
        $('.'+product).show();
        if(topicExclusiveProduct == "Product."+product.toUpperCase()){
          $(".maincontentarea").show();
          $(".rightcol").show();
          $(".filtermsg").hide();
        }
      };
    }
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
