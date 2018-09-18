module.exports = () => {
    const CONTENT_IMAGES = Array.from(document.querySelector('.toc-content').querySelectorAll('img'));
    const MODAL_IMAGE = document.querySelector('.image-modal').querySelector('img.image-modal__img');

    function filterImages(imgs) {
        // filter out any images that are icons or CW logos
        return imgs.filter(img => img.src.search('Icons') === -1 && img.src.search('CaseWare_Logos') === -1);
    }

    function toggleImgModalOverLay() {
        const body = document.querySelector('body');
        body.classList.contains('image-modal--shown')
            ? body.classList.remove('image-modal--shown')
            : body.classList.add('image-modal--shown');
    }

    function setImgSrc(img) {
        MODAL_IMAGE.setAttribute('src', img.getAttribute('src'));
        toggleImgModalOverLay();
    }

    const FILTERED_IMAGES = filterImages(CONTENT_IMAGES);

    FILTERED_IMAGES.forEach((img) => {
        img.addEventListener('click', () => setImgSrc(img));
    });
};

/*eslint-disable */
// //append darkedned backdrop to html body, hidden

// $( '<div id="myimgModal" class="imgmodal"><img id="modalimg"><span class="closemodal">&times;</span><div id="caption"></div></div>' ).appendTo( "body" );

// // Get the modal
// var modal = document.getElementById('myimgModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// // var img = document.getElementById('myImg');
// var modalImg = document.getElementById("modalimg");
// var captionText = document.getElementById("caption");

// //add alt text under every image
// $.each($('.documentation').find("img"), function() {
//   var src = $(this).attr('src');
//   if(src.search("Icons")==-1 && src.search("CaseWare_Logos")==-1){
//   var newDiv = document.createElement("div");
//   $(newDiv).addClass("imgalttext");
//   var altText = $(this).attr('alt');
//   $(newDiv).css("text-align","center");
//   $(newDiv).html(altText);
//   $(newDiv).attr('class','divAltText');
//   $(this).after(newDiv);
//   $(this).css("cursor","pointer");
// }
// });
// //add on click functionality to every image
// $(function() {
//   $('.documentation').find("img").on('click', function() {
//     var src = $(this).attr('src');
//    if(src.search("Icons")==-1 && src.search("CaseWare_Logos")==-1){
//     modal.style.display = "block";
//     modalImg.src = $(this).attr('src');
//     captionText.innerHTML = this.alt;
//     }
//   });
// });

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("closemodal")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
// modal.onclick = function() {
//     modal.style.display = "none";
// }

// module.exports = () => {
    
// }
