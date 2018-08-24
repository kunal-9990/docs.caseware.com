$(document).ready(function(){
  $.post("/assets/phpfunctions/recent.php", {'url': window.location.href, "title": document.title},
  function(data) {
    var text = data;
    var obj = JSON.parse(text);
    var html='<p class="rightcoltitle">Recently Viewed</p>';
    for(var i=1;i<obj.length;i++){
        html += '<a href="'+obj[i]['url']+'"><li class="recentlink">'+obj[i]['title']+'</li></a>';
    }
    if ($("#recentpages").length){
      $("#recentpages").append(html);
    }
  });
});
