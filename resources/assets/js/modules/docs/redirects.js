module.exports = () => {

  String.prototype.replaceAll = function (strReplace, strWith) {
      // See http://stackoverflow.com/a/3561711/556609
      var esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      var reg = new RegExp(esc, 'ig');
      return this.replace(reg, strWith);
    }; 

    var routeParams = window.location.href.split("/");

    // Uncomment when live!

    // product = routeParams[3];
    // version = routeParams[4]; 
    // lang = routeParams[5]; 

    product = routeParams[4];
    version = routeParams[5]; 
    lang = routeParams[6]; 
    
    var accordianID = window.location.hash.replaceAll('#CSHID=', '');
    if(accordianID.includes("?")){
      accordianID = accordianID.split("?")[0];
    } 

    $.ajax({
      type: "GET",
      url: "/documentation_files/" + product + "/" + version + "/csh_redirect.xml",
      dataType: "xml",
      success: function (xml) {
        url = window.location.href.split("?")[0];
        $(xml).find("row").each(function () {
          if ($(this).find("InlineHelpLink").text().search(accordianID) !== -1 && $(this).find("InlineHelpLink").text().search(accordianID) !== 0 && window.location.hash) {
                      console.log("found");
                      // uncomment when live
                      // var linkPrefix = "/" + product + "/" + version + "/" + lang;
                      var linkPrefix = "/docsmk2/" + product + "/" + version + "/" + lang;
                      window.location.replace(linkPrefix + $(this).find("Redirectto").text());
            return false;
          }
        });
      } 
    });

    $("#"+accordianID).addClass("in");
    $("body, html").animate({
      scrollTop: $("#" + accordianID).offset().top - 100 
    }, 600);  
    
    // $(document).ready(function () {
    //   if (!accordianID) {
    //     accordianID = "About_WebApps";
    //   }
    //   $("#" + accordianID).parent().addClass("in");
    //   $("#" + accordianID).prev("div.reverse").addClass("redreverse");
      
    // });
    // console.log("test");


};