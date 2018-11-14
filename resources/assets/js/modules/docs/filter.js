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
        // console.log("---------------------------------------");
        if (typeof $("html").data("mc-conditions") !== 'undefined') {
            var exclusiveTo = $("html").data("mc-conditions").toLowerCase().replace("product.", "");
        }        
        // console.log(exclusiveTo); 
        
        for (var property in filterSettings) {
            if (filterSettings.hasOwnProperty(property)) {
                if(filterSettings[property] == true){
                    $( ".toc__filters--" + property + "-js" ).show();
                    $("." + property).addClass("is-active");
                    $("." + property).children().children().first().prop('checked', true);

                    $("div").find("[data-mc-conditions='Product." + property.toUpperCase() + "']").show();
                    if(exclusiveTo && property == exclusiveTo){
                        $('.docs__container').show();
                        $('.filtermsg').hide();
                    }
                    // console.log("showing:" + property);
                    
                }
                else{
                    $( ".toc__filters--" + property + "-js" ).hide();
                    $("." + property).removeClass("is-active");
                    $("." + property).children().children().first().prop('checked', false);

                    $("div").find("[data-mc-conditions='Product." + property.toUpperCase() + "']").hide();

                    if(exclusiveTo && property == exclusiveTo){
                        $('.docs__container').hide();
                        $('.filtermsg').show();

                    }
                    // console.log("hiding:" + property);


                }
            }
        }
        // console.log("---------------------------------------");
    }


    function updateFilter(){
        var filterSettings = {
            time: $('.switch-wrap.time').hasClass("is-active"),
            se: $('.switch-wrap.se').hasClass("is-active"),
            wp: $('.switch-wrap.wp').hasClass("is-active"),
            analytics: $('.switch-wrap.analytics').hasClass("is-active"),
            pcr: $('.switch-wrap.pcr').hasClass("is-active"),
            rct: $('.switch-wrap.rct').hasClass("is-active")
        };

        applyFilter(filterSettings);

        setCookie("filterSettings",  JSON.stringify(filterSettings), 5);

    }


    $(document).on('click', '.switch-wrap', function(event){
        updateFilter();
    });


    if(getCookie("filterSettings")){
        var filterSettings = JSON.parse(getCookie("filterSettings"));
    }
    //if no cookies set, enable all and show dropdown
    else{
        $(".switch-wrap").each(function(  ) {
            $( this ).addClass('is-active');
            $( this ).children().children().first().prop('checked', true);
        });
        $("body").addClass("filter-dropdown-is-expanded");
        updateFilter();
    }

    $( document ).ready(function() {
        applyFilter(filterSettings);

    });


};
