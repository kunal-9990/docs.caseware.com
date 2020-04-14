String.prototype.replaceAll = function (strReplace, strWith) {
  // See http://stackoverflow.com/a/3561711/556609
  var esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  var reg = new RegExp(esc, 'ig');
  return this.replace(reg, strWith);
};

var accordianID = window.location.hash.replaceAll('#CSHID=', '');
accordianID = accordianID.split("?")[0];
var hostname = window.location.hostname;
var href = window.location.href;
var yearIndex = href.indexOf('/201');
var year = href.substr(yearIndex);
year = year.substr(0, 6);
var currentLocation = "https://" + hostname + year + "WebApps";

//Temporary redirect until webtime code is fixed to use new link. Apache redirection not possible because detecting the anchor is required.
if (accordianID == "#Engagement_Management_onCloud/Time/Company_Codes/Work_Codes/t_Work_Code_Adding.htm") {
  window.location.replace(currentLocation + "/Setup/Administration-and-Settings/Set-staff-rates-and-work-codes.htm");
}
// if(document.referrer == "https://colqaproxy.caseware.com/demofirm24/webapps/#settings/office365"){
if (document.referrer.search("office365") !== -1) {
  window.location.replace('https://docs.caseware.com/2017/WebApps/24/en/Setup/Environments-and-Configuration/Integrate-productivity-tools-with-Cloud-(Google-Sharepoint-OneDrive).htm#integrate-office-365');
}


$.ajax({
  type: "GET",
  url: "/csh_redirect.xml",
  dataType: "xml",
  success: function (xml) {
    url = window.location.href.split("?")[0];
    $(xml).find("row").each(function () {
      console.log($(this).find("InlineHelpLink").text().search(url));
      if ($(this).find("InlineHelpLink").text().search(url) !== -1 && $(this).find("InlineHelpLink").text().search(accordianID) !== 0 && window.location.hash) {
        console.log("found");
        if($(this).find("Redirectto").text().startsWith("/")){
                  window.location.replace(currentLocation + $(this).find("Redirectto").text());
        }
        else{
                  window.location.replace($(this).find("Redirectto").text());

        }
        return false;
      }
    });
  }
});

$(document).ready(function () {
  // alert(accordianID);
  if (!accordianID) {
    accordianID = "About_WebApps";
  }
  $("#" + accordianID).addClass("in");
  $("#" + accordianID).prev("div.reverse").addClass("redreverse");
  $("body, html").animate({
    scrollTop: $("#" + accordianID).offset().top - 100
  }, 600);
});
