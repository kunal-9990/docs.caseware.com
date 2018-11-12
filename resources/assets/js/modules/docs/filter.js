module.exports = () => {
    
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            } 
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function applyFilter(filterSettings){
        console.log("---------------------------------------");
        if (typeof $("html").data("mc-conditions") !== 'undefined') {
            var exclusiveTo = $("html").data("mc-conditions").toLowerCase().replace("product.", "");
        }        
        console.log(exclusiveTo); 
        
        for (var property in filterSettings) {
            if (filterSettings.hasOwnProperty(property)) {
                if(filterSettings[property] == true){
                    $( ".toc__filters--" + property + "-js" ).show();
                    $("." + property).addClass("active-filter");
                    $("div").find("[data-mc-conditions='Product." + property.toUpperCase() + "']").show();
                    if(exclusiveTo && property == exclusiveTo){
                        $('.col-sm-9').show();
                    }
                    console.log("showing:" + property);
                    
                }
                else{
                    $( ".toc__filters--" + property + "-js" ).hide();
                    $("." + property).removeClass("active-filter");
                    $("div").find("[data-mc-conditions='Product." + property.toUpperCase() + "']").hide();

                    if(exclusiveTo && property == exclusiveTo){
                        $('.col-sm-9').hide();
                    }
                    console.log("hiding:" + property);


                }
            }
        }
        console.log("---------------------------------------");
    }


    function updateFilter(){
        var filterSettings = {
            time: $('.filters__item.time').hasClass("active-filter"),
            se: $('.filters__item.se').hasClass("active-filter"),
            wp: $('.filters__item.wp').hasClass("active-filter"),
            analytics: $('.filters__item.analytics').hasClass("active-filter")
        };

        applyFilter(filterSettings);

        setCookie("filterSettings",  JSON.stringify(filterSettings), 5);

    }


    $(document).on('click', '.filters__item', function(event){
        updateFilter();
    });

    $( document ).ready(function() {
        applyFilter(filterSettings);
    });

    var filterSettings = JSON.parse(getCookie("filterSettings"));

    // applyFilter(filterSettings);

};
