function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$("#email").keyup(function(event) {
  if (event.keyCode == 13) {
    $("#submit").click();
  }
});

//clicking a download link will set a global variable as the filename.
//The function inside the modal will reference this variable.
//This is necessary for cases where there are multiple downloads available on a page.

var fileToDownload;
$(".downloadLink").click(function() {
  window.fileToDownload = $(this).attr("filename");
  console.log("fileToDownload: " + fileToDownload);
});
$("#downloadLink").click(function() {
  window.fileToDownload = $(this).attr("filename");
  console.log("fileToDownload: " + fileToDownload);

});

function downloadFile() {
  var filename = fileToDownload;
  // var filename = document.getElementById("downloadLink").getAttribute("filename");
  // filename = filename.replace(/\s/g, '');
  var textValue = $("#email").val();

  if (validateEmail(textValue)) {
    $(".modalmaintext").text("Thank you, your download has now started.");
    $(".modalsubtext").hide();
    $(".emailmodalinputlabel").hide();
    $(".modalnoemail").hide();
    $("#email").hide();
    $("#emailerrormsg").hide();
    setTimeout(function() {
      $("body").removeClass("modal-open");
      $(".modal").fadeOut();
      $(".modal-backdrop").fadeOut();
    }, 1500);

    if ($("#submit").text() == "Subscribe") {
      $.post(
        "/assets/phpfunctions/email.php",
        {
          page: window.location.href,
          title: document.title,
          email: textValue,
          file: filename
        },
        function(data) {}
      );
      console.log("test");
    }
    //download the file
    // $("#submit").text("Download");
    // var file_path = 'http://docs.caseware.com/Downloads_FakeUrl/'+filename;
    // var a = document.createElement('A');
    // a.href = file_path;
    // a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);

    //download the file
    $("#submit").text("Download");
    var url = "https://docs.caseware.com/Resources/Downloads/" + filename;
    console.log(url);
    var n = 5;
    var save = document.createElement("a");
    save.href = url;
    save.target = "_blank";
    // save.download = 'Image no '+n+'.jpeg' || url;
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent(
      "click",
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
    save.dispatchEvent(event);
  } else {
    $("#emailerrormsg").text("Invalid email format.");
  }
}

function downloadFilenoemail() {
  var filename = fileToDownload;
  // var filename = document.getElementById("downloadLink").getAttribute("filename");
  // filename = filename.replace(/\s/g, '');

  $(".modalmaintext").text("Thank you, your download has now started.");
  $(".modalsubtext").hide();
  $(".emailmodalinputlabel").hide();
  $(".modalnoemail").hide();
  $("#email").hide();
  $("#emailerrormsg").hide();

  setTimeout(function() {
    $("body").removeClass("modal-open");
    $(".modal").fadeOut();
    $(".modal-backdrop").fadeOut();
  }, 1500);
  if ($("#submit").text() == "Subscribe") {
    $.post(
      "/assets/phpfunctions/email.php",
      { page: window.location.href, title: document.title, file: filename },
      function(data) {}
    );
  }

  //download the file
  // $("#submit").text("Download");
  // $("#submit").attr("onclick","downloadFilenoemail()");
  // var file_path = 'http://docs.caseware.com/Downloads_FakeUrl/'+filename;
  // var a = document.createElement('A');
  // a.href = file_path;
  // a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
  // document.body.appendChild(a);
  // a.click();
  // document.body.removeChild(a);
  $("#submit").attr("onclick", "downloadFilenoemail()");

  $("#submit").text("Download");
  var url = "https://docs.caseware.com/Resources/Downloads/" + filename;
  console.log(url);

  var n = 5;
  var save = document.createElement("a");
  save.href = url;
  save.target = "_blank";
  // save.download = 'Image no '+n+'.jpeg' || url;
  var event = document.createEvent("MouseEvents");
  event.initMouseEvent(
    "click",
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  save.dispatchEvent(event);
}
