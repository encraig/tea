$(document).ready(function() {
  const bf = $('div[data-zone="black_friday_landing"]');

  $('.site-content').prepend(bf);

  const url = window.location.pathname;

  var bfCat = window.location.pathname;
  bfCat = bfCat.split('/')[2];

  var html;

  if (url == "/black-friday") {
    $('.shop-all-cats').show();
  } else if (bfCat == "newborn") {
    html = `
      <a href="/black-friday/newborn" class="newborn-bf">shop all</a>
      <a href="/black-friday/newborn/12" class="newborn-bf">$12 <span>styles</span></a>
      <a href="/black-friday/newborn/15" class="newborn-bf">$15 <span>styles</span></a>`;

    $('.shop-all-cats .bf-desktop, .shop-all-cats .bf-mobile').children().remove();
    $('.shop-all-cats .bf-desktop, .shop-all-cats .bf-mobile').addClass('price-buckets').append(html);
    $('.shop-all-cats').show();

  } else {

    html = `
      <a href="/black-friday/${bfCat}/">shop all</a>
      <a href="/black-friday/${bfCat}/10">$10<span> styles</span></a>
      <a href="/black-friday/${bfCat}/12">$12<span> styles</span></a>
      <a href="/black-friday/${bfCat}/15">$15<span> styles</span></a>
      <a href="/black-friday/${bfCat}/20">$20<span> styles</span></a>
      `;

    $('.shop-all-cats .bf-desktop, .shop-all-cats .bf-mobile').children().remove();
    $('.shop-all-cats .bf-desktop, .shop-all-cats .bf-mobile').addClass('price-buckets').append(html);
    $('.shop-all-cats').show();

  }



});