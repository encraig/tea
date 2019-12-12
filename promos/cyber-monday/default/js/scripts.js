$(document).ready(function() {

  //responsive image map
  //$('img[usemap]').rwdImageMaps();

  //array of urls to hide the banners
  const urlArray = [{
      name: 'hp',
      url: '/',
    },
    // {
    // 	name: 'black-friday',
    // 	url: '/black-friday'
    // },
    // {
    // 	name:'sale-page',
    // 	url:'/clothing-sale'
    // },
  ];

  //function to hide or show the banner
  const hideBanners = () => {
    let url = window.location.pathname;

    // $('.the-promo .see-details').fancybox();


    $.each(urlArray, function(i, val) {
      if (url == val.url) {
        $('div[data-zone="sitewide_banner"]').empty();
      }
    });
  };

  //on page load call hideBanners
  hideBanners();

  $('.the-promo .see-details').fancybox();


  $('.close-fancy').click(function(e) {
    // e.preventDefault();
    $.fancybox.close();

  });

});