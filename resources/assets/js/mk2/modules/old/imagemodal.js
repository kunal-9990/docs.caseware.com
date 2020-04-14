//append darkedned backdrop to html body, hidden

$( '<div id="myimgModal" class="imgmodal"><img id="modalimg"><span class="closemodal">&times;</span><div id="caption"></div></div>' ).appendTo( "body" );
// $( '<div id="myModal" class="modal"><span class="close">&times;</span><div id="caption"></div></div>' ).appendTo( "body" );

// Get the modal
var modal = document.getElementById('myimgModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
var modalImg = document.getElementById("modalimg");
var captionText = document.getElementById("caption");

//add alt text under every image
$.each($('.maincontentarea').find("img"), function() {
  var src = $(this).attr('src');
  if(src.search("Icons")==-1 && src.search("CaseWare_Logos")==-1){
  var newDiv = document.createElement("div");
  $(newDiv).addClass("imgalttext");
  var altText = $(this).attr('alt');
  $(newDiv).css("text-align","center");
  $(newDiv).html(altText);
  $(newDiv).attr('class','divAltText');
  $(this).after(newDiv);
  $(this).css("cursor","pointer");
  $(this).css("margin-bottom","20px");
}
});
//add on click functionality to every image
$(function() {
  $('.maincontentarea').find("img").on('click', function() {
    var src = $(this).attr('src');
   if(src.search("Icons")==-1 && src.search("CaseWare_Logos")==-1){
    modal.style.display = "block";
    modalImg.src = $(this).attr('src');
    captionText.innerHTML = this.alt;
    }
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closemodal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
modal.onclick = function() {
    modal.style.display = "none";
}
