"use strict";

$(document).ready(function () {
  //-----------------------------------------------------------------------------------------------------
  var getSale = function getSale(url, elem) {
    $.get(url, function (data) {
      var girl = $(data).find('#sidebar-Girl');
      var boy = $(data).find('#sidebar-Boy');
      var babyGirl = $(data).find('#sidebar-Baby-Girl');
      var babyBoy = $(data).find('#sidebar-Baby-Boy');
      var links = [];
      links.push(girl, boy, babyGirl, babyBoy);
      $(elem).append('<ul class="the-list"></ul>');
      $(links).each(function (i, val) {
        var id = $(val).attr('id');
        var header = $(val).find('h2').find('a')[0].outerHTML;
        var list = $(val).find('ul')[0].outerHTML;
        var all = $(val).find('footer').find('a')[0].outerHTML;
        setTimeout(function () {
          list = $(list).append('<li class="view-all">' + all + '</li>');
          list = list[0].outerHTML;
          $(elem + ' ul.the-list').append('<li>' + header + list + '</li>');
        }, 500);
      });
    });
  }; //-----------------------------------------------------------------------------------------------------


  var getSale2 = function getSale2(url, elem) {
    $.get(url, function (data) {
      //$(elem).append('<div class="nav-container"><div class="the-list"><div class="cats"><h2>Category</h2><ul></ul></div></div><div class="nav-img"></div></div>');
      var links = $(data).find('.dept-clothing-sale section');
      $(links).each(function (i, val) {
        var link = $(val).find('h2').find('a');
        var li = $(val).find('li');
        var cat = $(link).html();
        var href = $(link).attr('href');
        var id = $(val).attr('id');
        var name = id.replace('sidebar-', '');
        name = name.replace('-', ' ').toLowerCase(); //make level 2

        $(elem + ' .level-2').append('<li class="' + id + '"><span><a href="' + href + '">' + name + '</a></span></li>'); //append the containers

        $(elem + ' .level-2 .' + id).append('<div class="nav-container"><div class="the-list"><div class="cats"><ul></ul></div></div><div class="nav-img"></div></div>'); //append the list

        $(li).each(function (j, arr) {
          var href = $(arr).find('a').attr('href');
          var cat = $(arr).find('a').text();
          $(elem + ' .level-2 .' + id + ' .nav-container .the-list .cats ul').append('<li><a href="' + href + '">' + cat + '</a></li>');
        }); //$(elem + ' .nav-container .the-list .cats ul').append('<li><a href="'+href+'">'+cat+'</a></li>');
      });
      var saleContent = $(data).find('.sale-content'); // var htmlLink = saleContent.find('#content-block')[0].outerHTML;

      var htmlLink = saleContent.find('a')[0].outerHTML;
      var styleTag = saleContent.prev()[0].outerHTML;
      $('.clothing-sale .nav-container .nav-img').append(styleTag, htmlLink);
      $('.clothing-sale .nav-container .nav-img a img').css('width', '100%'); //change the url of the see what's new on sale

      $('.clothing-sale .nav-container .nav-img #content-block').attr('href', '/clothing-sale');
    });
  }; //-----------------------------------------------------------------------------------------------------


  var getCat = function getCat(url, selector, imgSrc) {
    $.get(url, function (data) {
      var favTitle = $(data).find('#sidebar-Favorites').find('h2').html();
      var favs = $(data).find('#sidebar-Favorites').find('li');
      var catsTitle;
      var cats; //if tween
      // if(url == 'https://www.teacollection.com/tween-girls-clothing'){
      // console.log('its tween');
      // catsTitle = $(data).find('#sidebar-Shop-By-Category').find('h2').html();
      // cats = $(data).find('#sidebar-Shop-By-Category').find('li');
      // console.log(catsTitle, cats);
      // }
      //not tween
      // else {
      // 	catsTitle = $(data).find('#sidebar-Shop-By-Category').find('h2').html();
      // 	cats = $(data).find('#sidebar-Shop-By-Category').find('li');
      // }

      catsTitle = $(data).find('#sidebar-Shop-By-Category').find('h2').html();
      cats = $(data).find('#sidebar-Shop-By-Category').find('li');
      var viewAll = $(data).find('#sidebar-Shop-By-Category').find('footer').find('a');
      var sale = $(data).find('#sidebar-Shop-By-Category').find('.sale').find('a'); // console.log(sale);
      // var elem = url.split('.com/');
      // elem = '.' + elem[1];

      var elem = selector;
      var alt = elem.replace(/-/g, ' ');
      alt = alt.replace('.', ''); //prod

      var baseUrl = 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/header/nav/test2/'; //dev
      // var baseUrl = 'images/v4/';
      // if(viewAll.context !== undefined) {
      // 	viewAll =  viewAll[0].outerHTML;
      // }

      if (viewAll.length !== 0) {
        viewAll = viewAll[0];
      } else {
        viewAll = 0;
      }

      if (sale.length !== 0) {
        sale = sale[0];
      } else {
        sale = 0;
      } // $(elem + ' .level-2-li').append('<div class="nav-container"></div>');


      $(elem).append('<div class="nav-container"></div>'); //IF NOT NEWBORN

      if (url !== 'https://www.teacollection.com/newborn-clothes') {
        //ADD THE IMAGES TO THE DROP DOWN MENU
        $(elem + ' .nav-container').append('<div class="the-list"><div class="favs"><h2>' + favTitle + '</h2><ul></ul></div><div class="cats"><div class="cats-1"><h2>' + catsTitle + '</h2><ul></ul></div><div class="cats-2"><ul></ul></div></div></div><div class="nav-img"><a href="' + url + '?nocache=1"><img src="' + imgSrc + '" alt="' + alt + '" /></a></div>'); //ADD THE LIST TO THE DROP DOWN MENU

        $.each(favs, function (i, val) {
          var text = $(val).find('a').text();
          var url = $(val).find('a').attr('href');
          url = url + '?nocache=1'; // console.log(url, text);

          $(elem + ' .nav-container .the-list .favs ul').append('<li><a href="' + url + '">' + text + '</a></li>');
        }); // $(elem + ' .nav-container .the-list .favs ul').append(favs);
        // $(elem + ' .nav-container .the-list .cats ul').append(cats);
        //ADD THE CATS

        $.each(cats, function (i, val) {
          var text = $(val).find('a').text();
          var url = $(val).find('a').attr('href');
          url = url + '?nocache=1';

          if (i <= 5) {
            $(elem + ' .nav-container .the-list .cats .cats-1 ul').append('<li><a href="' + url + '">' + text + '</a></li>');
          } else {
            $(elem + ' .nav-container .the-list .cats .cats-2 ul').append('<li><a href="' + url + '">' + text + '</a></li>');
          }
        }); // //IF VIEWALL ADD TO TO DROP DOWN MENU

        if (viewAll !== 0) {
          $(elem + ' .nav-container .the-list .cats .cats-2 ul').append('<li class="view-all"><a href="' + viewAll.href + '?nocache=1">' + viewAll.innerText + '</a></li>');
        }
      } else {
        //IF NEWBORN
        //ADD THE IMAGES TO THE DROP DOWN MENU
        $(elem + ' .nav-container').append('<div class="the-list"><div class="favs"><h2>' + favTitle + '</h2><ul></ul></div><div class="nb-gift-shop"><ul></ul></div><div class="cats"><h2>' + catsTitle + '</h2><ul></ul></div></div><div class="nav-img"><a href="' + url + '?nocache=1"><img src="' + imgSrc + '" alt="' + alt + '" /></a></div>'); //ADD THE LIST TO THE DROP DOWN MENU
        // $(elem + ' .nav-container .the-list .cats ul').append(favs,cats);
        // $(elem + ' .nav-container .the-list .favs ul').append(favs);
        //ADD THE FAVS

        $.each(favs, function (i, val) {
          var text = $(val).text();
          var link = $(val).find('a').attr('href');
          link = link + '?nocache=1'; //console.log(text, link);

          if (link == 'https://www.teacollection.com/newborn/gift-ideas?nocache=1') {
            //console.log(link);
            $(elem + ' .nav-container .the-list .nb-gift-shop').prepend('<h2><a href="' + link + '">Gift Shop</a></h2>');
          } else if (text == 'Gifts Under $30' || text == 'Gifts Under $50' || text == 'All Gifts') {
            $(elem + ' .nav-container .the-list .nb-gift-shop ul').append('<li><a href="' + link + '">' + text + '</a></li>');
          } else {
            $(elem + ' .nav-container .the-list .favs ul').append('<li><a href="' + link + '">' + text + '</a></li>');
          }
        }); //ADD THE CATS

        $.each(cats, function (i, val) {
          var text = $(val).find('a').text();
          var url = $(val).find('a').attr('href');
          url = url + '?nocache=1';
          $(elem + ' .nav-container .the-list .cats ul').append('<li><a href="' + url + '">' + text + '</a></li>');
        }); // $(elem + ' .nav-container .the-list .cats ul').append(cats);
        // //IF VIEWALL ADD TO TO DROP DOWN MENU

        if (viewAll !== 0) {
          $(elem + ' .nav-container .the-list .cats ul').append('<li class="view-all"><a href="' + viewAll.href + '?nocache=1">' + viewAll.innerText + '</a></li>');
        }
      } //IF SALE ADD TO TO DROP DOWN MENU


      if (sale !== 0) {
        $(elem + ' .nav-container .the-list .cats .cats-2 ul').append('<li class="the-sale"><a href="' + sale.href + '?nocache=1">' + sale.innerText + '</a></li>');
      }
    });
  }; //-----------------------------------------------------------------------------------------------------
  //tween clothing


  getCat('https://www.teacollection.com/tween-girls-clothing', '.tween-cats', 'https://s.tea-global.net/mas_assets/cache/image/2/b/8/7/416x416-178302.Jpg'); //girls clothing

  getCat('https://www.teacollection.com/girls-clothing/new-arrivals', '.girl-cats', 'https://s.tea-global.net/mas_assets/cache/image/2/d/8/2/416x416-186400.Jpg'); //boys clothing

  getCat('https://www.teacollection.com/boys-clothing/new-arrivals', '.boy-cats', 'https://s.tea-global.net/mas_assets/cache/image/2/d/8/1/416x416-186387.Jpg'); //baby girl clothes

  getCat('https://www.teacollection.com/baby-girl-clothes/new-arrivals', '.baby-girl-cats', 'https://s.tea-global.net/mas_assets/cache/image/2/d/7/b/416x416-186301.Jpg'); //baby boy clothes

  getCat('https://www.teacollection.com/baby-boy-clothes/new-arrivals', '.baby-boy-cats', 'https://s.tea-global.net/mas_assets/cache/image/2/d/7/d/416x416-186321.Jpg'); //newborn clothes

  getCat('https://www.teacollection.com/newborn-clothes', '.newborn-cats', 'https://s.tea-global.net/mas_assets/cache/image/2/6/8/e/416x416-157920.Jpg'); //sale
  //the original
  // getSale('https://www.teacollection.com/sale/girls-clothing/view-all', '.clothing-sale')
  //the revised

  getSale2('https://www.teacollection.com/clothing-sale?nocache=12', '.clothing-sale'); // inspiration
  // var footerContent = $('#cell-con').clone();
  // $('.inspiration').append(footerContent);
  // var inspDiv = $('.inspiration #cell-con div');
  // $(inspDiv).each(function(i,val){
  // 	//get only the top level of div
  // 	if($(val).attr('class') !== 'cell-con-image'){
  // 		//move the image
  // 		var img = $(val).find('.cell-con-image');
  // 		$(val).find('.header').prepend(img);
  // 	}
  // });
});
//# sourceMappingURL=nav1.js.map
