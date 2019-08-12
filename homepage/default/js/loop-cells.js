//add the url to the cells with images and the alt
$(cells).each(function(i, val) {

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

  if (val.cta3 !== undefined || val.cta4 !== undefined || val.cta5 !== undefined || val.cta6 !== undefined || val.cta7 !== undefined) {
    $(val.cell).find('a.cta3').html(val.cta3.text).attr({
      href: val.cta3.url
    });
    $(val.cell).find('a.cta4').html(val.cta4.text).attr({
      href: val.cta4.url
    });
    $(val.cell).find('a.cta5').html(val.cta5.text).attr({
      href: val.cta5.url
    });
    $(val.cell).find('a.cta6').html(val.cta6.text).attr({
      href: val.cta6.url
    });
    $(val.cell).find('a.cta7').html(val.cta7.text).attr({
      href: val.cta7.url
    });
  }


  //if mobile cell needs extra word in cta like 'shop'
  // for cell 1
  if ($(window).width() < 737) {

    if (val.cell == '.c1') {
      //add the url & alt to <a> with .cta1
      $(val.cell).find('.cta1').text('shop girl');
      //add the url & alt to <a> with .cta2
      $(val.cell).find('.cta2').text('shop boy');
      //add the url & alt to <a> with .cta2
      $(val.cell).find('.cta3').text('shop baby girl');
      //add the url & alt to <a> with .cta2
      $(val.cell).find('.cta4').text('shop baby boy');
      //add the url & alt to <a> with .cta2
      $(val.cell).find('.cta5').text('shop tween');
    }
  }

});