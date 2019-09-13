var addTracking = function(elem, id) {
  var a = $(elem);
  $.each(a, function(i, val) {
    $(val).addClass('hp-url').attr({
      'data-page': 'home page',
      'id': id
    });
  })
};

for (i = 1; i < 9; i++) {
  addTracking('.hp .c' + i + ' a', 'c' + i);
}