module.exports = function(grunt){
	return {
		options:{livereload: true},

      // HOMEPAGE CSS ---------------------------------------------------------------------------
  		cssHP: {
  			files: ['homepage/170727/css/*.less'],
  			tasks: ['less:hpCSS','makeCss:homepage/170727/css/hp-styles.css:homepage/170727/css/hp-styles.css', 'concat:hpD', 'concat:hpM', 'concat:hpToolkit'],
  		},

      // cssHP1: {
      //   files: ['homepage/170727/css/*.less'],
      //   tasks: ['less:hpCSS1','makeCss:homepage/170727/css/hp-styles-original.css:homepage/170727/css/hp-styles-original.css', 'concat:hpD1', 'concat:hpM1', 'concat:hpToolkit1'],
      // },
      
      // GIRLS CLOTHING CSS ---------------------------------------------------------------------------
      cssGirlsClothing: {
        files: ['category-pages/170727/css/girls-clothing.less'],
        tasks: ['less:girlsClothingCSS','makeCss:category-pages/170727/css/girls-clothing.css:category-pages/170727/css/girls-clothing.css', 'concat:girlsClothingD','concat:girlsClothingM','concat:girlsClothingToolkit'],
      },
      // BOYS CLOTHING CSS ---------------------------------------------------------------------------
      cssBoysClothing: {
        files: ['category-pages/170727/css/boys-clothing.less'],
        tasks: ['less:boysClothingCSS','makeCss:category-pages/170727/css/boys-clothing.css:category-pages/170727/css/boys-clothing.css', 'concat:boysClothingD','concat:boysClothingM','concat:boysClothingToolkit'],
      },
      // BABY GIRL CLOTHES CSS ---------------------------------------------------------------------------
      cssBabyGirlClothes: {
        files: ['category-pages/170727/css/baby-girl-clothes.less'],
        tasks: ['less:babyGirlClothesCSS','makeCss:category-pages/170727/css/baby-girl-clothes.css:category-pages/170727/css/baby-girl-clothes.css', 'concat:babyGirlClothesD','concat:babyGirlClothesM','concat:babyGirlClothesToolkit'],
      },
      // BABY BOY CLOTHES CSS ---------------------------------------------------------------------------
      cssBabyBoyClothes: {
        files: ['category-pages/170727/css/baby-boy-clothes.less'],
        tasks: ['less:babyBoyClothesCSS','makeCss:category-pages/170727/css/baby-boy-clothes.css:category-pages/170727/css/baby-boy-clothes.css', 'concat:babyBoyClothesD','concat:babyBoyClothesM','concat:babyBoyClothesToolkit'],
      },
       // NEWBORN CLOTHES CSS ---------------------------------------------------------------------------
      cssNewbornClothes: {
        files: ['category-pages/170727/css/newborn-clothes.less'],
        tasks: ['less:newbornClothesCSS','makeCss:category-pages/170727/css/newborn-clothes.css:category-pages/170727/css/newborn-clothes.css', 'concat:newbornClothesD','concat:newbornClothesM','concat:newbornClothesToolkit'],
      },
      // CATALOG CSS ---------------------------------------------------------------------------
      Catalog: {
        files: ['catalog/170330/css/catalog.less', 'catalog/170330/dev/*.html'],
        tasks: ['less:catalogCSS','makeCss:catalog/170330/css/catalog.css:catalog/170330/css/catalog.css', 'concat:catalog'],
      },
      // INFLUENCER CSS ---------------------------------------------------------------------------
      Influencer: {
        files: ['landing-page/influencer/css/influencer-styles.less', 'landing-page/influencer/dev/content.html'],
        tasks: ['less:influencerCSS','makeCss:landing-page/influencer/css/influencer-styles.css:landing-page/influencer/css/influencer-styles.css', 'concat:influencer'],
      },
      // BABYSWEEPS CSS ---------------------------------------------------------------------------
      Babysweeps: {
        files: ['landing-page/baby-sweeps/css/styles.less', 'landing-page/baby-sweeps/dev/content.html'],
        tasks: ['less:babysweepsCSS','cssmin','makeCss:landing-page/baby-sweeps/css/styles.css:landing-page/baby-sweeps/css/styles.css', 'concat:babysweeps'],
      },
      // LITTLE CITIZEN CSS ---------------------------------------------------------------------------
      LittleCitizen: {
        files: ['landing-page/little-citizen/170723/css/styles.less','landing-page/little-citizen/170723/dev/content.html'],
        tasks: ['less:littleCitizenCSS','cssmin','makeCss:landing-page/little-citizen/170723/css/styles.css:landing-page/little-citizen/170723/css/styles.css', 'concat:littleCitizen'],
      },
      // GLOBAL SHOP CSS ---------------------------------------------------------------------------
      GlobalShop: {
        files: ['landing-page/global-shop/css/global-shop-styles.less','landing-page/global-shop/dev/*.html'],
        tasks: ['less:globalShopCSS','makeCss:landing-page/global-shop/css/global-shop-styles.css:landing-page/global-shop/css/global-shop-styles.css', 'concat:globalShop'],
      },
      // ABOUT CSS ---------------------------------------------------------------------------
      About: {
        files: ['landing-page/about/css/styles.less','landing-page/about/dev/content.html'],
        tasks: ['less:aboutCSS','makeCss:landing-page/about/css/styles.css:landing-page/about/css/styles.css', 'concat:about'],
      },
      // CAREERS CSS ---------------------------------------------------------------------------
      Careers: {
        files: ['landing-page/careers/css/styles.less','landing-page/careers/dev/content.html'],
        tasks: ['less:careersCSS','makeCss:landing-page/careers/css/styles.css:landing-page/careers/css/styles.css', 'concat:careers'],
      },
      // INSPIRATION CSS ---------------------------------------------------------------------------
      Inspiration: {
        files: ['landing-page/inspiration/scotland/css/styles.less','landing-page/inspiration/scotland/dev/content.html'],
        tasks: ['less:inspirationCSS','makeCss:landing-page/inspiration/scotland/css/styles.css:landing-page/inspiration/scotland/css/styles.css', 'concat:inspiration'],
      },
      // ACTIVE CSS ---------------------------------------------------------------------------
      Active: {
        files: ['landing-page/active/170727/css/styles.less', 'landing-page/active/170727/dev/*.html'],
        tasks: ['less:activeCSS','makeCss:landing-page/active/170727/css/styles.css:landing-page/active/170727/css/styles.css', 'concat:active'],
      },

      // NAV REDESIGN CSS ---------------------------------------------------------------------------
      NavRedesign: {
        files: ['nav-redesign/css/*.less', 'nav-redesign/html/*.html'],
        tasks: ['less:navRedesignCSS', 'concat:navRedesignHTML'],
      },

      // HEADER REDESIGN CSS ---------------------------------------------------------------------------
      HeaderRedesign: {
        files: ['header-redesign/*.less', 'header-redesign/*.html'],
        tasks: ['less:headerRedesignCSS','concat:headerRedesignHTML'],
      },

     


      // HOMEPAGE HTML ---------------------------------------------------------------------------
  		htmlHP:{
  			files:['homepage/170727/dev/*.html'],
  			tasks:['concat:hpD', 'concat:hpM', 'concat:hpToolkit']
  		},
      // GIRLS CLOTHING HTML ---------------------------------------------------------------------------
      htmlGirlsClothing:{
        files:['category-pages/170727/dev/girls-clothing.html'],
        tasks:['concat:girlsClothingD','concat:girlsClothingM','concat:girlsClothingToolkit']
      },
      // BOYS CLOTHING HTML ---------------------------------------------------------------------------
      htmlBoysClothing:{
        files:['category-pages/170727/dev/boys-clothing.html'],
        tasks:['concat:boysClothingD','concat:boysClothingM','concat:boysClothingToolkit']
      },
      // BABY GIRL CLOTHES HTML ---------------------------------------------------------------------------
      htmlBabyGirlClothes:{
        files:['category-pages/170727/dev/baby-girl-clothes.html'],
        tasks:['concat:babyGirlClothesD','concat:babyGirlClothesM','concat:babyGirlClothesToolkit']
      },
      // BABY BOY CLOTHES HTML ---------------------------------------------------------------------------
      htmlBabyBoyClothes:{
        files:['category-pages/170727/dev/baby-boy-clothes.html'],
        tasks:['concat:babyBoyClothesD','concat:babyBoyClothesM','concat:babyBoyClothesToolkit']
      },
        // NEWBORN CLOTHES HTML ---------------------------------------------------------------------------
      htmlNewbornClothes:{
        files:['category-pages/170727/dev/newborn-clothes.html'],
        tasks:['concat:newbornClothesD','concat:newbornClothesM','concat:newbornClothesToolkit']
      },


      // PROMO TEST HTML ---------------------------------------------------------------------------
      htmlPromoTest: {
        files:['promos/test/dev/*.html'],
        tasks:['concat:promoTestM']
      },

   

      // js: {
      //   files: ['dev/**/*.js'],
      //   tasks: ['concat','uglify']
      // }
 
  }
};