SaraivaAtualiza = {} || SaraivaAtualiza;

SaraivaAtualiza = {
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

        content.toggle();
      });
    });
  }
};
