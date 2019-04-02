module.exports = () => {
  //used for filter query string params
  function getUrlVars() {
    if (window.location.href.indexOf("?") != -1) {
      var vars = [],
        hash;
      var hashes = window.location.href
        .slice(window.location.href.indexOf("?") + 1)
        .split("&");
      for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split("=");
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
    }
    return vars;
  }

  var getQueryString = function(field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp("[?&]" + field + "=([^&#]*)", "i");
    var string = reg.exec(href);
    return string ? string[1] : null;
  };

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function enableFilter(prod) {
    $("." + prod).addClass("is-active");
    $("." + prod)
      .children()
      .children()
      .prop("checked", true);
  }

  function disableFilter(prod) {
    $("." + prod).removeClass("is-active");
    $("." + prod)
      .children()
      .children()
      .prop("checked", false);
  }

  function applyFilter(filterSettings) {
    if (typeof $("html").data("mc-conditions") !== "undefined") {
      var exclusiveTo = $("html")
        .data("mc-conditions")
        .toLowerCase()
        .replace("product.", "");
    }

    for (var property in filterSettings) {
      if (filterSettings.hasOwnProperty(property)) {
        if (filterSettings[property] == true) {
          $(".toc__filters--" + property + "-js").show();
          enableFilter(property);

          $("div")
            .find(
              "[data-mc-conditions='Product." + property.toUpperCase() + "']"
            )
            .show();
          if (exclusiveTo && property == exclusiveTo) {
            $(".docs__container").show();
            $(".filtermsg").hide();
          }
        } else {
          $(".toc__filters--" + property + "-js").hide();
          disableFilter(property);

          $("div")
            .find(
              "[data-mc-conditions='Product." + property.toUpperCase() + "']"
            )
            .hide();

          if (exclusiveTo && property == exclusiveTo) {
            $(".docs__container").hide();
            $(".filtermsg").show();
          }
        }
      }
    }
  }

  function updateFilter() {
    var filterSettings = {
      time: $(".switch-wrap.time:not(.mobile)").hasClass("is-active"),
      se: $(".switch-wrap.se:not(.mobile)").hasClass("is-active"),
      wp: $(".switch-wrap.wp:not(.mobile)").hasClass("is-active"),
      analytics: $(".switch-wrap.analytics:not(.mobile)").hasClass("is-active"),
      pcr: $(".switch-wrap.pcr:not(.mobile)").hasClass("is-active"),
      rct: $(".switch-wrap.rct:not(.mobile)").hasClass("is-active")
    };

    applyFilter(filterSettings);

    setCookie("filterSettings", JSON.stringify(filterSettings), 5);
  }

  function updateFilterMobile() {
    var filterSettings = {
      time: $(".switch-wrap.time.mobile").hasClass("is-active"),
      se: $(".switch-wrap.se.mobile").hasClass("is-active"),
      wp: $(".switch-wrap.wp.mobile").hasClass("is-active"),
      analytics: $(".switch-wrap.analytics.mobile").hasClass("is-active"),
      pcr: $(".switch-wrap.pcr.mobile").hasClass("is-active"),
      rct: $(".switch-wrap.rct.mobile").hasClass("is-active")
    };

    applyFilter(filterSettings);

    setCookie("filterSettings", JSON.stringify(filterSettings), 5);
  }

  $(document).on("click", ".switch-wrap:not(.mobile)", function(event) {
    updateFilter();
  });

  $(document).on("click", ".switch-wrap.mobile", function(event) {
    updateFilterMobile();
  });

  var prodList = getQueryString("prod");

  if (getCookie("filterSettings")) {
    var filterSettings = JSON.parse(getCookie("filterSettings"));
  } else if (prodList) {
    var prodArr = prodList.split(",");
    if (prodArr.includes("WorkingPapersBundle")) {
      var filterSettings = {
        time: prodArr.includes("TimeWebSheet"),
        se: false,
        wp: true,
        analytics: prodArr.includes("AnalyticsObject"),
        pcr: true,
        rct: true
      };
    }
    //entering through Neither
    if (!prodArr.includes("WorkingPapersBundle")) {
      var filterSettings = {
        time: prodArr.includes("TimeWebSheet"),
        se: true,
        wp: prodArr.includes("WorkingPapersBundle"),
        analytics: prodArr.includes("AnalyticsObject"),
        pcr: true,
        rct: true
      };
    }
  } else {
    $(".switch-wrap").each(function() {
      $(this).addClass("is-active");
      $(this)
        .children()
        .children()
        .first()
        .prop("checked", true);
    });
    $("body").addClass("filter-dropdown-is-expanded");
    updateFilter();
  }

  $(document).ready(function() {
    applyFilter(filterSettings);
  });

  // ----------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------
};
