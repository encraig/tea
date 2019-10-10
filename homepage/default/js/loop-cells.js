//add the url to the cells with images and the alt
$(cells).each(function(i, val) {

  if (i == 0) {
    // console.log(i, val);
    $.each(val.slides, function(j, obj) {
      //desktop
      $(val.cell + ' ' + obj.name).find('.m-image').attr('href', obj.imgUrl);
      $(val.cell + ' ' + obj.name).find('.cta1').attr('href', obj.cta1.url).text(obj.cta1.text);
      $(val.cell + ' ' + obj.name).find('.cta2').attr('href', obj.cta2.url).text(obj.cta2.text);
      $(val.cell + ' ' + obj.name).find('.cta3').attr('href', obj.cta3.url).text(obj.cta3.text);
      $(val.cell + ' ' + obj.name).find('.cta4').attr('href', obj.cta4.url).text(obj.cta4.text);
      var thealt = $(val.cell + ' ' + obj.name).find('p').text();
      $(val.cell + ' ' + obj.name).find('.m-image').find('img').attr('alt', thealt);
      //mobile
      $(obj.name).find('.m-image').attr('href', obj.imgUrl);
      $(obj.name).find('.cta1').attr('href', obj.cta1.url).text(obj.cta1.text);
      $(obj.name).find('.cta2').attr('href', obj.cta2.url).text(obj.cta2.text);
      $(obj.name).find('.cta3').attr('href', obj.cta3.url).text(obj.cta3.text);
      $(obj.name).find('.cta4').attr('href', obj.cta4.url).text(obj.cta4.text);
      var thealt = $(obj.name).find('p').text();
      $(obj.name).find('.m-image').find('img').attr('alt', thealt);
    });
  } else {

    //add the url & alt to <a> with <img>
    $(val.cell).find('a').has('img').attr({
      href: val.img.url
    });
    //add the url & alt to <a> with .cta1
    $(val.cell).find('a.cta1').html(val.cta1.text).attr({
      href: val.cta1.url
    });
    //add the url & alt to <a> with .cta2
    $(val.cell).find('a.cta2').html(val.cta2.text).attr({
      href: val.cta2.url,
    });

    if (val.cta3 !== undefined || val.cta4 !== undefined || val.cta5 !== undefined) {
      $(val.cell).find('a.cta3').html(val.cta3.text).attr({
        href: val.cta3.url
      });
      $(val.cell).find('a.cta4').html(val.cta4.text).attr({
        href: val.cta4.url
      });
      $(val.cell).find('a.cta5').html(val.cta5.text).attr({
        href: val.cta5.url
      });

    }
  }

  //if mobile cell needs extra word in cta like 'shop'
  // for cell 1
  if ($(window).width() < 737) {

    if (val.cell == '.c1') {
      //add the url & alt to <a> with .cta1
      $('.zero').find('.cta1').text('girl new arrivals');
      //add the url & alt to <a> with .cta2
      $('.zero').find('.cta2').text('boy new arrivals');
    }
  }

});