module.exports = () => {
    String.prototype.replaceAll = function (strReplace, strWith) {
        // See http://stackoverflow.com/a/3561711/556609
        var esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        var reg = new RegExp(esc, 'ig');
        return this.replace(reg, strWith);
      };

      var routeParams = window.location.href.split("/");
      var product = routeParams[3];
      var version = routeParams[4];
      
      var accordianID = window.location.hash.replaceAll('#CSHID=', '');
      accordianID = accordianID.split("?")[0];

      var cshid = window.location.href.split("#")[1];
      
      $.ajax({
        type: "GET",
        url: "/documentation_files/" + product + "/" + version + "/" + "csh_redirect.xml",
        dataType: "xml",
        success: function (xml) {
          url = window.location.href.split("?")[0];
          $(xml).find("row").each(function () {
            if ($(this).find("InlineHelpLink").text().search(cshid) !== -1 && $(this).find("InlineHelpLink").text().search(accordianID) !== 0 && window.location.hash) {
                        window.location.replace($(this).find("Redirectto").text());
              return false;
            }
          });
        }
      });
      
      $(document).ready(function () {
        if (!accordianID) {
          accordianID = "About_WebApps";
        }
        $("#" + accordianID).addClass("in");
        $("#" + accordianID).prev("div.reverse").addClass("redreverse");
        $("body, html").animate({
          scrollTop: $("#" + accordianID).offset().top - 100
        }, 600);
      });
      


};
