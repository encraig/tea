var addUrls = function(arr) {
  $.each(arr, function(i, val) {
    $(val.elem).attr('href', val.url).text(val.text);
  });
};