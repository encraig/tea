"use strict";

$(document).ready(function () {
  //make copy of new nav for sticky header
  var copy = $('header#new-version').clone(); //add the copy of new nav to the sticky header

  $('#new-sticky-header.version2').append(copy); //if logged in new sticky header click to show the dropdown
  // var member = $('#new-sticky-header').find('#welcome-member').find('span').find('a');
  // $(member).click(function(e){
  // 	e.preventDefault();
  // 	$('.popup-member').toggle();
  // });
  //close the drop down if logged in
  // var closeMember = $('#new-sticky-header').find('#welcome-member').find('.popup-member').find('.close');
  // $(closeMember).click(function(e){
  // 	$('.popup-member').hide();
  // });
  //on scroll show the new sticky header 

  $(window).scroll(function (e) {
    //remove the original sticky header
    // $('#sticky-header').remove();
    var y = $(this).scrollTop(); //console.log(y);

    if (y > 90) {
      $('#new-sticky-header.version2').css('top', y);
      $('#new-sticky-header.version2').fadeIn();
    } else {
      $('#new-sticky-header.version2').fadeOut();
      $('#new-sticky-header.version2').css('top', 0);
    }
  }); //triangle 1 animation on li hover

  $(' nav.new-nav ul li.girls-clothing,  nav.new-nav ul li.boys-clothing,  nav.new-nav ul li.baby-girl-clothes,  nav.new-nav ul li.baby-boy-clothes,  nav.new-nav ul li.newborn-clothes,  nav.new-nav ul li.clothing-sale').hover(function (e) {
    var theHover = $(this).attr('class');
    var $this = $(this).position();
    var xPos;

    if (theHover == 'clothing-sale') {
      xPos = $this.left + 40;
    } else {
      xPos = $this.left;
    }

    $('.triangle').animate({
      backgroundPositionX: xPos
    }, 'fast');
  }, function (e) {
    //console.log('hover off')
    $('.triangle').stop();
  }); //triangle 2 animation on li hover

  $(
  /*' nav.new-nav ul li.girls-clothing .level-2 li.girl-cats,  nav.new-nav ul li.boys-clothing .level-2 li.boy-cats,  nav.new-nav ul li.baby-girl-clothes .level-2 li.baby-girl-cats,  nav.new-nav ul li.baby-boy-clothes .level-2 li.baby-boy-cats,*/
  '.clothing-sale .level-2 li').hover(function (e) {
    console.log('hover'); //var $this = $(this).position();

    var $this = $(this).find('span').position();
    var xPos = $this.left;
    $('.level-2').animate({
      backgroundPositionX: xPos
    }, 'fast');
  }, function (e) {
    //console.log('hover off')
    $('.level-2').stop();
  }); //triangle 1 show & hide on nav hover

  $(' nav.new-nav').hover(function () {
    $('.triangle').show();
  }, function () {
    $('.triangle').hide(); // $('.triangle, .triangle-2').animate({
    // 	backgroundPositionX: '0%'
    // },400);

    $('.triangle').css('backgroundPositionX', '-2%');
  });
});
//# sourceMappingURL=nav1-base.js.map
