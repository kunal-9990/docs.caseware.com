$(document).ready(function(){




  if ($("#vid").length>0) {

    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    startTime= $('#vid').attr('src');
    startTime = startTime.split('start=')[1];

    var player;
    onYouTubeIframeAPIReady = function () {
      player = new YT.Player('videocontainer', {
        allowfullscreen: 'allowfullscreen',
        height: '100%',
        width: '100%',
        videoId: $('#vid').attr('src').split('/').pop(),  // youtube video id
        playerVars: {
          'autoplay': 0,
          'rel': 0,
          'showinfo': 1

        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width < 1330){
      $("#vidtitle").hide();
      $("h1").first().appendTo("#topicvid");
      $("#videocontainer").appendTo("#topicvid");
      $("#videocontainer").removeClass("rightcolitem");
      $("#videocontainer").css("width","865px");
      $(".maincontentarea").css("margin-top","50px");
      // $(".maincontentarea").css("margin-top","130px");
      // $(".rightcol").css("margin-top","115px");
      $("#topicvid").fadeIn('slow');
    }

    //$("#videocontainer").append(player.getVideoData().title);
    function onPlayerReady(event) {
      // $("#videocontainer").append(player.getVideoData().title);
      $("#vidtitle").text(player.getVideoData().title);
      if($("#videocontainer").parent().attr("id") == "topicvid" && width >= 1330){
        if(startTime){
          event.target.seekTo(parseInt(startTime));
        }
        event.target.playVideo();
      }
    }

    onPlayerStateChange = function (event) {
      // if (event.data == YT.PlayerState.ENDED) {
      //   $('#videocontainer').hide();
      // }
      if (event.data == YT.PlayerState.PLAYING && $("#videocontainer").parent().attr("id") != "topicvid") {
        $("#vidtitle").hide();
        $("h1").first().appendTo("#topicvid");
        $("#videocontainer").appendTo("#topicvid");
        $("#videocontainer").removeClass("rightcolitem");
        $("#videocontainer").css("width","865px");
        $(".maincontentarea").css("margin-top","50px");
        // $(".maincontentarea").css("margin-top","130px");
        // $(".rightcol").css("margin-top","115px");
        $("#topicvid").fadeIn('slow');
      }
    }
  }
});
