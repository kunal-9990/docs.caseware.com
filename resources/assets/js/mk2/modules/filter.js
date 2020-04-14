module.exports = () => {
    // function setCookie(cname, cvalue, exdays) {
    //     var d = new Date();
    //     d.setTime(d.getTime() + (exdays*24*60*60*1000));
    //     var expires = "expires="+ d.toUTCString();
    //     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // }

    // function getCookie(cname) {
    //     var name = cname + "=";
    //     var decodedCookie = decodeURIComponent(document.cookie);
    //     var ca = decodedCookie.split(';');
    //     for(var i = 0; i <ca.length; i++) {
    //         var c = ca[i];
    //         while (c.charAt(0) == ' ') {
    //             c = c.substring(1);
    //         } 
    //         if (c.indexOf(name) == 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // }

    // function applyFilter(filterSettings){
    //     console.log("---------------------------------------");
    //     for (var property in filterSettings) {
    //         if (filterSettings.hasOwnProperty(property)) {
    //             if(filterSettings[property] == true){
    //                 $( ".toc__filters--" + property + "-js" ).show();
    //                 $("." + property).addClass("active-filter");
    //                 console.log("showing:" + property);  
    //             }
    //             else{
    //                 $( ".toc__filters--" + property + "-js" ).hide();
    //                 $("." + property).removeClass("active-filter");
    //                 console.log("hiding:" + property);
    //             }
    //         }
    //     }
    //     console.log("---------------------------------------");
    // }

    // // var filterSettings = JSON.parse(getCookie("filterSettings"));

    // var filterSettings = {
    //     time: $('.filters__item.time').hasClass("active-filter"),
    //     se: $('.filters__item.se').hasClass("active-filter"),
    //     wp: $('.filters__item.wp').hasClass("active-filter"),
    //     analytics: $('.filters__item.analytics').hasClass("active-filter")
    // };

    // applyFilter(filterSettings);

    // setCookie("filterSettings",  JSON.stringify(filterSettings), 5);

};
