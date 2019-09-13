var sheets;

$(document).ready(function() {
  // jQuery('img[usemap]').rwdImageMaps();

  var shoeBrands = [{
      brand: 'yosi samra',
      url: 'https://www.yosisamra.com/pages/size-chart'
    },
    {
      brand: 'vans',
      url: '/static/vans-shoe-size-guide'
    },
    {
      brand: 'elephantito',
      url: 'https://www.elephantito.com/pages/sizing'
    },
    {
      brand: 'old soles',
      url: 'https://www.oldsoles.com.au/features/kids/'
    },
    {
      brand: 'superga',
      url: 'https://www.superga-usa.com/content.jsp?pageName=SizeGuide'
    },
    {
      brand: 'livie & luca',
      url: 'https://www.livieandluca.com/pages/size-chart'
    },
    {
      brand: 'native',
      url: 'https://www.nativeshoes.com/'
    },
    {
      brand: 'saltwater sandal',
      url: 'https://saltwater-sandals.com/sizing-calculator/'
    },
    {
      brand: 'umi',
      url: 'http://www.umishoes.com/shop/includes/sizeChart.html'
    },
    {
      brand: 'onitsuka tiger',
      url: 'http://www.onitsukatiger.com/us/en-us/size-guide'
    },
    {
      brand: 'asics',
      url: 'http://www.asics.com/us/en-us/shoe-size-guide'
    },
    {
      brand: 'asics tiger',
      url: 'http://www.asicstiger.com/us/en-us/size-guide'
    },
    {
      brand: 'toke',
      url: 'https://www.tokeshoes.com/index.php/conversion/toke-conversion-chart'
    },
    {
      brand: 'havaianas',
      url: '/static/havaianas-shoe-size-guide.html'
    },
    {
      brand: 'cienta',
      url: 'https://cientausa.com/'
    },
  ];

  var sizeChartArr = [{
      dept: 'girl',
      shoes: ['yosi samra', 'vans', 'elephantito', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'toke', 'havaianas', 'cienta'],
      measure: {
        img: 'girls/girls-measuring.png',
        chest: 'Wrap a measuring<br class="desktop"> tape under your child\'s<br class="desktop"> armpits,<br class="mobile"> making sure it<br class="desktop"> passes across the fullest<br class="desktop"> part of her chest<br class="mobile"> and<br class="desktop"> around her shoulder<br class="desktop"> blades. Her arms should<br class="desktop"> be<br class="mobile"> relaxed naturally<br class="desktop"> against her sides.',
        hips: 'Have your child stand<br class="desktop"> with her legs together,<br class="desktop"> not spread<br class="mobile"> apart. Wrap<br class="desktop"> the measuring tape in a<br class="desktop"> loop around the<br class="mobile"> widest<br class="desktop"> part of her hips.',
        waist: 'Tie a string around your<br class="desktop"> child\'s middle and have<br class="desktop"> her bend<br class="mobile"> from side to<br class="desktop"> side. The string will settle<br class="desktop"> around her natural<br class="mobile"> waist,<br class="desktop"> above her hipbones. Wrap<br class="desktop"> a measuring tape<br class="mobile"> around<br class="desktop"> this part of her waist.',
      },
      cat: [{
          name: 'dresses',
          img: 'girls/girls-dresses.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'Her chest<br class="mobile"> measurement is<br> the most important<br class="mobile"> factor<br class="desktop"> in finding<br class="mobile"> a dress that fits.',
          rightH2: 'Long Live the Dress',
          rightP: 'Many parents tell us that<br> when their daughter is too<br> tall for her favorite Tea dress,<br> she wears it as a tunic!',
        },
        {
          name: 'tops',
          img: 'girls/girls-tops.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'Her chest<br class="mobile"> measurement is<br> the most important<br class="mobile"> factor<br class="desktop"> in finding<br class="mobile"> a top that fits.',
          rightH2: 'Always in Season',
          rightP: 'Thanks to our easy-to-layer<br> purity tees, she can wear<br> that favorite tank or short<br> sleeve top all year long.<br> (Whew, right?!)',
        },
        {
          name: 'bottoms',
          img: 'girls/girls-bottoms.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'Her waist<br class="mobile"> measurement is<br class="desktop"> the<br class="mobile"> most important factor<br> in finding pants that<br class="mobile"> fit<br class="desktop"> comfortably—but<br class="mobile"> her hip<br class="desktop"> measurement<br class="mobile"> can make<br class="desktop"> the<br class="mobile"> difference if you\'re<br> stuck between sizes.',
          rightH2: 'Easy Does it',
          rightP: 'She\'s got places to go.<br> Like, right now! That\'s why<br> our pants are designed to be<br> extra easy for her to pull<br> on and off in a jiffy.',
        },
        {
          name: 'swim',
          img: 'girls/girls-swim.png',
          leftH2: 'Tankinis + Bikinis',
          leftP: 'Since our tops<br class="mobile"> and bottoms<br class="desktop"> are<br class="mobile"> sold separately,<br class="mobile"> you<br class="desktop"> can mix sizes<br class="mobile"> to get the<br class="desktop"> best fit.<br class="mobile"> Measure her chest<br class="desktop"> to<br class="mobile"> decide on a top size;<br> measure her hips for<br class="mobile"> the<br class="desktop"> right bottom.',
          rightH2: 'One-Pieces',
          rightP: 'Chest and hip<br> measurements are<br> what you\'re looking for<br> to find the right size.<br> When in doubt, go with<br> her chest measurement.',
          rightH2Bottom: 'Rash Guards',
          rightPBottom: 'Her chest measurement<br> is the most important<br> factor in finding a rash<br> guard that fits.',
        },
        {
          name: 'sweater + outerwear',
          img: 'girls/girls-sweaters.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'The only<br class="mobile"> measurement<br class="desktop"> you<br class="mobile"> need to determine<br class="mobile"> her<br class="desktop"> size is the<br class="mobile"> circumference<br class="desktop"> of<br class="mobile"> her chest.',
          rightH2: 'Layer Up!',
          rightP: 'We design our outerwear to<br> fit comfortably over all sorts<br> of layers, so don’t be afraid<br> to add that extra sweater.',
        },
        {
          name: 'pajamas',
          img: '',
          leftH2: '',
          leftP: '',
          rightH2: '',
          rightP: '',
        },
        {
          name: 'shoes + accessories',
          img: '',
          leftH2: '',
          leftP: '',
          rightH2: '',
          rightP: '',
        },

      ],
    },

    /*-----------------------------------------------------------------------------------------*/
    {
      dept: 'boy',
      shoes: ['yosi samra', 'vans', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'havaianas', 'cienta'],
      measure: {
        img: 'boys/boys-measuring.png',
        chest: 'Wrap a measuring<br class="desktop"> tape under your child\'s<br class="desktop"> armpits,<br class="mobile"> making sure it<br class="desktop"> passes across the fullest<br class="desktop"> part of his chest<br class="mobile"> and<br class="desktop"> around his shoulder<br class="desktop"> blades. His arms should<br class="desktop"> be<br class="mobile"> relaxed naturally<br class="desktop"> against his sides.',
        hips: 'Have your child stand<br class="desktop"> with his legs together,<br class="desktop"> not spread<br class="mobile"> apart. Wrap<br class="desktop"> the measuring tape in a<br class="desktop"> loop around the<br class="mobile"> widest<br class="desktop"> part of his hips.',
        waist: 'Tie a string around your<br class="desktop"> child\'s middle and have<br class="desktop"> him bend<br class="mobile"> from side to<br class="desktop"> side. The string will settle<br class="desktop"> around his natural<br class="mobile"> waist,<br class="desktop"> above his hipbones. Wrap<br class="desktop"> a measuring tape<br class="mobile"> around<br class="desktop"> this part of his waist.',
      },
      cat: [{
          name: 'tees + shirts',
          img: 'boys/boys-tops-bottoms.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'His chest<br class="mobile"> measurement is<br> the most important<br class="mobile"> factor<br class="desktop"> in finding<br class="mobile"> a shirt that fits.',
          rightH2: 'Always in Season',
          rightP: 'Thanks to our easy-to-layer<br> purity tees, he can wear<br> that favorite sleeve shirt all year long.<br> (Whew, right?!)',
        },
        {
          name: 'bottoms',
          img: 'boys/boys-tops-bottoms.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'His waist<br class="mobile"> measurement is<br> the most important<br class="mobile"> factor<br class="desktop"> in finding<br class="mobile"> pants that fit<br> comfortably—but his<br class="mobile"> hip<br class="desktop"> measurement can<br class="mobile"> make<br class="desktop"> the difference<br class="mobile"> if you\'re<br class="desktop"> stuck<br class="mobile"> between sizes.',
          rightH2: 'Easy Does it',
          rightP: 'He\'s got places to go.<br> Like, right now! That\'s why<br> our pants are designed to be<br> extra easy for him to pull<br> on and off in a jiffy.',
        },
        {
          name: 'swim',
          img: 'boys/boys-swim.png',
          leftH2: 'Swim Trunks',
          leftP: 'His waist<br class="mobile"> measurement<br class="desktop"> is<br class="mobile"> the most important<br class="mobile"> factor<br class="desktop"> in choosing<br class="mobile"> trunks that fit<br> comfortably—but his<br class="mobile"> hip<br class="desktop"> measurement can<br class="mobile"> make the<br class="desktop"> difference<br class="mobile"> if you\'re stuck<br> between sizes.',
          rightH2: 'Rash Guards',
          rightP: 'His chest measurement<br> is the magic number you<br> need to get the right<br> size rash guard. ',
          rightH2Bottom: '',
          rightPBottom: '',
        },
        {
          name: 'sweater + outerwear',
          img: 'boys/boys-sweaters.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'The only<br class="mobile"> measurement<br class="desktop"> you<br class="mobile"> need to determine<br class="mobile"> his<br class="desktop"> size is the<br class="mobile"> circumference<br class="desktop"> of<br class="mobile"> his chest.',
          rightH2: 'Layer Up!',
          rightP: 'We design our outerwear to<br> fit comfortably over all sorts<br> of layers, so don\'t be afraid<br> to add that extra sweater'
        },
        {
          name: 'pajamas',
          img: '',
          leftH2: '',
          leftP: '',
          rightH2: '',
          rightP: '',
        },
        {
          name: 'shoes + accessories',
          img: '',
          leftH2: '',
          leftP: '',
          rightH2: '',
          rightP: ''
        },

      ],
    },
    /*-----------------------------------------------------------------------------------------*/
    {
      dept: 'baby girl',
      shoes: ['yosi samra', 'vans', 'elephantito', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'toke', 'havaianas', 'cienta'],
      measure: {
        img: 'baby-girl/baby-girl-measuring.png',
        chest: 'Wrap a measuring tape<br class="desktop"> under your child\'s armpits,<br> making sure it passes<br class="desktop"> across the fullest part of<br class="desktop"> her chest<br class="mobile"> and around her<br class="desktop"> shoulder blades. Her arms<br class="desktop"> should be<br class="mobile"> relaxed naturally<br class="desktop"> against her sides. (Good<br class="desktop"> luck! You\'re<br class="mobile"> going to have to be superhero-fast!)',
        hips: 'Have your child stand<br class="desktop"> with her legs together,<br class="desktop"> and wrap<br class="mobile"> the measuring<br class="desktop"> tape in a loop around the<br class="desktop"> widest part of<br class="mobile"> her hips.<br class="desktop"> (If she\'s not standing yet,<br class="desktop"> have her lie down. You<br class="mobile"> might need a partner to<br class="desktop"> keep her distracted—<br>and still—for a minute!)',
        waist: 'Tie a string around your<br class="desktop"> child\'s middle and help<br class="desktop"> her bend<br class="mobile"> from side to<br class="desktop"> side. The string will settle<br class="desktop"> around her natural<br class="mobile"> waist,<br class="desktop"> above her hipbones. Wrap<br class="desktop"> a measuring tape<br class="mobile"> around<br class="desktop"> this part of her waist.',
      },
      cat: [{
          name: 'rompers',
          img: 'baby-girl/baby-girl-rompers.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'Her height is<br class="mobile"> the most<br class="desktop"> important<br class="mobile"> factor in finding<br class="desktop"> a<br class="mobile"> romper that fits',
          rightH2: 'Diaper Duty',
          rightP: 'We design our rompers<br> to fit over diapers, but you<br> don\'t have to include them<br> when you measure. For her<br> correct hip measurement,<br> be sure to leave the diaper<br> out of the equation!',
        },
        {
          name: 'dresses',
          img: 'baby-girl/baby-girl-dresses.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'Her chest<br class="mobile"> measurement is<br> the most important<br class="mobile"> factor<br class="desktop"> in finding<br class="mobile"> a dress that fits.',
          rightH2: 'Matching Bloomers',
          rightP: 'Some of our dresses come<br> with matching bloomers up<br> to size 24m. Check her waist<br> measurement to see how the<br> bloomers will fit.',
        },
        {
          name: 'tops',
          img: 'baby-girl/baby-girl-tops-bottoms.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'Her chest<br class="mobile"> measurement is the<br> most important factor<br class="mobile"> in finding<br class="desktop"> a top or<br class="mobile"> bodysuit that fits.',
          rightH2: 'Always in Season',
          rightP: 'Thanks to our easy-to-layer<br> bodysuits, she can wear<br> that adorable tank or short<br> sleeve top all year long.<br> (Whew, right?!)',
        },
        {
          name: 'bottoms',
          img: 'baby-girl/baby-girl-tops-bottoms.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'Her waist<br class="mobile"> measurement is<br class="mobile"> the<br class="desktop"> most important<br class="mobile"> factor in finding<br> pants that fit<br class="mobile"> comfortably—<br class="desktop"> but<br class="mobile"> her hip measurement<br class="mobile"> can<br class="desktop"> make the<br class="mobile"> difference if you\'re<br> stuck between sizes.',
          rightH2: 'Diaper Duty',
          rightP: 'We design our baby bottoms<br> to fit over diapers, but you<br> don\'t have to include them<br> when you measure. For her<br> correct hip measurement,<br> be sure to leave the diaper<br> out of the equation!',
        },
        {
          name: 'swim',
          img: 'baby-girl/baby-girl-swim.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'Chest and hip<br class="mobile"> <span class="desktop">(sans diaper)</span><br class="desktop"> measurements are<br class="mobile"> what<br class="desktop"> you\'re looking<br class="mobile"> for to find the<br class="desktop"> right<br class="mobile"> size. When in doubt,<br class="mobile"> go<br class="desktop"> with her chest<br class="mobile"> measurement.',
          rightH2: 'Two-Piece Tip',
          rightP: 'Experienced parents tell<br> us they love two-piece suits<br> for quick and easy diaper<br> changes at the beach.',
          rightH2Bottom: '',
          rightPBottom: '',
        },
        {
          name: 'sweater + outerwear',
          img: 'baby-girl/baby-girl-sweaters.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'The only<br class="mobile"> measurement<br class="desktop"> you<br class="mobile"> need to determine<br class="mobile"> her<br class="desktop"> size is the<br class="mobile"> circumference<br class="desktop"> of<br class="mobile"> her chest.',
          rightH2: 'Layer Up!',
          rightP: 'We design our outerwear to<br> fit comfortably over all sorts<br> of layers, so don\'t be afraid to<br> add that extra sweater.',
        },
        {
          name: 'pajamas',
          img: '',
          leftH2: '',
          leftP: '',
          rightH2: '',
          rightP: '',
        },
        {
          name: 'shoes + accessories',
          img: '',
          leftH2: '',
          leftP: '',
          rightH2: '',
          rightP: '',
        },

      ],
    },
    /*-----------------------------------------------------------------------------------------*/
    {
      dept: 'baby boy',
      shoes: ['yosi samra', 'vans', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'havaianas', 'cienta'],
      measure: {
        img: 'baby-boy/baby-boy-measuring.png',
        chest: 'Wrap a measuring tape<br class="desktop"> under your child\'s armpits,<br> making sure it passes<br class="desktop"> across the fullest part of<br class="desktop"> his chest<br class="mobile"> and around his<br class="desktop"> shoulder blades. His arms<br class="desktop"> should be<br class="mobile"> relaxed naturally<br class="desktop"> against his sides. (Good<br class="desktop"> luck! You\'re<br class="mobile"> going to have<br class="desktop"> to be superhero-fast!)',
        hips: 'Have your child stand<br class="desktop"> with his legs together,<br class="desktop"> and wrap<br class="mobile"> the measuring<br class="desktop"> tape in a loop around the<br class="desktop"> widest part of<br class="mobile"> his hips.<br class="desktop"> (If he\'s not standing yet,<br class="desktop"> have him lie down. You<br> might need a partner to<br class="desktop"> keep him distracted—<br>and still—for a minute!)',
        waist: 'Tie a string around your<br class="desktop"> child\'s middle and help<br class="desktop"> him bend<br class="mobile"> from side to<br class="desktop"> side. The string will settle<br class="desktop"> around his natural<br class="mobile"> waist,<br class="desktop"> above his hipbones. Wrap<br class="desktop"> a measuring tape<br class="mobile"> around<br class="desktop"> this part of his waist.',
      },
      cat: [{
          name: 'rompers',
          img: 'baby-boy/baby-boy-rompers.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'His height is<br class="mobile"> the most<br class="desktop"> important<br class="mobile"> factor in finding<br class="desktop"> a<br class="mobile"> romper that fits',
          rightH2: 'Diaper Duty',
          rightP: 'We design our rompers<br> to fit over diapers, but you<br> don\'t have to include them<br> when you measure. For his<br> correct hip measurement,<br> be sure to leave the diaper<br> out of the equation!',
        },
        {
          name: 'tees + shirts',
          img: 'baby-boy/baby-boy-tops-bottoms.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'His chest<br class="mobile"> measurement is the<br> most important factor<br class="mobile"> in finding<br class="desktop"> a top or<br class="mobile"> bodysuit that fits.',
          rightH2: 'Always in Season',
          rightP: 'Thanks to our easy-to-layer<br> bodysuits, he can wear that<br> favorite short sleeve shirt all<br> year long. (Whew, right?!)',
        },
        {
          name: 'bottoms',
          img: 'baby-boy/baby-boy-tops-bottoms.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'His waist<br class="mobile"> measurement is<br class="mobile"> the<br class="desktop"> most important<br class="mobile"> factor in finding<br> bottoms that fit<br class="mobile"> comfortably—<br class="desktop"> but<br class="mobile"> his hip measurement<br class="mobile"> can<br class="desktop"> make the<br class="mobile"> difference if you\'re<br> stuck between sizes.',
          rightH2: 'Diaper Duty',
          rightP: 'We design our baby bottoms<br> to fit over diapers, but you<br> don\'t have to include them<br> when you measure. For his<br> correct hip measurement,<br> be sure to leave the diaper<br> out of the equation!',
        },
        {
          name: 'swim',
          img: 'baby-boy/baby-boy-swim.png',
          leftH2: 'Swim Trunks',
          leftP: 'His waist<br class="mobile"> measurement is<br> the most important<br class="mobile"> factor<br class="desktop"> in choosing<br class="mobile"> trunks that fit<br> comfortably—but his<br class="mobile"> hip<br class="desktop"> measurement can<br class="mobile"> make<br class="desktop"> the difference<br class="mobile"> if you\'re<br class="desktop"> stuck<br class="mobile"> between sizes.',
          rightH2: 'Rash Guard Suits',
          rightP: 'His height is the most<br> important measurement<br> to get the right fit. ',
          rightH2Bottom: 'Rash Guards',
          rightPBottom: 'His chest measurement<br> is the magic number you<br> need to get the right<br> size rash guard. ',
        },
        {
          name: 'sweater + outerwear',
          img: 'baby-boy/baby-boy-sweaters.png',
          leftH2: 'Stuck Between Sizes?',
          leftP: 'The only<br class="mobile"> measurement<br class="desktop"> you<br class="mobile"> need to determine<br class="mobile"> his<br class="desktop"> size is the<br class="mobile"> circumference<br class="desktop"> of<br class="mobile"> his chest.',
          rightH2: 'Layer Up!',
          rightP: 'We design our outerwear to<br> fit comfortably over all sorts<br> of layers, so don\'t be afraid to<br> add that extra sweater.',
        },
        {
          name: 'pajamas',
          img: '',
          leftH2: '',
          leftP: '',
          rightH2: '',
          rightP: '',
        },
        {
          name: 'shoes + accessories',
          img: '',
          leftH2: '',
          leftP: '',
          rightH2: '',
          rightP: '',
        },

      ],
    },
    /*-----------------------------------------------------------------------------------------*/
    {
      dept: 'newborn',
      cat: [{
        name: 'all categories',
        img: 'newborn/newborn-all.png',
        leftH2: 'Newborn Needs',
        leftP: 'Brand new babies are a<br> bit messy! Buy a few extra<br> outfits so you don\'t have<br> to do laundry every day.',
        rightH2: 'Romper Rules',
        rightP: 'Rompers are easy gifts—they<br> keep babies cozy all the way<br> to their tiny toes, plus they\'re<br> easy to change in a snap!',
      }],
    },
  ];

  /*-----------------------------------------------------------------------------------------*/

  //add sizeChartArr to the page for pdp pages
  $('.size-chart-container').prepend('<div id="sizeChartArr"></div>');
  //loop through sizeChartArr and add the attribute to #sizeChartArr
  $.each(sizeChartArr, function(i, val) {
    var cats = [];
    var dept = val.dept;
    dept = dept.replace(' ', '-');

    //loop through the categories and push to cats
    $.each(val.cat, function(j, cat) {
      cats.push(cat.name);
    });

    //convert cats to string
    var theCats = cats.join();
    //add data attribute to page
    $('#sizeChartArr').attr('data-' + dept, theCats);
  });

  /*-----------------------------------------------------------------------------------------*/

  //function to set the selected department and category for desktop or mobile
  var deptCat = function(elem1, elem2) {
    var Val;
    //desktop
    if ($(window).width() > 737) {
      //get the value of the .department or .category
      Val = $(elem1).text();
    }
    //mobile
    else {
      //get the value of the .department or .category
      Val = $(elem2).val();
    }

    return Val
  };

  /*-----------------------------------------------------------------------------------------*/

  //function to change the cats dropdown
  var changeCats = function(sizeChartArr) {
    //get the value of the .department
    var dept;
    //desktop
    if ($(window).width() > 737) {
      dept = $('.size-chart-container ul.department .selected').text();
    }
    //mobile
    else if ($(window).width() < 737) {
      dept = $('.size-chart-container select.department').val();
    }

    // var deptValD = $('.size-chart-container ul.department .selected').text();
    // var deptValM = $('.size-chart-container select.department').val();

    $.each(sizeChartArr, function(i, val) {
      //get the cats that match the dept
      if (val.dept == dept) {
        //loop through the cats and add to page
        $.each(val.cat, function(j, arr) {
          //<ul>
          var catD = '<li>' + arr.name + '</li>';
          $('.size-chart-container ul.category').append(catD);
          //<select>
          var catM = '<option value="' + arr.name + '">' + arr.name + '</option>';
          $('.size-chart-container select.category').append(catM);
        });
      }
    });
  };

  /*-----------------------------------------------------------------------------------------*/

  //function to change the background image
  var changeBackground = function(sizeChartArr) {

    var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
    var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');

    $.each(sizeChartArr, function(i, val) {
      //get the dept that match
      if (deptVal == val.dept) {
        $.each(val.cat, function(j, arr) {
          //get the cat that match
          if (catVal == arr.name) {
            //add the background img to the page

            //desktop
            if ($(window).width() > 737) {
              //var img = 'url(../images/'+arr.img+')';
              var img = 'url(https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/' + arr.img + ')';
              $('.size-chart-container .measure-tips').css('background-image', img);
            }
            //mobile
            else if ($(window).width() < 737) {
              //add the loading
              $('.measure-tips').prepend('<span class="loading" style="text-transform:uppercase; text-align:center; font-size:15px; font-family:brown-pro-bold !important">loading...</span>');
              var imgSrc = arr.img;
              imgSrc = imgSrc.split('.');
              imgSrc = imgSrc[0] + '-m.' + imgSrc[1];
              //console.log(imgSrc);

              var img = 'url(https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/' + imgSrc + ')';
              $('.size-chart-container .measure-tips').css('background-image', img);
              //remove the loading
              $('.measure-tips span.loading').remove();
            }

          }
        });
      }
    });
  };

  /*-----------------------------------------------------------------------------------------*/

  //function to adjust css for .measure-tips
  var adjustMeasureCSS = function() {
    //if shoes + accessories hide .tips & change min-height and padding of .measure-tips
    // var catVal = $('.size-chart-container .category').val();

    var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
    var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');

    //if mobile change the height of the .measure-tips div
    if ($(window).width() < 737) {
      //if .measure-tips div has style remove it
      $('.measure-tips div').removeAttr('style');

      //if .measure-tips css min-height: 0 set to auto
      var measureStyles = $('.measure-tips').attr('style');
      measureStyles = measureStyles.split(';');
      measureStyles = measureStyles[0];
      $('.measure-tips').attr('style', measureStyles);

      //get the height
      var mHeight = $('.measure-tips').css('height');

      //set the height
      $('.measure-tips div').css('height', mHeight);
    }

    if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
      //desktop
      if ($(window).width() > 737) {
        $('.measure-tips').css({
          minHeight: '0',
          padding: '0 0 33px 0'
        });
      }
      //mobile
      if ($(window).width() < 737) {
        $('.measure-tips').css('min-height', '0');
        //reset the height of .measure-tips div
        $('.measure-tips div').css('height', '0px');
      }

    } else if (deptVal == 'baby boy' || deptVal == 'baby girl') {
      //desktop
      if ($(window).width() > 737) {
        $('.measure-tips').css({
          minHeight: '420px',
          padding: '196px 0 0 0'
        });
      }
      //mobile
      if ($(window).width() < 737) {
        $('.measure-tips').css({
          minHeight: '290px',
          backgroundPosition: 'center -23px'
        });

        //get the height
        var mHeight = $('.measure-tips').css('min-height');

        //set the height
        $('.measure-tips div').css('height', mHeight);
      }
    } else if (deptVal == 'newborn') {
      //desktop
      if ($(window).width() > 737) {
        $('.measure-tips').css({
          minHeight: '360px',
          padding: '196px 0 0 0'
        });
      }
      //mobile
      if ($(window).width() < 737) {
        $('.measure-tips').css({
          minHeight: '237px',
          backgroundPosition: 'center -21px'
        });
        //reset the height of .measure-tips div
        $('.measure-tips div').css('height', '0px');
      }
    }

    // else remove the style attribute on .tips and change css on .measure-tips
    else {
      //$('.size-chart-container').find($('.tips')).removeAttr('style');
      var measureStyles = $('.size-chart-container').find($('.measure-tips')).attr('style');
      measureStyles = measureStyles.split(';');
      measureStyles = measureStyles[0];
      $('.size-chart-container').find($('.measure-tips')).attr('style', measureStyles);
    }
  };

  /*-----------------------------------------------------------------------------------------*/
  //function to adjust css for .tips
  var adjustTipsCSS = function() {
    var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
    var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');
    // var deptVal = $('.size-chart-container .department').val();

    if (deptVal == 'baby girl' || deptVal == 'baby boy') {
      //desktop
      if ($(window).width() > 737) {
        //if bottoms
        // if(catVal == 'bottoms'){
        //   $('.size-chart-container').find($('.tips')).css('top','180px');
        // } else {
        //   $('.size-chart-container').find($('.tips')).css('top','148px');
        // }

        $('.size-chart-container').find($('.tips')).css('top', '128px');

        $('.size-chart-container').find($('.tips')).show();
      }
      //mobile
      if ($(window).width() < 737) {
        if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
          $('.size-chart-container').find($('.tips')).hide();
        } else {
          $('.size-chart-container').find($('.tips')).show();

          //change the css positioning
          $('.size-chart-container').find($('.tips')).css('top', '189px');
        }
      }

    }
    //else if newborn hide .tips
    else if (deptVal == 'newborn') {
      $('.size-chart-container').find($('.tips')).hide()
    }
    // if category is shoes + accessories  or pajams
    else if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
      $('.size-chart-container').find($('.tips')).hide();
    }
    // else remove the style attribute on .tips
    else {
      $('.size-chart-container').find($('.tips')).removeAttr('style');
    }
  };

  /*-----------------------------------------------------------------------------------------*/

  //function to add data-dept attr to .tips
  var addDataAttr = function() {
    //add class to .tips
    var onloadDeptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
    // var onloadDeptVal = $('.size-chart-container .department').val();

    $('.size-chart-container').find($('.tips')).attr('data-dept', onloadDeptVal);
  };

  /*-----------------------------------------------------------------------------------------*/

  //function to change the 1st row of the size chart table
  var changeRow = function() {
    var d = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
    var c = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');

    // var d = $('.size-chart-container .department').val();
    // var c = $('.size-chart-container .category').val();

    var str;

    if (d == 'newborn') {
      str = d + ' size chart';
    } else if (c == 'sweater + outerwear') {
      str = d + ' outerwear size chart (sweaters + jackets)';
    } else if (d == 'baby girl' && c == 'tops') {
      str = d + ' tops, hoodies + bodysuits size chart';
    } else if (d == 'baby boy' && c == 'tees + shirts') {
      str = d + ' tees, shirts, hoodies + bodysuits size chart';
    } else {
      str = d + ' ' + c + ' size chart';
    }

    $('.size-chart-table table .size-chart-header th').html(str);
  };

  /*-----------------------------------------------------------------------------------------*/

  //onload make the department dropdown
  //make the department dropdown
  $.each(sizeChartArr, function(i, val) {
    //<ul>
    var deptLi = '<li>' + val.dept + '</li>';
    $('.size-chart-container ul.department').append(deptLi);
    //<select>
    var deptOption = '<option value="' + val.dept + '">' + val.dept + '</option>';
    $('.size-chart-container select.department').append(deptOption);
  });

  /*-----------------------------------------------------------------------------------------*/

  //function to select the department & category based  url params
  var selectDeptCat = function(urlpara, elem1, elem2) {
    //onload check if parameters in url for department and category
    var urlParam = window.location.href;

    var ul = elem1;
    ul = ul.replace('li', '');

    //check if parameters
    if (urlParam.indexOf('?') !== -1) {
      var paramArr = urlParam.split('?');
      //split the parameters into an array
      paramArr = paramArr[1].split('&');
      //loop through the array to find selectedDept & selectedCat then change the selected values from the dropdown
      $.each(paramArr, function(i, val) {
        var param = val.split('=');
        if (param[0] == urlpara) {
          var dept = param[1];
          //if 20% in variable change to ' '
          dept = String(dept.replace(/%20/g, ' '));

          //change the value selected from the dropdown
          //<ul>
          $(ul).prepend('<li class="selected">' + dept + '</li>');

          //<select>
          $(elem2).val(dept);
        }

      });

    } else {

      //for desktop defaults to prepend <li class="selected">dept/cat</li> to both ul.department & ul.category
      var s = $(elem1 + ':first-of-type').text();
      $(ul).prepend('<li class="selected">' + s + '</li>');

    }


  };


  /*-----------------------------------------------------------------------------------------*/

  //function to change the copy in .measure-tips
  var changeCopy = function(sizeChartArr) {
    //get the value of the selected department and category
    var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
    var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');

    $.each(sizeChartArr, function(i, val) {
      //get the dept that match
      if (deptVal == val.dept) {

        //if swim
        if (catVal == 'swim') {
          //check if swim already on page
          var isSwim = $('.measure-tips .swim');
          //desktop
          if ($(window).width() > 737) {
            if (isSwim.length == 0) {
              //find the .measure-tips div:nth-of-type(2) and prepend <span class="top"> & <span class="bottom">
              $('.measure-tips div:nth-of-type(2)').prepend('<span class="top"></span><span class="bottom"><h2></h2><p></p></span>');
              //move the h2 and p into .top
              $('.measure-tips div:nth-of-type(2) .top').append($('.measure-tips div:nth-of-type(2) > h2, .measure-tips div:nth-of-type(2) > p'));
            }

            //if baby boy swim
            if (deptVal == 'baby boy') {
              $('.measure-tips div:first-of-type').addClass('baby-boy-swim');
              $('.measure-tips div:nth-of-type(2)').addClass('baby-boy-swim');
            }
          }

          //add the content
          $.each(val.cat, function(j, arr) {

            //get the cat that match
            if (catVal == arr.name) {
              //change the copy
              // console.log(arr);
              var divs = $('.size-chart-container .measure-tips div');
              // console.log(divs);

              $.each(divs, function(k, obj) {
                if (k == 0) {
                  //change the h2
                  $(obj).find('h2').html(arr.leftH2);
                  //change the p
                  $(obj).find('p').html(arr.leftP);
                } else if (k == 1) {
                  //desktop
                  if ($(window).width() > 737) {

                    if (arr.rightH2Bottom !== '') {
                      //add .swim to .measure-tips div:first-of-type
                      $('.measure-tips div:first-of-type').addClass('swim');
                      //add .two-rows to .measure-tips div:nth-of-type(2)
                      $('.measure-tips div:nth-of-type(2)').addClass('two-rows');
                    } else {
                      $('.measure-tips div:nth-of-type(2)').removeClass('two-rows');
                    }

                    //change the h2 .top
                    $(obj).find('.top').find('h2').html(arr.rightH2);
                    //change the p .top
                    $(obj).find('.top').find('p').html(arr.rightP);
                    //change the h2 .bottom
                    $(obj).find('.bottom').find('h2').html(arr.rightH2Bottom);
                    //change the p .bottom
                    $(obj).find('.bottom').find('p').html(arr.rightPBottom);

                  }

                  //mobile
                  if ($(window).width() < 737) {
                    //change the h2
                    $(obj).find('h2').html(arr.leftH2);
                    //change the p
                    $(obj).find('p').html(arr.leftP);
                  }
                }
              });
            }
          });

        } else {

          $.each(val.cat, function(j, arr) {
            //move .top contents out
            $('.measure-tips div:nth-of-type(2)').append($('.measure-tips .top h2, .measure-tips .top p'));
            //remove .top & .bottom because of swim
            $('.measure-tips div:nth-of-type(2) .top, .measure-tips div:nth-of-type(2) .bottom').remove();
            //remove .swim & .baby-boy-swim from .measure-tips div:first-of-type
            $('.measure-tips div:first-of-type').removeClass('swim');
            $('.measure-tips div:first-of-type').removeClass('baby-boy-swim');

            $('.measure-tips div:nth-of-type(2)').removeClass('two-rows');
            $('.measure-tips div:nth-of-type(2)').removeClass('baby-boy-swim');

            //get the cat that match
            if (catVal == arr.name) {
              //change the copy
              // console.log(arr);
              var divs = $('.size-chart-container .measure-tips div');
              // console.log(divs);

              $.each(divs, function(k, obj) {
                if (k == 0) {
                  //change the h2
                  $(obj).find('h2').html(arr.leftH2);
                  //change the p
                  $(obj).find('p').html(arr.leftP);
                } else if (k == 1) {
                  //desktop
                  if ($(window).width() > 737) {
                    //change the h2
                    $(obj).find('h2').html(arr.rightH2);
                    //change the p
                    $(obj).find('p').html(arr.rightP);
                  }
                  //mobile
                  if ($(window).width() < 737) {

                    //if newborn hide div
                    if (deptVal == 'newborn') {
                      $(obj).hide();
                    }
                    // not newborn
                    else {
                      $(obj).show();
                    }
                    //change the h2
                    $(obj).find('h2').html(arr.leftH2);
                    //change the p
                    $(obj).find('p').html(arr.leftP);
                  }

                }
              });
            }
          });
        }
      }
    });

  };

  /*-----------------------------------------------------------------------------------------*/

  //function to change the order of the tables for shoes + accessories
  var changeOrder = function() {
    var cat = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');

    //if shoes + accessories re-order the tables
    if (cat == 'shoes + accessories') {

      //hide the .size-chart-table children
      $('.size-chart-table').children().hide();

      //add the loading
      $('.size-chart-table').prepend('<div style="text-align:center; font-size:15px; font-family:brown-pro-bold !important" class="tables-loading">LOADING...</div>');

      setTimeout(function() {
        var tables = $('.size-chart-table table');

        //loop through and re-order
        $.each(tables, function(i, val) {
          var str = $(val).find('.size-chart-header th').text();
          // console.log(str);
          //if hat make 1st
          if (str.indexOf('hat') !== -1) {
            $('.size-chart-table').prepend($(val));
          }

          //if headband make 2nd
          if (str.indexOf('headband') !== -1) {
            $('.size-chart-table table:nth-of-type(2)').after($(val));
          }

          //if socks make last
          if (str.indexOf('socks') !== -1) {
            $('.size-chart-table').append($(val));
          }

        });

        //move the 2T/2 message to the bottom
        $('.size-chart-table').append($('.align-center'));

        //remove the loading
        $('.tables-loading').remove();

        //show the .size-chart-table table but not .the-table
        var children = $('.size-chart-table').children();
        $.each(children, function(i, val) {
          //don't show if has class .the-table
          if (!$(val).hasClass('the-table')) {
            $(val).show();
          }
        });

      }, 1100);

    }
  };

  /*-----------------------------------------------------------------------------------------*/
  //function on elem change go to ext url
  var brandChange = function() {

    //collapse ul.brand on .brands click
    $('.brands, table, .measure-tips').click(function() {
      $('ul.brand').removeAttr('style');
    });

    //expand or collapse
    //desktop dropdown to expand and collapse
    $('ul.brand').click(function() {
      //check if has style attr remove it
      if ($(this).attr('style') !== undefined) {
        $(this).removeAttr('style');
      }
      // if doesn't have style attr add css to expand
      else {
        $(this).css('height', 'auto');
      }

    });

    //on .shoes change
    //<ul>
    $('.size-chart-table').find('ul.brand li').click(function() {
      var txt = $(this).text();
      txt = txt.toLowerCase();
      var brand = $(this).attr('data-url');
      if (txt !== 'please select a brand') {
        window.open(brand, '_blank');
      }
    });

  };

  /*-----------------------------------------------------------------------------------------*/

  //function to make the brand drop down for shoes or sweaters
  var makeBrands = function() {
    //remove .brands
    $('.brands, .brands-dropdown').remove();

    var dept = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
    var cat = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');

    //only execute if sweaters or shoes
    if (cat == 'sweater + outerwear' || cat == 'shoes + accessories') {
      //make the element to add to the page
      // var elem = '<div class="brands"></div>';
      var elem1 = '<div class="brands"></div>';
      var elem2 = '<div class="brands-dropdown"></div>';
      var h2;
      var text = '<p>Please select a brand from the menu below to view<br> the size chart. Size chart will open in a new window.</p>'
      var select = $('<select class="brand mobile" onchange="window.open(this.value)"><option>Please select a brand</option></select>');
      var ul = $('<ul class="brand desktop"><li>Please select a brand</li></ul>');
      var ol = $('<ol class="mobile"></ol>');

      //if shoes + accessories
      if (cat == 'shoes + accessories') {
        h2 = '<h2>' + dept + ' shoes size chart</h2>';

        //add the <option> and <li>
        //loop through the .sizeChartArr
        $.each(sizeChartArr, function(i, val) {
          //find the matched dept
          if (dept == val.dept) {
            //loop through dept shoes
            $.each(val.shoes, function(j, shoe) {
              //loop through the shoeBrands
              $.each(shoeBrands, function(k, brand) {
                //if match output
                if (shoe == brand.brand) {
                  //<ul>
                  var li = '<li data-url="' + brand.url + '">' + shoe + '</li>';
                  //<ol>
                  var li2 = '<li><a href="' + brand.url + '" target="_blank">' + shoe + '</a></li>';
                  //<select>
                  var option = '<option value="' + brand.url + '">' + shoe + '</option>';

                  $(ul).append(li);
                  $(ol).append(li2);
                  $(select).append(option);
                }
              });
            });
          }
        });
      }

      //else if sweaters + outerwear
      else if (cat == 'sweater + outerwear') {
        h2 = '<h2>' + dept + ' outerwear size chart (other brands)</h2>';
        //<ul>
        $(ul).append('<li data-url="https://www.patagonia.com/size-boys-girls.html">patagonia</li>');

        //<ol>
        $(ol).append('<li><a href="https://www.patagonia.com/size-boys-girls.html" target="_blank">patagonia</a></li>');

        //<select>
        $(select).append('<option value="https://www.patagonia.com/size-boys-girls.html">patagonia</option>');
      }

      // console.log(h2, text, select);

      //append the elements into .brands

      var brandsContainer = $(elem1).append(h2, text);

      //because of safari not allowing window.open()
      //if mobile
      if ($(window).width() < 737) {
        //if safari
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
          var brandsDropdown = $(elem2).append(ol, ul);
        }
        //not safari
        else {
          var brandsDropdown = $(elem2).append(select, ul);
        }
      }
      //not mobile
      else {
        var brandsDropdown = $(elem2).append(select, ul);
      }


      //add to page
      $('.size-chart-table').append(brandsContainer);
      $('.size-chart-table').append(brandsDropdown);

      //because of onload append shoe size chart to .size-chart-table
      setTimeout(function() {
        $('.size-chart-table').append($('.brands'));
        $('.size-chart-table').append($('.brands-dropdown'));
      }, 1500);

      //on .brand change
      brandChange();

    }
  };


  /*-----------------------------------------------------------------------------------------*/

  //onload select Dept based on url params
  selectDeptCat('selectedDept', '.size-chart-container ul.department li', '.size-chart-container select.department');

  //onload change the cats dropdown
  //make the category dropdown
  changeCats(sizeChartArr)

  //onload select Cat based on url params
  selectDeptCat('selectedCat', '.size-chart-container ul.category li', '.size-chart-container select.category');

  //onload change the background image
  changeBackground(sizeChartArr);

  //onload change the copy
  changeCopy(sizeChartArr);

  //if shoes + accessories hide .tips & change min-height and padding of .measure-tips
  adjustMeasureCSS();

  //if baby boy or baby girl adjust css on .tips
  adjustTipsCSS();

  //add class to .tips
  addDataAttr();

  //change <th> of the .size-chart-table table
  changeRow();

  //if shoes + accessories or sweaters + outerwear add the brands drop down
  makeBrands();

  //re-order the tables if shoes + accessories
  changeOrder();




  /*-----------------------------------------------------------------------------------------*/

  //on .department change
  $('.size-chart-container select.department').change(function() {

    //remove all the <option> in .category
    $('.size-chart-container select.category option').remove();

    //change the cats dropdown
    changeCats(sizeChartArr);

    //change the background image
    changeBackground(sizeChartArr);

    //change the copy
    changeCopy(sizeChartArr);

    //if shoes + accessories hide .tips & change min-height and padding of .measure-tips
    adjustMeasureCSS();

    //if baby boy or baby girl adjust css on .tips
    adjustTipsCSS();

    //add class to .tips
    addDataAttr();

    //change <th> of the .size-chart-table table
    changeRow();

    //make the table
    makeTable();

    //if shoes + accessories or sweaters + outerwear add the brands drop down
    makeBrands();

  });

  /*-----------------------------------------------------------------------------------------*/

  //on .category change
  $('.size-chart-container select.category').change(function() {

    //change the background image
    changeBackground(sizeChartArr);

    //change the copy
    changeCopy(sizeChartArr);

    //if shoes + accessories hide .tips & change min-height and padding of .measure-tips
    adjustMeasureCSS();

    //if baby boy or baby girl adjust css on .tips
    adjustTipsCSS();

    //change <th> of the .size-chart-table table
    changeRow();

    //make the table
    makeTable();

    //if shoes + accessories or sweaters + outerwear add the brands drop down
    makeBrands();

    //re-order the tables if shoes + accessories
    changeOrder();

  });

  /*-----------------------------------------------------------------------------------------*/
  //desktop dropdown to expand and collapse
  $('ul.department, ul.category').click(function() {
    //check if has style attr remove it
    if ($(this).attr('style') !== undefined) {
      $(this).removeAttr('style');
    }
    // if doesn't have style attr add css to expand
    else {
      $(this).css('height', 'auto');
      $(this).find('li.selected').text('please select');
    }

  });

  /*-----------------------------------------------------------------------------------------*/
  //desktop dropdown to select new department
  $('ul.department li').click(function() {

    if ($(this).attr('class') !== 'selected') {
      //get the clicked li text
      var txt = $(this).text();
      //change the text of .selected
      $('ul.department .selected').text(txt);

      //remove all the li in ul.category
      $('ul.category li').remove();

      //change the cats dropdown
      changeCats(sizeChartArr);

      //prepend <li class="selected">cat</li> to ul.category
      var s = $('ul.category li:first-of-type').text();
      $('ul.category').prepend('<li class="selected">' + s + '</li>');

      //change the background image
      changeBackground(sizeChartArr);

      //change the copy
      changeCopy(sizeChartArr);

      //if shoes + accessories hide .tips & change min-height and padding of .measure-tips
      adjustMeasureCSS();

      //if baby boy or baby girl adjust css on .tips
      adjustTipsCSS();

      //add class to .tips
      addDataAttr();

      //change <th> of the .size-chart-table table
      changeRow();

      //make the table
      makeTable();

      //if shoes + accessories or sweaters + outerwear add the brands drop down
      makeBrands();

      //if user changes the ul.category
      catLiChange();
    }

  });

  /*-----------------------------------------------------------------------------------------*/
  //function for desktop dropdown to select new category
  var catLiChange = function() {
    $('ul.category li').click(function() {

      if ($(this).attr('class') !== 'selected') {
        //get the clicked li text
        var txt = $(this).text();
        //change the text of .selected
        $('ul.category .selected').text(txt);

        //change the background image
        changeBackground(sizeChartArr);

        //change the copy
        changeCopy(sizeChartArr);

        //if shoes + accessories hide .tips & change min-height and padding of .measure-tips
        adjustMeasureCSS();

        //if baby boy or baby girl adjust css on .tips
        adjustTipsCSS();

        //add class to .tips
        addDataAttr();

        //change <th> of the .size-chart-table table
        changeRow();

        //make the table
        makeTable();

        //if shoes + accessories or sweaters + outerwear add the brands drop down
        makeBrands();

        //re-order the tables if shoes + accessories
        changeOrder();

      }

    });
  };

  //onpage load call this
  catLiChange();


  /*-----------------------------------------------------------------------------------------*/

  // on click .tips
  $('.size-chart-container').find($('.tips')).click(function(e) {
    e.preventDefault();

    //get the data-dept
    var dept = $(this).attr('data-dept');

    //hide h1
    $('.size-chart-container h1').hide();

    //add the content to .measure-take-over
    $.each(sizeChartArr, function(i, val) {
      if (dept == val.dept) {
        //add the image
        //desktop
        if ($(window).width() > 737) {
          $('.measure-content img').attr('src', 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/' + val.measure.img);
        }
        //mobile
        else if ($(window).width() < 737) {
          var imgSrc = val.measure.img;

          imgSrc = imgSrc.split('.');
          imgSrc = imgSrc[0] + '-m.' + imgSrc[1];

          $('.measure-content img').attr('src', 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/' + imgSrc);
        }

        //add the chest text
        $('.measure-content .text .chest p').html(val.measure.chest);
        //add the hips text
        $('.measure-content .text .hips p').html(val.measure.hips);
        //add the waist text
        $('.measure-content .text .waist p').html(val.measure.waist);
      }
    });

    //hide the other elements
    var base = '.size-chart-container';
    $(base + ' .dropdowns, ' + base + ' .measure-tips, ' + base + ' .size-chart-table').hide();

    //show .measure-take-over
    $('.measure-take-over').show();
  });

  /*-----------------------------------------------------------------------------------------*/
  //collapse ul.department & ul.category when click on .measure-tips
  $('.measure-tips').click(function() {
    var dept = $('ul.department')
    var cat = $('ul.category')

    var arr = [dept, cat];

    $.each(arr, function(i, val) {
      var attribute = $(val).attr('style');
      if (attribute !== undefined) {
        $(val).removeAttr('style');
      }
    });
  });

  /*-----------------------------------------------------------------------------------------*/
  //collapse ul.brand when click on .size-chart-table
  $('.brands h2').click(function() {

    $('ul.brand').removeAttr('style');

  });

  /*-----------------------------------------------------------------------------------------*/

  //close the .measure-take-over
  $('.measure-take-over .measure, .measure-take-over .return').click(function() {

    //show h1
    $('.size-chart-container h1').show();

    //hide .measure-take-over
    $('.measure-take-over').hide();
    //show the other elements
    var base = '.size-chart-container';
    $(base + ' .dropdowns, ' + base + ' .measure-tips, ' + base + ' .size-chart-table').show();

    //reset the .measure-content
    //the image
    $('.measure-content img').attr('src', '');
    //the chest text
    $('.measure-content .text .chest p').html('');
    //the hips text
    $('.measure-content .text .hips p').html('');
    //the waist text
    $('.measure-content .text .waist p').html('');
  });


  /*-----------------------------------------------------------------------------------------*/

  //function to make th <td>
  var makeTd = function(k, row, rows, tableElem) {
    // console.log(tableElem);
    // console.log(k, row, rows);

    //add the data <td>
    $.each(row.values, function(l, td) {
      //loop only to the rows variable
      if (l <= rows) {
        var content;
        var fraction;
        var theFraction;
        // console.log(l, rows, row);

        if (td.formattedValue !== undefined) {
          content = td.formattedValue;
          // console.log(content);
          content = content.toLowerCase();
          content = content.replace(' - ', '&ndash;');
          content = content.replace('months', 'mos');
          content = content.replace('years', 'yrs');

          if (content.indexOf('inches') !== -1 || content.indexOf('pounds') !== -1) {
            content = content.split('\n');
            // console.log(content);

            content = content[0] + '<span>' + content[1] + '</span>';
          }

          if (content == 'shoe size') {
            content = '<span class="shoe-size">' + content + '</span>';
          }


          fraction = td.formattedValue;
          // console.log('the fraction: ',fraction);
          //for shoes + accessories if not L/XL
          if (fraction !== 'L/XL' && fraction !== '2T/2' && fraction !== '3T/3' && fraction !== '4T/4') {
            //if cell has two fractions example 58 1/2 - 61 1/2
            if (fraction.indexOf('/') !== -1 && fraction.indexOf('-') !== -1) {
              fraction = fraction.split('-');
              var twoFrac = [];
              $.each(fraction, function(m, frac) {
                var fracArray = frac.split(' ');
                $.each(fracArray, function(n, num) {
                  if (num !== '') {
                    twoFrac.push(num);
                  }
                })
              });

              // console.log(twoFrac);

              //output
              //example 61 1/2 - 64
              if (twoFrac[1].indexOf('/') !== -1 && twoFrac[3] == undefined) {
                var twoFracA = twoFrac[1].split('/');
                twoFrac[1] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac">' + twoFracA[1] + '</span>';
                $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' ' + twoFrac[1] + ' &ndash; ' + twoFrac[2] + '</td>');
              }

              //example 61 - 61 1/2
              else if (twoFrac[1].indexOf('/') == -1 && twoFrac[2].indexOf('/') !== -1) {
                var twoFracA = twoFrac[2].split('/');
                twoFrac[2] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac">' + twoFracA[1] + '</span>';
                $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' &ndash; ' + twoFrac[1] + ' ' + twoFrac[2] + '</td>');
              }

              //example 58 1/2 - 61 1/2
              else if (twoFrac[1].indexOf('/') !== -1 && twoFrac[1] !== undefined && twoFrac[3].indexOf('/') !== -1 && twoFrac[3] !== undefined) {

                var twoFracA = twoFrac[1].split('/');
                twoFrac[1] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac">' + twoFracA[1] + '</span>';

                var twoFracB = twoFrac[3].split('/');
                twoFrac[3] = '<sup class="frac">' + twoFracB[0] + '</sup>&frasl;<span class="frac">' + twoFracB[1] + '</span>';
                $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' ' + twoFrac[1] + ' &ndash; ' + twoFrac[2] + ' ' + twoFrac[3] + '</td>');
              }

            }

            //only one fraction
            else {
              fraction = fraction.split(' ');
              $.each(fraction, function(m, frac) {
                // console.log(m, frac);
                if (frac.indexOf('/') !== -1) {
                  theFraction = frac;
                  // console.log('theFraction: ',theFraction);
                }
              });

              //output
              if (theFraction !== undefined && theFraction.indexOf('/') !== -1) {
                theFraction = theFraction.split('/');
                htmlFraction = '<sup class="frac">' + theFraction[0] + '</sup>&frasl;<span class="frac">' + theFraction[1] + '</span>';
                $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + fraction[0] + ' ' + htmlFraction + '</td>');
              } else {
                $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + content + '</td>');
              }
            }

            //output sizes 'L/XL','2T/2','3T/3','4T/4'
          } else if (fraction == 'L/XL' || fraction == '2T/2' || fraction == '3T/3' || fraction == '4T/4') {
            // console.log('yo buddy: ', fraction);
            $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + fraction + '</td>');
          }

        }

      }
    });
  };

  /*-----------------------------------------------------------------------------------------*/

  //function to output the table contents
  var outputTable = function(i, val, rows) {

    //output the table
    $.each(val.data[0].rowData, function(k, row) {
      //add the row <tr>
      if (k > 2) {

        var tableLength = $('.size-chart-table table').length;
        // console.log(tableLength);

        //check if the number of rows is even or odd then add class
        var tableNum = val.data[0].rowData.length - 4;

        //if only one table (not shoes + accessories)
        if (tableLength == 1) {

          $('.size-chart-container .the-table').append('<tr data-num="' + k + '"></tr>');

          //add the data <td>
          makeTd(k, row, rows, '.size-chart-container .the-table');
        }
        //if multiple tables (shoes + accessories)
        else if (tableLength > 1) {
          // console.log(row.values[0].formattedValue);

          //only make a row if the 1st td of the row has data
          if (row.values[0].formattedValue !== undefined) {

            $('.size-chart-table table[data-num="' + i + '"]').append('<tr data-num="' + k + '"></tr>');

            // console.log('more then one table\n this is the index\n' + i);

            //add the data <td>
            makeTd(k, row, rows, '.size-chart-table table[data-num="' + i + '"]');
          }

        }

      }
    });
  };

  /*-----------------------------------------------------------------------------------------*/

  //function to make table header because of shoes + accessories have multiple tables
  var makeTableHeader = function(i, val, dept, subcat) {

    //add new table
    $('.size-chart-table').append('<table data-num="' + i + '"><tr class="size-chart-header"><th>' + dept + ' ' + subcat + ' size chart</th></tr></table>');
    // console.log('rows: ', val);
    rows = val.merges[0].endColumnIndex - 1;
    colspan = val.merges[0].endColumnIndex;
    // console.log(colspan);

    //add colspan to .size-chart-header
    $('.size-chart-table table[data-num="' + i + '"] th').attr('colspan', colspan);

    return rows;
  };

  /*-----------------------------------------------------------------------------------------*/

  //function to create the tables
  var makeTable = function() {
    //show .the-table
    $('.size-chart-table .the-table').show();

    //remove all <tr> except the 1st one
    var trs = $('.size-chart-table table tr');
    $.each(trs, function(i, val) {
      if ($(val).attr('class') !== 'size-chart-header') {
        $(val).remove();
      }
    });

    //remove all the tables except the .the-table
    var tables = $('.size-chart-table table');
    $.each(tables, function(i, val) {
      if ($(val).attr('class') !== 'the-table') {
        $(val).remove();
      }
    });

    //the selected values
    var dept = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
    var cat = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');

    var sheet = sheets;

    //loop through sheet and find the matched table
    $.each(sheet, function(i, val) {
      var sheetVal = val.data[0].rowData[2].values[0].formattedValue;
      var sheetArr = sheetVal.split(':');
      var sheetDept = sheetArr[0];
      var sheetCatArr = sheetArr[1].split(',');
      // console.log(sheetCatArr);

      //if baby
      if (sheetDept == 'baby') {
        sheetDept = ['baby girl', 'baby boy'];
      }

      //check if dept matches
      if (sheetDept == dept || sheetDept[0] == dept || sheetDept[1] == dept) {
        //check if cat matches
        $.each(sheetCatArr, function(j, category) {
          if (category == cat) {
            // console.log(i,val);
            var rows;
            var colspan;

            //if newborn department or category is shoes + accessories
            if (dept == 'newborn' || cat == 'shoes + accessories') {
              //hide the top table
              $('.size-chart-container .the-table').hide();

              var subcat = val.data[0].rowData[2].values[0].formattedValue;

              //if not newborn
              if (dept !== 'newborn') {
                subcat = subcat.split(',')[1];
              } else {
                //this is newborn
                subcat = subcat.split(',');

                if (subcat[1] !== undefined) {
                  subcat = subcat[1];
                } else {
                  subcat = 'all categories';
                }

              }

              // console.log(subcat);

              //if girl
              if (dept == 'girl') {
                rows = makeTableHeader(i, val, dept, subcat);
              }

              //if boy || baby girl || baby baby
              if (dept == 'boy' || dept == 'baby girl' || dept == 'baby boy') {
                rows = makeTableHeader(i, val, dept, subcat);
              }

              //if newborn
              if (dept == 'newborn') {
                rows = makeTableHeader(i, val, dept, subcat);
              }

              //output the table contents
              outputTable(i, val, rows);

              //stop the function
              return false;

            } else {

              rows = val.merges[0].endColumnIndex - 1;
              colspan = val.merges[0].endColumnIndex;

              //add colspan to .size-chart-header
              $('.size-chart-header th').attr('colspan', colspan);

              //output the table contents
              outputTable(i, val, rows);

              //stop the function
              return false;
            }

          }
        });
      }
    });


  };

  //add the loading
  $('.size-chart-table').append('<div style="text-align:center; font-size:15px; font-family:brown-pro-bold !important" class="tables-loading">LOADING...</div>');

  // var sheetId = '1guudkOtlPolTXiMskAmMqplxY9NM11W6UW1hxmpPpH0';
  var sheetId = '1_uxw0nK5cwnP02JM4ks9SvQo8qeXel41BgQM3a19xwY';
  // var hidden = 'AIzaSyDHknRbkWGT1ozvC_H_rNtFlLsGGjXFs';
  var hidden = 'AIzaSyCya37AW8ylhzoeU3FDFuUG824MfdW8wY8';

  //if sheets is undefined make the $.get call else just call makeTable() and remove the loading
  if (sheets == undefined) {
    // console.log('no sheets');
    //make the get call
    $.getJSON('https://sheets.googleapis.com/v4/spreadsheets/' + sheetId + '?key=' + hidden + '&includeGridData=true', function(data) {

      // console.log(data);
      sheets = data.sheets;

      //make the table
      makeTable();

      //remove the loading
      $('.tables-loading').remove();
    });
  } else {
    // console.log('sheets found');

    //make the table
    makeTable();

    //remove the loading
    $('.tables-loading').remove();

  }

});