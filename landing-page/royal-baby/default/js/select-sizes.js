$('.sizes-container').click(function(e) {
  // console.log(e.target);
  //expand the drop
  if (e.currentTarget.className.indexOf('drop') == -1) {
    $(e.currentTarget).addClass('drop');
  } else {
    $(e.currentTarget).removeClass('drop');
  }

  //change selected li
  // console.log($(e.target).attr('data-sku'));
  if ($(e.target).attr('data-sku') !== undefined) {
    // console.log($(e.currentTarget).find('.selected'));
    $(e.currentTarget).find('.selected').text(e.target.innerText);
    //change the add to bag
    var href = '/?page=item&action=cart&id=' + e.target.dataset.sku;
    $(e.currentTarget.nextElementSibling).attr('href', href);
    $(e.currentTarget.nextElementSibling).removeClass('disabled').addClass('enabled');
  }
});

$('.sizes-container select').change(function(e) {
  console.log('select change');
  // console.log(e);
  var sku = $(this).children('option:selected').attr('data-sku');
  // console.log(sku);
  var href = '/?page=item&action=cart&id=' + sku;
  $(this).closest('.sizes-container').next().attr('href', href);
  $(this).closest('.sizes-container').next().removeClass('disabled').addClass('enabled');
});