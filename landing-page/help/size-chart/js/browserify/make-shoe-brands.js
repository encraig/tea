(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function () {
  //function on elem change go to ext url
  //collapse ul.brand on .brands click
  $('.brands, table, .measure-tips').click(function () {
    $('ul.brand').removeAttr('style');
  }); //expand or collapse
  //desktop dropdown to expand and collapse

  $('ul.brand').click(function () {
    //check if has style attr remove it
    if ($(this).attr('style') !== undefined) {
      $(this).removeAttr('style');
    } // if doesn't have style attr add css to expand
    else {
        $(this).css('height', 'auto');
      }
  }); //on .shoes change
  //<ul>

  $('.size-chart-table').find('ul.brand li').click(function () {
    var txt = $(this).text();
    txt = txt.toLowerCase();
    var brand = $(this).attr('data-url');

    if (txt !== 'please select a brand') {
      window.open(brand, '_blank');
    }
  });
};


},{}],2:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');

var brandChange = require('./change-shoe-brand.js');

var sizeChartArr = require('./measuring-tips.js');

var shoeBrands = require('./shoe-brands.js');

module.exports = function () {
  //function to make the brand drop down for shoes or sweaters
  //remove .brands
  $('.brands, .brands-dropdown').remove();
  var dept = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var cat = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category'); //only execute if sweaters or shoes

  if (cat == 'sweater + outerwear' || cat == 'shoes + accessories') {
    //make the element to add to the page
    // var elem = '<div class="brands"></div>';
    var elem1 = '<div class="brands"></div>';
    var elem2 = '<div class="brands-dropdown"></div>';
    var h2;
    var text = '<p>Please select a brand from the menu below to view<br> the size chart. Size chart will open in a new window.</p>';
    var select = $('<select class="brand mobile" onchange="window.open(this.value)"><option>Please select a brand</option></select>');
    var ul = $('<ul class="brand desktop"><li>Please select a brand</li></ul>');
    var ol = $('<ol class="mobile"></ol>'); //if shoes + accessories

    if (cat == 'shoes + accessories') {
      h2 = '<h2>' + dept + ' shoes size chart</h2>'; //add the <option> and <li>
      //loop through the .sizeChartArr

      $.each(sizeChartArr, function (i, val) {
        //find the matched dept
        if (dept == val.dept) {
          //loop through dept shoes
          $.each(val.shoes, function (j, shoe) {
            //loop through the shoeBrands
            $.each(shoeBrands, function (k, brand) {
              //if match output
              if (shoe == brand.brand) {
                //<ul>
                var li = '<li data-url="' + brand.url + '">' + shoe + '</li>'; //<ol>

                var li2 = '<li><a href="' + brand.url + '" target="_blank">' + shoe + '</a></li>'; //<select>

                var option = '<option value="' + brand.url + '">' + shoe + '</option>';
                $(ul).append(li);
                $(ol).append(li2);
                $(select).append(option);
              }
            });
          });
        }
      });
    } //else if sweaters + outerwear
    else if (cat == 'sweater + outerwear') {
        h2 = '<h2>' + dept + ' outerwear size chart (other brands)</h2>'; //<ul>

        $(ul).append('<li data-url="https://www.patagonia.com/size-boys-girls.html">patagonia</li>'); //<ol>

        $(ol).append('<li><a href="https://www.patagonia.com/size-boys-girls.html" target="_blank">patagonia</a></li>'); //<select>

        $(select).append('<option value="https://www.patagonia.com/size-boys-girls.html">patagonia</option>');
      } // console.log(h2, text, select);
    //append the elements into .brands


    var brandsContainer = $(elem1).append(h2, text); //because of safari not allowing window.open()
    //if mobile

    if ($(window).width() < 737) {
      //if safari
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        var brandsDropdown = $(elem2).append(ol, ul);
      } //not safari
      else {
          var brandsDropdown = $(elem2).append(select, ul);
        }
    } //not mobile
    else {
        var brandsDropdown = $(elem2).append(select, ul);
      } //add to page


    $('.size-chart-table').append(brandsContainer);
    $('.size-chart-table').append(brandsDropdown); //because of onload append shoe size chart to .size-chart-table

    setTimeout(function () {
      $('.size-chart-table').append($('.brands'));
      $('.size-chart-table').append($('.brands-dropdown'));
    }, 1500); //on .brand change

    brandChange();
  }
};


},{"./change-shoe-brand.js":1,"./measuring-tips.js":3,"./set-dept-cat.js":4,"./shoe-brands.js":5}],3:[function(require,module,exports){
"use strict";

module.exports = [{
  dept: 'girl',
  shoes: ['yosi samra', 'vans', 'elephantito', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'toke', 'havaianas', 'cienta'],
  measure: {
    img: 'girls/girls-measuring.png',
    chest: 'Wrap a measuring tape under your child\'s armpits, making sure it passes across the fullest part of her chest and around her shoulder blades. Her arms should be relaxed naturally against her sides.',
    hips: 'Have your child stand with her legs together, not spread apart. Wrap the measuring tape in a loop around the widest part of her hips.',
    waist: 'Tie a string around your child\'s middle and have her bend from side to side. The string will settle around her natural waist, above her hipbones. Wrap a measuring tape around this part of her waist.'
  },
  cat: [{
    name: 'dresses',
    img: 'girls/girls-dresses.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her chest measurement is the most important factor in finding a dress that fits.',
    rightH2: 'Long Live the Dress',
    rightP: 'Many parents tell us that when their daughter is too tall for her favorite Tea dress, she wears it as a tunic!'
  }, {
    name: 'tops',
    img: 'girls/girls-tops.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her chest measurement is the most important factor in finding a top that fits.',
    rightH2: 'Always in Season',
    rightP: 'Thanks to our easy-to-layer purity tees, she can wear that favorite tank or short sleeve top all year long. (Whew, right?!)'
  }, {
    name: 'bottoms',
    img: 'girls/girls-bottoms.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her waist measurement is the most important factor in finding pants that fit comfortably—but her hip measurement can make the difference if you\'re stuck between sizes.',
    rightH2: 'Easy Does it',
    rightP: 'She\'s got places to go. Like, right now! That\'s why our pants are designed to be extra easy for her to pull on and off in a jiffy.'
  }, {
    name: 'swim',
    img: 'girls/girls-swim.png',
    leftH2: 'Tankinis + Bikinis',
    leftP: 'Since our tops and bottoms are sold separately, you can mix sizes to get the best fit. Measure her chest to decide on a top size; measure her hips for the right bottom.',
    rightH2: 'One-Pieces',
    rightP: 'Chest and hip measurements are what you\'re looking for to find the right size. When in doubt, go with her chest measurement.',
    rightH2Bottom: 'Rash Guards',
    rightPBottom: 'Her chest measurement is the most important factor in finding a rash guard that fits.'
  }, {
    name: 'sweater + outerwear',
    img: 'girls/girls-sweaters.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'The only measurement you need to determine her size is the circumference of her chest.',
    rightH2: 'Layer Up!',
    rightP: 'We design our outerwear to fit comfortably over all sorts of layers, so don’t be afraid to add that extra sweater.'
  }, {
    name: 'pajamas',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }, {
    name: 'shoes + accessories',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
},
/*-----------------------------------------------------------------------------------------*/
{
  dept: 'boy',
  shoes: ['yosi samra', 'vans', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'havaianas', 'cienta'],
  measure: {
    img: 'boys/boys-measuring.png',
    chest: 'Wrap a measuring tape under your child\'s armpits, making sure it passes across the fullest part of his chest and around his shoulder blades. His arms should be relaxed naturally against his sides.',
    hips: 'Have your child stand with his legs together, not spread apart. Wrap the measuring tape in a loop around the widest part of his hips.',
    waist: 'Tie a string around your child\'s middle and have him bend from side to side. The string will settle around his natural waist, above his hipbones. Wrap a measuring tape around this part of his waist.'
  },
  cat: [{
    name: 'tees + shirts',
    img: 'boys/boys-tops.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'His chest measurement is the most important factor in finding a shirt that fits.',
    rightH2: 'Always in Season',
    rightP: 'Thanks to our easy-to-layer purity tees, he can wear that favorite sleeve shirt all year long. (Whew, right?!)'
  }, {
    name: 'bottoms',
    img: 'boys/boys-bottoms.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'His waist measurement is the most important factor in finding pants that fit comfortably—but his hip measurement can make the difference if you\'re stuck between sizes.',
    rightH2: 'Easy Does it',
    rightP: 'He\'s got places to go. Like, right now! That\'s why our pants are designed to be extra easy for him to pull on and off in a jiffy.'
  }, {
    name: 'swim',
    img: 'boys/boys-swim.png',
    leftH2: 'Swim Trunks',
    leftP: 'His waist measurement is the most important factor in choosing trunks that fit comfortably—but his hip measurement can make the difference if you\'re stuck between sizes.',
    rightH2: 'Rash Guards',
    rightP: 'His chest measurement is the magic number you need to get the right size rash guard. ',
    rightH2Bottom: '',
    rightPBottom: ''
  }, {
    name: 'sweater + outerwear',
    img: 'boys/boys-sweaters.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'The only measurement you need to determine his size is the circumference of his chest.',
    rightH2: 'Layer Up!',
    rightP: 'We design our outerwear to fit comfortably over all sorts of layers, so don\'t be afraid to add that extra sweater'
  }, {
    name: 'pajamas',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }, {
    name: 'shoes + accessories',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
},
/*-----------------------------------------------------------------------------------------*/
{
  dept: 'baby girl',
  shoes: ['yosi samra', 'vans', 'elephantito', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'toke', 'havaianas', 'cienta'],
  measure: {
    img: 'baby-girl/baby-girl-measuring.png',
    chest: 'Wrap a measuring tape under your child\'s armpits, making sure it passes across the fullest part of her chest and around her shoulder blades. Her arms should be relaxed naturally against her sides. (Good luck! You\'re going to have to be superhero-fast!)',
    hips: 'Have your child stand with her legs together, and wrap the measuring tape in a loop around the widest part of her hips. (If she\'s not standing yet, have her lie down. You might need a partner to keep her distracted—and still—for a minute!)',
    waist: 'Tie a string around your child\'s middle and help her bend from side to side. The string will settle around her natural waist, above her hipbones. Wrap a measuring tape around this part of her waist.'
  },
  cat: [{
    name: 'rompers',
    img: 'baby-girl/baby-girl-rompers.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her height is the most important factor in finding a romper that fits',
    rightH2: 'Diaper Duty',
    rightP: 'We design our rompers to fit over diapers, but you don\'t have to include them when you measure. For her correct hip measurement, be sure to leave the diaper out of the equation!'
  }, {
    name: 'dresses',
    img: 'baby-girl/baby-girl-dresses.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her chest measurement is the most important factor in finding a dress that fits.',
    rightH2: 'Matching Bloomers',
    rightP: 'Some of our dresses come with matching bloomers up to size 24m. Check her waist measurement to see how the bloomers will fit.'
  }, {
    name: 'tops',
    img: 'baby-girl/baby-girl-tops-bottoms.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her chest measurement is the most important factor in finding a top or bodysuit that fits.',
    rightH2: 'Always in Season',
    rightP: 'Thanks to our easy-to-layer bodysuits, she can wear that adorable tank or short sleeve top all year long. (Whew, right?!)'
  }, {
    name: 'bottoms',
    img: 'baby-girl/baby-girl-tops-bottoms.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her waist measurement is the most important factor in finding pants that fit comfortably— but her hip measurement can make the difference if you\'re stuck between sizes.',
    rightH2: 'Diaper Duty',
    rightP: 'We design our baby bottoms to fit over diapers, but you don\'t have to include them when you measure. For her correct hip measurement, be sure to leave the diaper out of the equation!'
  }, {
    name: 'swim',
    img: 'baby-girl/baby-girl-swim.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Chest and hip <span class="desktop">(sans diaper)</span> measurements are what you\'re looking for to find the right size. When in doubt, go with her chest measurement.',
    rightH2: 'Two-Piece Tip',
    rightP: 'Experienced parents tell us they love two-piece suits for quick and easy diaper changes at the beach.',
    rightH2Bottom: '',
    rightPBottom: ''
  }, {
    name: 'sweater + outerwear',
    img: 'baby-girl/baby-girl-sweaters.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'The only measurement you need to determine her size is the circumference of her chest.',
    rightH2: 'Layer Up!',
    rightP: 'We design our outerwear to fit comfortably over all sorts of layers, so don\'t be afraid to add that extra sweater.'
  }, {
    name: 'pajamas',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }, {
    name: 'shoes + accessories',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
},
/*-----------------------------------------------------------------------------------------*/
{
  dept: 'baby boy',
  shoes: ['yosi samra', 'vans', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'havaianas', 'cienta'],
  measure: {
    img: 'baby-boy/baby-boy-measuring.png',
    chest: 'Wrap a measuring tape under your child\'s armpits, making sure it passes across the fullest part of his chest and around his shoulder blades. His arms should be relaxed naturally against his sides. (Good luck! You\'re going to have to be superhero-fast!)',
    hips: 'Have your child stand with his legs together, and wrap the measuring tape in a loop around the widest part of his hips. (If he\'s not standing yet, have him lie down. You might need a partner to keep him distracted—and still—for a minute!)',
    waist: 'Tie a string around your child\'s middle and help him bend from side to side. The string will settle around his natural waist, above his hipbones. Wrap a measuring tape around this part of his waist.'
  },
  cat: [{
    name: 'rompers',
    img: 'baby-boy/baby-boy-rompers.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'His height is the most important factor in finding a romper that fits',
    rightH2: 'Diaper Duty',
    rightP: 'We design our rompers to fit over diapers, but you don\'t have to include them when you measure. For his correct hip measurement, be sure to leave the diaper out of the equation!'
  }, {
    name: 'tees + shirts',
    img: 'baby-boy/baby-boy-tops-bottoms.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'His chest measurement is the most important factor in finding a top or bodysuit that fits.',
    rightH2: 'Always in Season',
    rightP: 'Thanks to our easy-to-layer bodysuits, he can wear that favorite short sleeve shirt all year long. (Whew, right?!)'
  }, {
    name: 'bottoms',
    img: 'baby-boy/baby-boy-tops-bottoms.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'His waist measurement is the most important factor in finding bottoms that fit comfortably— but his hip measurement can make the difference if you\'re stuck between sizes.',
    rightH2: 'Diaper Duty',
    rightP: 'We design our baby bottoms to fit over diapers, but you don\'t have to include them when you measure. For his correct hip measurement, be sure to leave the diaper out of the equation!'
  }, {
    name: 'swim',
    img: 'baby-boy/baby-boy-swim.png',
    leftH2: 'Swim Trunks',
    leftP: 'His waist measurement is the most important factor in choosing trunks that fit comfortably—but his hip measurement can make the difference if you\'re stuck between sizes.',
    rightH2: 'Rash Guard Suits',
    rightP: 'His height is the most important measurement to get the right fit. ',
    rightH2Bottom: 'Rash Guards',
    rightPBottom: 'His chest measurement is the magic number you need to get the right size rash guard. '
  }, {
    name: 'sweater + outerwear',
    img: 'baby-boy/baby-boy-sweaters.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'The only measurement you need to determine his size is the circumference of his chest.',
    rightH2: 'Layer Up!',
    rightP: 'We design our outerwear to fit comfortably over all sorts of layers, so don\'t be afraid to add that extra sweater.'
  }, {
    name: 'pajamas',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }, {
    name: 'shoes + accessories',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
},
/*-----------------------------------------------------------------------------------------*/
{
  dept: 'newborn',
  cat: [{
    name: 'all categories',
    img: 'newborn/newborn-all.png',
    leftH2: 'Newborn Needs',
    leftP: 'Brand new babies are a bit messy! Buy a few extra outfits so you don\'t have to do laundry every day.',
    rightH2: 'Romper Rules',
    rightP: 'Rompers are easy gifts—they keep babies cozy all the way to their tiny toes, plus they\'re easy to change in a snap!'
  }]
}];


},{}],4:[function(require,module,exports){
"use strict";

module.exports = function (elem1, elem2) {
  //function to set the selected department and category for desktop or mobile
  var Val; //desktop

  if ($(window).width() > 737) {
    //get the value of the .department or .category
    Val = $(elem1).text();
  } //mobile
  else {
      //get the value of the .department or .category
      Val = $(elem2).val();
    }

  return Val;
};


},{}],5:[function(require,module,exports){
"use strict";

module.exports = [{
  brand: 'yosi samra',
  url: 'https://www.yosisamra.com/pages/size-chart'
}, {
  brand: 'vans',
  url: '/static/vans-shoe-size-guide'
}, {
  brand: 'elephantito',
  url: 'https://www.elephantito.com/pages/sizing'
}, {
  brand: 'old soles',
  url: 'https://www.oldsoles.com.au/features/kids/'
}, {
  brand: 'superga',
  url: 'https://www.superga-usa.com/content.jsp?pageName=SizeGuide'
}, {
  brand: 'livie & luca',
  url: 'https://www.livieandluca.com/pages/size-chart'
}, {
  brand: 'native',
  url: 'https://www.nativeshoes.com/'
}, {
  brand: 'saltwater sandal',
  url: 'https://saltwater-sandals.com/sizing-calculator/'
}, {
  brand: 'umi',
  url: 'http://www.umishoes.com/shop/includes/sizeChart.html'
}, {
  brand: 'onitsuka tiger',
  url: 'http://www.onitsukatiger.com/us/en-us/size-guide'
}, {
  brand: 'asics',
  url: 'http://www.asics.com/us/en-us/shoe-size-guide'
}, {
  brand: 'asics tiger',
  url: 'http://www.asicstiger.com/us/en-us/size-guide'
}, {
  brand: 'toke',
  url: 'https://www.tokeshoes.com/index.php/conversion/toke-conversion-chart'
}, {
  brand: 'havaianas',
  url: '/static/havaianas-shoe-size-guide.html'
}, {
  brand: 'cienta',
  url: 'https://cientausa.com/'
}];


},{}]},{},[2]);
