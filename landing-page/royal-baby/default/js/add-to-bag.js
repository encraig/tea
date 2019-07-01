$('.add-to-bag').click(function(e) {
  // console.log(e);
  var classes = $(this).attr('class');
  e.preventDefault();
  if (classes.indexOf('disabled') == -1) {
    // alert('let us shop');
    //hide the add to bag button and dropdown
    $(e.currentTarget).hide();
    $(e.currentTarget.previousElementSibling).hide();
    //show the adding to bag message
    $(e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling).show();
    //make the $.post
    $.post(e.currentTarget.href, function(data) {
      // console.log('success');
      //hide the add to bag message
      $(e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling).hide();
      //show the success message
      $(e.currentTarget.previousElementSibling.previousElementSibling).show();
      //wait 500ms and show the add to bag button and dropdown again
      setTimeout(function() {
        //hide the success message
        $(e.currentTarget.previousElementSibling.previousElementSibling).hide();
        //show the add to bag button and dropdown
        $(e.currentTarget.previousElementSibling).show();
        $(e.currentTarget).show();
        //trigger the shopping bag icon
        $('#view-cart').trigger('mouseover');
      }, 1000)
    });
  }
});