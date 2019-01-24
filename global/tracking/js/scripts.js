$(document).ready(function() {
  var href = window.location.href;
  console.log(href);
  switch (href) {
    case "https://www.teacollection.com/":
    case "https://www.teacollection.com/girls-clothing/new-arrivals":
    case "https://www.teacollection.com/boys-clothing/new-arrivals":
    case "https://www.teacollection.com/tween-girls-clothing/favorites/new-arrivals":
    case "https://www.teacollection.com/baby-girl-clothes/new-arrivals":
    case "https://www.teacollection.com/baby-boy-clothes/new-arrivals":
    case "https://www.teacollection.com/swimwear":
    case "https://www.teacollection.com/pajamas":
    case "https://www.teacollection.com/tee-shop":
    case "https://www.teacollection.com/cms/hello-new-friend/hello-new-friend/1.html":
      console.log('do nothing for this page');
      break;
    default:
      var title = window.document.title;
      title = title.split('|');
      $('a, area').attr('data-page', title[0]);
  }
});