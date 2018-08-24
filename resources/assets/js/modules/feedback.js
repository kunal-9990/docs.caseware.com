function feedback(val){
  $.post("/assets/phpfunctions/feedback.php", {'page': window.location.href, "fb": val, "title": document.title},
  function(data) {
    [].forEach.call(document.querySelectorAll('.feedbackbutton'), function (el) {
      el.style.visibility = 'hidden';
    });
    $("#feedbackmessage").text("Thanks for the feedback!");
    setTimeout(function () {$("#feedbackbox").fadeOut("slow");}, 1000);

  });
}
