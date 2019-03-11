console.log('monetate code');

$(document).ajaxComplete(function(e, x, s) {
  console.log('from monetate');
  console.log(e, x, s);
  if (s.url == "/?type=page&page=banner_ad&zone[]=sitewide_message&zone[]=mega_girl&zone[]=mega_boy&zone[]=mega_tween&zone[]=mega_baby_girl&zone[]=mega_baby_boy&zone[]=mega_newborn&zone[]=mega_sale&zone[]=mega_sale&zone[]=mega_sale&zone[]=mega_sale&zone[]=mega_sale&zone[]=mega_sale&zone[]=sitewide_banner&zone[]=homepage&zone[]=global_css&zone[]=footer&request_page=index&request_page_id=") {
    console.log('monetate working');
    console.log('monetate remove .hp');
    $('div[data-zone="homepage"]').find('.hp').remove();
    console.log('monetate remove .c8-2');
    $('div[data-zone="homepage"]').find('.c8-2').remove();
    console.log('monetate remove style');
    $('div[data-zone="homepage"]').find('style').remove();
    console.log('monetate remove script');
    $('div[data-zone="homepage"]').find('script').remove();
    console.log('monetate remove link');
    $('div[data-zone="homepage"]').find('link').remove();
  }

});

$(document).ready(function() {
  setTimeout(function() {
    console.log('wait half a sec');
    console.log('monetate working');
    console.log('monetate remove .hp');
    $('div[data-zone="homepage"]').find('.hp').remove();
    console.log('monetate remove .c8-2');
    $('div[data-zone="homepage"]').find('.c8-2').remove();
    console.log('monetate remove style');
    $('div[data-zone="homepage"]').find('style').remove();
    console.log('monetate remove script');
    $('div[data-zone="homepage"]').find('script').remove();
    console.log('monetate remove link');
    $('div[data-zone="homepage"]').find('link').remove();
  }, 500);
});

$('div[data-zone="homepage"]').remove();