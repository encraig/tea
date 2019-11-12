const addUrls = (arr) => {
  $.each(arr, function(i, val) {
    $(val.elem).attr('href', val.url).html(val.text);
  });
};