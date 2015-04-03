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
  }
};
