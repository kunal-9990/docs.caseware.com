$(document).ready(function(){

  floatTopicContentsRight(".topiccontents","#epiccontents");
  floatSectionRight(".note",".rightcol");
  floatSectionRight(".important",".rightcol");
  floatSectionRight(".bestpractice",".rightcol");
  floatSectionRight(".warning",".rightcol");
  floatSectionRight(".tip",".rightcol");

//this moves the topiccontents <ul> to the right col for workflows
// if ($("#epiccontents").length>0) {
//
//     $("#epiccontents").append('<p class="rightcoltitle rightcolitem">In This Topic</p>');
//     $(".topiccontents").appendTo("#epiccontents");
// }

  });
  function floatSectionRight(sectionType,destinationElement){
    $(document).find(sectionType).each(function(){
      if($(this).parent('.maincontentarea').length && !$(this).hasClass('inline')){

      // $(this).css("background-color","yellow");
      // alert($(this).position().top);
      var top = $(this).position().top;
      var height = $(this).height();
      var $clone = $(this).clone();
      $clone.appendTo(destinationElement);
      $clone.css('position', 'absolute');
      $clone.css('top', (top-height)+"px");
      $clone.css('clear', 'both');
      $clone.addClass('hidesectionright');
      $(this).addClass('hidesectioncenter');
    }
      });
  }

  function floatTopicContentsRight(sectionType,destinationElement){
    $(document).find(sectionType).each(function(){
      $("#epiccontents").append('<p class="rightcoltitle rightcolitem">In This Topic</p>');
      if ($("#epiccontents").length>0) {
      var top = $(this).position().top;
      var height = $(this).height();

      var $clone = $(this).clone();
      $clone.appendTo(destinationElement);
      $clone.addClass('hidesectionright');
      $(this).addClass('hidesectioncenter');
    }

      });
  }
