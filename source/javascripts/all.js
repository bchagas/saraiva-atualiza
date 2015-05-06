SaraivaAtualiza = {} || SaraivaAtualiza;

SaraivaAtualiza = {
  tooltip: function() {
    $('.tooltip').tooltipster({
      position: "bottom"
    });
  },

  setContentHeight: function(items) {
    var elements = $(items),
        sizes = [];

    _.map(elements, function(el, index) {
      sizes.push($(el).height());
    });

    height = Math.max.apply(Math, sizes);

    _.map(elements, function(el, index) {
      $(el).height(height);
    });
  },

  accordion: function(items) {
    var elements = $(".privacy-policy li > span");
    _.map(elements, function(el) {
      $(el).on("click", function() {
        var item = $(this).parent("li"),
            icon = item.find("i");
            content = item.find("ol");

        item.toggleClass("open");

        if(item.attr("class") === "open") {
          icon.attr("class", "fa fa-chevron-up");
        } else {
          icon.attr("class", "fa fa-chevron-down");
        }

        content.slideToggle();
      });
    });
  },

  mobileNavigation: function(menu) {
    pageHeight = $("body").height();
    menu = $(menu);
    page = $(".page");

    menu.css({ height: pageHeight, left: -menu.width() });

    window.addEventListener('resize', function() {
      if ($(".mobile-navigation").offset().left === 0) {
        menu.css({ height: pageHeight });
        page.css({ left: menu.width() - 22 });
      } else {
        menu.css({ height: pageHeight, left: -menu.width() });
      }
    }, true);


    $(".show-navigation").click(function(){
      if($(".search").is(":visible")){
        $(".search").hide();
        $(".show-search").removeAttr("style");
      }

      if ($(".mobile-navigation").offset().left === 0) {
        page.animate({
          left: 0
        }, 500, function(){
          $(this).removeAttr("style");
        }.bind(this));

        menu.animate({
          left: -menu.width()
        });

      } else {
        $("html, body").css({"overflow-x": "hidden"});

        page.animate({
          left: menu.width() - 22
        }, 500, function(){
          $(this).css({
            "background-color": "#1075AE",
            color: "white"
          });
        }.bind(this));

        menu.animate({
          left: -menu.width() + menu.width()
        });
      }
    });

    $(".show-search").click(function(){
      search = $(".search");

      if(search.is(":visible")) {
        $(this).removeAttr("style");
        search.animate({
          opacity: 0
        }, 500, function(){
          $(this).hide();
        });

      } else {
        search.show();

        $(this).css({
          "background-color": "#1075AE",
          color: "white",
          "padding-bottom": "20px"
        });

        search.animate({
          opacity: 1
        });
      }
    });
  }
};
