/* eslint-disable */

module.exports = () => {

    $(document).on('click', '.filters__item', function(event){
        updateFilter();
      });

    function updateFilter(){


        $('.test').hide();
    // $.post("/assets/phpfunctions/productFilter.php",
    // {
    //     'function': 'updateFilter',
    //     'sefilter': !$('#sefilter').hasClass("deselected"),
    //     'analyticsfilter': !$('#analyticsfilter').hasClass("deselected"),
    //     'timefilter': !$('#timefilter').hasClass("deselected"),
    //     'taxfilter': !$('#taxfilter').hasClass("deselected"),
    //     'wpfilter': !$('#wpfilter').hasClass("deselected"),
    //     'auditfilter': !$('#auditfilter').hasClass("deselected"),
    // }
    // ,
    // function(data) {
    //     var productNames = { analytics: "Analytics", time: "Time", se: "SE", wp: "Working Papers" }; 
    //     var filtersettings = JSON.parse(data);
    //     var topicExclusiveProduct = $("html").data("mc-conditions");
    //     for (var product in filtersettings) {
    //     // check if the property/key is defined in the object itself, not in parent
    //     if(filtersettings[product]=="false"){
    //         if(topicExclusiveProduct == "Product."+product.toUpperCase() && $(".maincontentarea").is(":visible")){
    //         $(".maincontentarea").hide();
    //         $(".rightcol").hide();
    //         $( ".toccol" ).after( '<div class="col-xs-12 col-lg-6 col-md-8 col-sm-8 filtermsg "> This content is exclusively related to ' + productNames[product] + ' and has been filtered out. Select the <span class="glyphicon glyphicon-filter"></span> in the top navigation to modify your filter settings. </div>');
    //         }
    //         $("div").find("[data-mc-conditions='Product." + product.toUpperCase() + "']").hide();
    //         $('.'+product).hide();
    //     }
    //     else{
    //         // alert(product+"="+filtersettings[product]);
    //         $("div").find("[data-mc-conditions='Product." + product.toUpperCase() + "']").show();
    //         $('.'+product).show();
    //         if(topicExclusiveProduct == "Product."+product.toUpperCase()){
    //         $(".maincontentarea").show();
    //         $(".rightcol").show();
    //         $(".filtermsg").hide();
    //         }
    
    //     };
    //     }
    
    // });
    }


};
