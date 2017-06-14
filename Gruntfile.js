module.exports = function(grunt) {

  // Default task(s).
  grunt.registerTask('hello', 
    function(){
      console.log('hello world from Grunt!');
    });

  grunt.registerTask('makeCss', 
    function(path1, path2){
      var data = grunt.file.read(path1);
      var output = '<style>\n'+data+'\n</style>';
      grunt.file.write(path2, output);
    });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');

    // Project configuration.
  grunt.initConfig({
  	watch: {
  		options:{livereload: true},	
      // HOMEPAGE CSS ---------------------------------------------------------------------------
  		cssHP: {
  			files: ['homepage/170706/css/*.less'],
  			tasks: ['less:hpCSS','makeCss:homepage/170706/css/hp-styles.css:homepage/170706/css/hp-styles.css', 'concat:hpD', 'concat:hpM', 'concat:hpToolkit'],
  		},

      // cssHP1: {
      //   files: ['homepage/170706/css/*.less'],
      //   tasks: ['less:hpCSS1','makeCss:homepage/170706/css/hp-styles-original.css:homepage/170706/css/hp-styles-original.css', 'concat:hpD1', 'concat:hpM1', 'concat:hpToolkit1'],
      // },
      
      // GIRLS CLOTHING CSS ---------------------------------------------------------------------------
      cssGirlsClothing: {
        files: ['category-pages/170706/css/girls-clothing.less'],
        tasks: ['less:girlsClothingCSS','makeCss:category-pages/170706/css/girls-clothing.css:category-pages/170706/css/girls-clothing.css', 'concat:girlsClothingD','concat:girlsClothingM','concat:girlsClothingToolkit'],
      },
      // BOYS CLOTHING CSS ---------------------------------------------------------------------------
      cssBoysClothing: {
        files: ['category-pages/170706/css/boys-clothing.less'],
        tasks: ['less:boysClothingCSS','makeCss:category-pages/170706/css/boys-clothing.css:category-pages/170706/css/boys-clothing.css', 'concat:boysClothingD','concat:boysClothingM','concat:boysClothingToolkit'],
      },
      // BABY GIRL CLOTHES CSS ---------------------------------------------------------------------------
      cssBabyGirlClothes: {
        files: ['category-pages/170706/css/baby-girl-clothes.less'],
        tasks: ['less:babyGirlClothesCSS','makeCss:category-pages/170706/css/baby-girl-clothes.css:category-pages/170706/css/baby-girl-clothes.css', 'concat:babyGirlClothesD','concat:babyGirlClothesM','concat:babyGirlClothesToolkit'],
      },
      // BABY BOY CLOTHES CSS ---------------------------------------------------------------------------
      cssBabyBoyClothes: {
        files: ['category-pages/170706/css/baby-boy-clothes.less'],
        tasks: ['less:babyBoyClothesCSS','makeCss:category-pages/170706/css/baby-boy-clothes.css:category-pages/170706/css/baby-boy-clothes.css', 'concat:babyBoyClothesD','concat:babyBoyClothesM','concat:babyBoyClothesToolkit'],
      },
       // NEWBORN CLOTHES CSS ---------------------------------------------------------------------------
      cssNewbornClothes: {
        files: ['category-pages/170706/css/newborn-clothes.less'],
        tasks: ['less:newbornClothesCSS','makeCss:category-pages/170706/css/newborn-clothes.css:category-pages/170706/css/newborn-clothes.css', 'concat:newbornClothesD','concat:newbornClothesM','concat:newbornClothesToolkit'],
      },
      // CATALOG CSS ---------------------------------------------------------------------------
      cssCatalog: {
        files: ['catalog/170330/css/catalog.less'],
        tasks: ['less:catalogCSS','makeCss:catalog/170330/css/catalog.css:catalog/170330/css/catalog.css', 'concat:catalogD','concat:catalogM','concat:catalogToolkit'],
      },
      // INFLUENCER CSS ---------------------------------------------------------------------------
      cssInfluencer: {
        files: ['landing-page/influencer/css/influencer-styles.less'],
        tasks: ['less:influencerCSS','makeCss:landing-page/influencer/css/influencer-styles.css:landing-page/influencer/css/influencer-styles.css', 'concat:influencerD','concat:influencerM','concat:influencerToolkit'],
      },
      // BABYSWEEPS CSS ---------------------------------------------------------------------------
      cssBabysweeps: {
        files: ['landing-page/babysweeps/css/styles.less'],
        tasks: ['less:babysweepsCSS','cssmin','makeCss:landing-page/babysweeps/css/styles.css:landing-page/babysweeps/css/styles.css', 'concat:babysweepsD','concat:babysweepsM','concat:babysweepsToolkit'],
      },
      // JESSCRAMP CSS ---------------------------------------------------------------------------
      cssjessCramp: {
        files: ['landing-page/jessCramp/css/styles.less'],
        tasks: ['less:jessCrampCSS','cssmin','makeCss:landing-page/jessCramp/css/styles.css:landing-page/jessCramp/css/styles.css', 'concat:jessCrampD','concat:jessCrampM','concat:jessCrampToolkit'],
      },
      // GLOBAL SHOP CSS ---------------------------------------------------------------------------
      cssGlobalShop: {
        files: ['landing-page/global-shop/css/global-shop-styles.less'],
        tasks: ['less:globalShopCSS','makeCss:landing-page/global-shop/css/global-shop-styles.css:landing-page/global-shop/css/global-shop-styles.css', 'concat:globalShopD','concat:globalShopM','concat:globalShopToolkit'],
      },
      // ABOUT CSS ---------------------------------------------------------------------------
      cssAbout: {
        files: ['landing-page/about/css/styles.less'],
        tasks: ['less:aboutCSS','makeCss:landing-page/about/css/styles.css:landing-page/about/css/styles.css', 'concat:aboutD','concat:aboutM','concat:aboutToolkit'],
      },
      // CAREERS CSS ---------------------------------------------------------------------------
      cssCareers: {
        files: ['landing-page/careers/css/styles.less'],
        tasks: ['less:careersCSS','makeCss:landing-page/careers/css/styles.css:landing-page/careers/css/styles.css', 'concat:careersD','concat:careersM','concat:careersToolkit'],
      },
      // INSPIRATION CSS ---------------------------------------------------------------------------
      cssInspiration: {
        files: ['landing-page/inspiration/scotland/css/styles.less'],
        tasks: ['less:inspirationCSS','makeCss:landing-page/inspiration/scotland/css/styles.css:landing-page/inspiration/scotland/css/styles.css', 'concat:inspirationD','concat:inspirationM','concat:inspirationToolkit'],
      },


      fb: {
        files:['fb.html'],
        tasks:['hello']
      },


      // HOMEPAGE HTML ---------------------------------------------------------------------------
  		htmlHP:{
  			files:['homepage/170706/dev/*.html'],
  			tasks:['concat:hpD', 'concat:hpM', 'concat:hpToolkit']
  		},
      // GIRLS CLOTHING HTML ---------------------------------------------------------------------------
      htmlGirlsClothing:{
        files:['category-pages/170706/dev/girls-clothing.html'],
        tasks:['concat:girlsClothingD','concat:girlsClothingM','concat:girlsClothingToolkit']
      },
      // BOYS CLOTHING HTML ---------------------------------------------------------------------------
      htmlBoysClothing:{
        files:['category-pages/170706/dev/boys-clothing.html'],
        tasks:['concat:boysClothingD','concat:boysClothingM','concat:boysClothingToolkit']
      },
      // BABY GIRL CLOTHES HTML ---------------------------------------------------------------------------
      htmlBabyGirlClothes:{
        files:['category-pages/170706/dev/baby-girl-clothes.html'],
        tasks:['concat:babyGirlClothesD','concat:babyGirlClothesM','concat:babyGirlClothesToolkit']
      },
      // BABY BOY CLOTHES HTML ---------------------------------------------------------------------------
      htmlBabyBoyClothes:{
        files:['category-pages/170706/dev/baby-boy-clothes.html'],
        tasks:['concat:babyBoyClothesD','concat:babyBoyClothesM','concat:babyBoyClothesToolkit']
      },
        // NEWBORN CLOTHES HTML ---------------------------------------------------------------------------
      htmlNewbornClothes:{
        files:['category-pages/170706/dev/newborn-clothes.html'],
        tasks:['concat:newbornClothesD','concat:newbornClothesM','concat:newbornClothesToolkit']
      },
      // CATALOG HTML ---------------------------------------------------------------------------
      htmlCatalog:{
        files:['catalog/170330/dev/catalog.html'],
        tasks:['concat:catalogD','concat:catalogM','concat:catalogToolkit']
      },
       // INFLUENCER HTML ---------------------------------------------------------------------------
      htmlInfluencer:{
        files:['landing-page/influencer/dev/content.html'],
        tasks:['concat:influencerD','concat:influencerM','concat:influencerToolkit']
      },
       // BABYSWEEPS HTML ---------------------------------------------------------------------------
      htmlbabysweeps:{
        files:['landing-page/babysweeps/dev/content.html'],
        tasks:['concat:babysweepsD','concat:babysweepsM','concat:babysweepsToolkit']
      },
       // JESSCRAMP HTML ---------------------------------------------------------------------------
      htmlJessCramp:{
        files:['landing-page/jessCramp/dev/content.html'],
        tasks:['concat:jessCrampD','concat:jessCrampM','concat:jessCrampToolkit']
      },
      // GLOBAL SHOP HTML ---------------------------------------------------------------------------
      htmlGlobalShop:{
        files:['landing-page/global-shop/dev/content.html'],
        tasks:['concat:globalShopD','concat:globalShopM','concat:globalShopToolkit']
      },
      // ABOUT HTML ---------------------------------------------------------------------------
      htmlAbout:{
        files:['landing-page/about/dev/content.html'],
        tasks:['concat:aboutD','concat:aboutM','concat:aboutToolkit']
      },
      // CAREERS HTML ---------------------------------------------------------------------------
      htmlCareers:{
        files:['landing-page/careers/dev/content.html'],
        tasks:['concat:careersD','concat:careersM','concat:careersToolkit']
      },
       // INSPIRATION HTML ---------------------------------------------------------------------------
      htmlInspiration:{
        files:['landing-page/inspiration/scotland/dev/content.html'],
        tasks:['concat:inspirationD','concat:inspirationM','concat:inspirationToolkit']
      },
      // PROMO TEST HTML ---------------------------------------------------------------------------
      htmlPromoTest: {
        files:['promos/test/dev/*.html'],
        tasks:['concat:promoTestM']
      }

      // js: {
      //   files: ['dev/**/*.js'],
      //   tasks: ['concat','uglify']
      // }
 
  	},

  	cssmin:{

  		babysweeps:{
  			files:{
  				'landing-page/babysweeps/css/styles.css': 'landing-page/babysweeps/css/styles.css'
  			}
  		},

      jessCramp:{
        files:{
          'landing-page/jessCramp/css/styles.css': 'landing-page/jessCramp/css/styles.css'
        }
      },

  	},

  	less:{
      hpCSS:{
        files:{
          'homepage/170706/css/hp-styles.css': 'homepage/170706/css/hp-styles.less'
        }
      },

      // hpCSS1:{
      //   files:{
      //     'homepage/170706/css/hp-styles-original.css': 'homepage/170706/css/hp-styles-original.less'
      //   }
      // },

      girlsClothingCSS:{
        files:{
          'category-pages/170706/css/girls-clothing.css': 'category-pages/170706/css/girls-clothing.less'
        }
      },

      boysClothingCSS:{
        files:{
          'category-pages/170706/css/boys-clothing.css': 'category-pages/170706/css/boys-clothing.less'
        }
      },

      babyGirlClothesCSS:{
        files:{
          'category-pages/170706/css/baby-girl-clothes.css': 'category-pages/170706/css/baby-girl-clothes.less'
        }
      },

      babyBoyClothesCSS:{
        files:{
          'category-pages/170706/css/baby-boy-clothes.css': 'category-pages/170706/css/baby-boy-clothes.less'
        }
      },

      newbornClothesCSS:{
        files:{
          'category-pages/170706/css/newborn-clothes.css': 'category-pages/170706/css/newborn-clothes.less'
        }
      },

      catalogCSS:{
        files:{
          'catalog/170330/css/catalog.css': 'catalog/170330/css/catalog.less'
        }
      },

  		globalShopCSS:{
  			files:{
  				'landing-page/global-shop/css/global-shop-styles.css': 'landing-page/global-shop/css/global-shop-styles.less'
  			}
  		},

      influencerCSS:{
        files:{
          'landing-page/influencer/css/influencer-styles.css': 'landing-page/influencer/css/influencer-styles.less'
        }
      },

      babysweepsCSS:{
        files:{
          'landing-page/babysweeps/css/styles.css': 'landing-page/babysweeps/css/styles.less'
        }
      },

      jessCrampCSS:{
        files:{
          'landing-page/jessCramp/css/styles.css': 'landing-page/jessCramp/css/styles.less'
        }
      },

      aboutCSS:{
        files:{
          'landing-page/about/css/styles.css': 'landing-page/about/css/styles.less'
        }
      },

      careersCSS:{
        files:{
          'landing-page/careers/css/styles.css': 'landing-page/careers/css/styles.less'
        }
      },

      inspirationCSS:{
        files:{
          'landing-page/inspiration/scotland/css/styles.css': 'landing-page/inspiration/scotland/css/styles.less'
        }
      },

  	},

    concat: {
      // HOMEPAGE ---------------------------------------------------------------------------
      hpD: {
        src: ['local-templates/desktop/d-header-hp.html','homepage/170706/css/hp-styles.css','homepage/170706/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        dest: 'homepage/170706/build/local-hp-d.html'
      },

      hpM: {
        src: ['local-templates/mobile/m-header.html','homepage/170706/css/hp-styles.css','homepage/170706/dev/content.html','local-templates/mobile/m-footer.html'],
        dest: 'homepage/170706/build/local-hp-m.html'
      },

      hpToolkit: {
        src: ['homepage/170706/css/hp-styles.css','homepage/170706/dev/content.html'],
        dest: 'homepage/170706/toolkit/toolkit-hp.html'
      },

      //  hpD1: {
      //   src: ['local-templates/desktop/d-header-hp.html','homepage/170706/css/hp-styles-original.css','homepage/170706/dev/content-original.html','local-templates/desktop/d-footer-hp.html'],
      //   dest: 'homepage/170706/build/local-hp-d-original.html'
      // },

      // hpM1: {
      //   src: ['local-templates/mobile/m-header.html','homepage/170706/css/hp-styles-original.css','homepage/170706/dev/content-original.html','local-templates/mobile/m-footer.html'],
      //   dest: 'homepage/170706/build/local-hp-m-original.html'
      // },

      // hpToolkit1: {
      //   src: ['homepage/170706/css/hp-styles-original.css','homepage/170706/dev/content-original.html'],
      //   dest: 'homepage/170706/toolkit/170706-toolkit-hp-d-original.html'
      // },

      // CATEGORY PAGES
      //girl -----------------------------------------------------------------------------
      girlsClothingD: {
        src: ['local-templates/desktop/d-header-2column.html','category-pages/170706/css/girls-clothing.css','category-pages/170706/dev/girls-clothing.html','local-templates/desktop/d-footer-2column.html'],
        dest: 'category-pages/170706/build/local-girls-clothing-d.html'
      },

      girlsClothingM: {
        src: ['local-templates/mobile/m-header.html','category-pages/170706/css/girls-clothing.css','category-pages/170706/dev/girls-clothing.html','local-templates/mobile/m-footer.html'],
        dest: 'category-pages/170706/build/local-girls-clothing-m.html'
      },

      girlsClothingToolkit: {
        src: ['category-pages/170706/css/girls-clothing.css','category-pages/170706/dev/girls-clothing.html'],
        dest: 'category-pages/170706/toolkit/girls-clothing-toolkit.html'
      },

      //boy -----------------------------------------------------------------------------
      boysClothingD: {
        src: ['local-templates/desktop/d-header-2column.html','category-pages/170706/css/boys-clothing.css','category-pages/170706/dev/boys-clothing.html','local-templates/desktop/d-footer-2column.html'],
        dest: 'category-pages/170706/build/local-boys-clothing-d.html'
      },

      boysClothingM: {
        src: ['local-templates/mobile/m-header.html','category-pages/170706/css/boys-clothing.css','category-pages/170706/dev/boys-clothing.html','local-templates/mobile/m-footer.html'],
        dest: 'category-pages/170706/build/local-boys-clothing-m.html'
      },

      boysClothingToolkit: {
        src: ['category-pages/170706/css/boys-clothing.css','category-pages/170706/dev/boys-clothing.html'],
        dest: 'category-pages/170706/toolkit/boys-clothing-toolkit.html'
      },

      //baby girl -----------------------------------------------------------------------------
      babyGirlClothesD: {
        src: ['local-templates/desktop/d-header-2column.html','category-pages/170706/css/baby-girl-clothes.css','category-pages/170706/dev/baby-girl-clothes.html','local-templates/desktop/d-footer-2column.html'],
        dest: 'category-pages/170706/build/local-baby-girl-clothes-d.html'
      },

      babyGirlClothesM: {
        src: ['local-templates/mobile/m-header.html','category-pages/170706/css/baby-girl-clothes.css','category-pages/170706/dev/baby-girl-clothes.html','local-templates/mobile/m-footer.html'],
        dest: 'category-pages/170706/build/local-baby-girl-clothes-m.html'
      },

      babyGirlClothesToolkit: {
        src: ['category-pages/170706/css/baby-girl-clothes.css','category-pages/170706/dev/baby-girl-clothes.html'],
        dest: 'category-pages/170706/toolkit/baby-girl-clothes-toolkit.html'
      },

      //baby boy -----------------------------------------------------------------------------
      babyBoyClothesD: {
        src: ['local-templates/desktop/d-header-2column.html','category-pages/170706/css/baby-boy-clothes.css','category-pages/170706/dev/baby-boy-clothes.html','local-templates/desktop/d-footer-2column.html'],
        dest: 'category-pages/170706/build/local-baby-boy-clothes-d.html'
      },

      babyBoyClothesM: {
        src: ['local-templates/mobile/m-header.html','category-pages/170706/css/baby-boy-clothes.css','category-pages/170706/dev/baby-boy-clothes.html','local-templates/mobile/m-footer.html'],
        dest: 'category-pages/170706/build/local-baby-boy-clothes-m.html'
      },

      babyBoyClothesToolkit: {
        src: ['category-pages/170706/css/baby-boy-clothes.css','category-pages/170706/dev/baby-boy-clothes.html'],
        dest: 'category-pages/170706/toolkit/baby-boy-clothes-toolkit.html'
      },

      //newborn -----------------------------------------------------------------------------
      newbornClothesD: {
        src: ['local-templates/desktop/d-header-2column.html','category-pages/170706/css/newborn-clothes.css','category-pages/170706/dev/newborn-clothes.html','local-templates/desktop/d-footer-2column.html'],
        dest: 'category-pages/170706/build/local-newborn-clothes-d.html'
      },

      newbornClothesM: {
        src: ['local-templates/mobile/m-header.html','category-pages/170706/css/newborn-clothes.css','category-pages/170706/dev/newborn-clothes.html','local-templates/mobile/m-footer.html'],
        dest: 'category-pages/170706/build/local-newborn-clothes-m.html'
      },

      newbornClothesToolkit: {
        src: ['category-pages/170706/css/newborn-clothes.css','category-pages/170706/dev/newborn-clothes.html'],
        dest: 'category-pages/170706/toolkit/newborn-clothes-toolkit.html'
      },

      //catalog -----------------------------------------------------------------------------
      catalogD: {
        src: ['local-templates/desktop/d-header-hp.html','catalog/170330/css/catalog.css','catalog/170330/dev/catalog.html','local-templates/desktop/d-footer-hp.html'],
        dest: 'catalog/170330/build/local-catalog-d.html'
      },

      catalogM: {
        src: ['local-templates/mobile/m-header.html','catalog/170330/css/catalog.css','catalog/170330/dev/catalog.html','local-templates/mobile/m-footer.html'],
        dest: 'catalog/170330/build/local-catalog-m.html'
      },

      catalogToolkit: {
        src: ['catalog/170330/css/catalog.css','catalog/170330/dev/catalog.html'],
        dest: 'catalog/170330/toolkit/catalog-toolkit.html'
      },

      //test promo -----------------------------------------------------------------------------
      promoTestM: {
        src: ['local-templates/mobile/m-header.html','promos/test/dev/test.html','local-templates/mobile/m-footer.html'],
        dest: 'promos/test/build/local-promo-test-m.html'
      },

      
      // global shop -----------------------------------------------------------------------------
      globalShopD: {
        src: ['local-templates/desktop/d-header.html','landing-page/global-shop/css/global-shop-styles.css','landing-page/global-shop/dev/content.html','local-templates/desktop/d-footer.html'],
        dest: 'landing-page/global-shop/build/local-global-shop-d.html'
      },

      globalShopM: {
        src: ['local-templates/mobile/m-header.html','landing-page/global-shop/css/global-shop-styles.css','landing-page/global-shop/dev/content.html','local-templates/mobile/m-footer.html'],
        dest: 'landing-page/global-shop/build/local-global-shop-m.html'
      },

      globalShopToolkit: {
        src: ['landing-page/global-shop/css/global-shop-styles.css','landing-page/global-shop/dev/content.html'],
        dest: 'landing-page/global-shop/toolkit/toolkit-global-shop.html'
      },

      // influencer -----------------------------------------------------------------------------
      influencerD: {
        src: ['local-templates/desktop/d-header-hp.html','landing-page/influencer/css/influencer-styles.css','landing-page/influencer/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        dest: 'landing-page/influencer/build/local-influencer-d.html'
      },

      influencerM: {
        src: ['local-templates/mobile/m-header.html','landing-page/influencer/css/influencer-styles.css','landing-page/influencer/dev/content.html','local-templates/mobile/m-footer.html'],
        dest: 'landing-page/influencer/build/local-influencer-m.html'
      },

      influencerToolkit: {
        src: ['landing-page/influencer/css/influencer-styles.css','landing-page/influencer/dev/content.html'],
        dest: 'landing-page/influencer/toolkit/toolkit-influencer.html'
      },

      // baby sweeps -----------------------------------------------------------------------------
      babysweepsD: {
        src: ['local-templates/desktop/d-header-hp.html','landing-page/babysweeps/css/styles.css','landing-page/babysweeps/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        dest: 'landing-page/babysweeps/build/local-babysweeps-d.html'
      },

      babysweepsM: {
        src: ['local-templates/mobile/m-header.html','landing-page/babysweeps/css/styles.css','landing-page/babysweeps/dev/content.html','local-templates/mobile/m-footer.html'],
        dest: 'landing-page/babysweeps/build/local-babysweeps-m.html'
      },

      babysweepsToolkit: {
        src: ['landing-page/babysweeps/css/styles.css','landing-page/babysweeps/dev/content.html'],
        dest: 'landing-page/babysweeps/toolkit/toolkit-babysweeps.html'
      },

      // jess cramp -----------------------------------------------------------------------------
      jessCrampD: {
        src: ['local-templates/desktop/d-header-hp.html','landing-page/jessCramp/css/styles.css','landing-page/jessCramp/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        dest: 'landing-page/jessCramp/build/local-jessCramp-d.html'
      },

      jessCrampM: {
        src: ['local-templates/mobile/m-header.html','landing-page/jessCramp/css/styles.css','landing-page/jessCramp/dev/content.html','local-templates/mobile/m-footer.html'],
        dest: 'landing-page/jessCramp/build/local-jessCramp-m.html'
      },

      jessCrampToolkit: {
        src: ['landing-page/jessCramp/css/styles.css','landing-page/jessCramp/dev/content.html'],
        dest: 'landing-page/jessCramp/toolkit/toolkit-jessCramp.html'
      },

       // about -----------------------------------------------------------------------------
      aboutD: {
        src: ['local-templates/desktop/d-header-hp.html','landing-page/about/css/styles.css','landing-page/about/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        dest: 'landing-page/about/build/local-about-d.html'
      },

      aboutM: {
        src: ['local-templates/mobile/m-header.html','landing-page/about/css/styles.css','landing-page/about/dev/content.html','local-templates/mobile/m-footer.html'],
        dest: 'landing-page/about/build/local-about-m.html'
      },

      aboutToolkit: {
        src: ['landing-page/about/css/styles.css','landing-page/about/dev/content.html'],
        dest: 'landing-page/about/toolkit/toolkit-about.html'
      },

       // careers -----------------------------------------------------------------------------
      careersD: {
        src: ['local-templates/desktop/d-header-2column.html','landing-page/careers/css/styles.css','landing-page/careers/dev/content.html','local-templates/desktop/d-footer-2column.html'],
        dest: 'landing-page/careers/build/local-careers-d.html'
      },

      careersM: {
        src: ['local-templates/mobile/m-header.html','landing-page/careers/css/styles.css','landing-page/careers/dev/content.html','local-templates/mobile/m-footer.html'],
        dest: 'landing-page/careers/build/local-careers-m.html'
      },

      careersToolkit: {
        src: ['landing-page/careers/css/styles.css','landing-page/careers/dev/content.html'],
        dest: 'landing-page/careers/toolkit/toolkit-careers.html'
      },

       // inspiration -----------------------------------------------------------------------------
      inspirationD: {
        src: ['local-templates/desktop/d-header-hp.html','landing-page/inspiration/scotland/css/styles.css','landing-page/inspiration/scotland/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        dest: 'landing-page/inspiration/scotland/build/local-inspiration-d.html'
      },

      inspirationM: {
        src: ['local-templates/mobile/m-header.html','landing-page/inspiration/scotland/css/styles.css','landing-page/inspiration/scotland/dev/content.html','local-templates/mobile/m-footer.html'],
        dest: 'landing-page/inspiration/scotland/build/local-inspiration-m.html'
      },

      inspirationToolkit: {
        src: ['landing-page/inspiration/scotland/css/styles.css','landing-page/inspiration/scotland/dev/content.html'],
        dest: 'landing-page/inspiration/scotland/toolkit/toolkit-inspiration.html'
      },

    },

    uglify:{

      myScripts:{
        files:{
          // 'build/js/myscripts.min.js':['build/js/myscripts.js']
        }
      },

    },

    execute: {
        target: {
            options: {
              args: ['arg1','arg2']
            },
            src: ['concat.js']
        }
    },

    connect:{
      tea: {
        options: {
          keepalive: true,
          port: 8080,
          livereload: true
        }  
      }
    },

    concurrent: {
      dev: {
        target1: ['watch'],
        target2: ['connect'],
      }
    }


  });
};