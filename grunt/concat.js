module.exports = function(grunt){
	return {
		options: {
        sourceMap:true,
      },

      // HOMEPAGE ---------------------------------------------------------------------------
      hp: {
        files: {
          //desktop
          'homepage/170727/build/local-hp-d.html': ['local-templates/desktop/d-header-hp.html','homepage/170727/css/hp-styles.css','homepage/170727/dev/content.html','local-templates/desktop/d-footer-hp.html'],
          //mobile
          'homepage/170727/build/local-hp-m.html': ['local-templates/mobile/m-header.html','homepage/170727/css/hp-styles.css','homepage/170727/dev/content.html','local-templates/mobile/m-footer.html'],
          //toolkit
          'homepage/170727/toolkit/toolkit-hp.html': ['homepage/170727/css/hp-styles.css','homepage/170727/dev/content.html'],
        }
      },

      hpD: {
        src: ['local-templates/desktop/d-header-hp.html','homepage/170727/css/hp-styles.css','homepage/170727/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        dest: 'homepage/170727/build/local-hp-d.html'
      },

      hpM: {
        src: ['local-templates/mobile/m-header.html','homepage/170727/css/hp-styles.css','homepage/170727/dev/content.html','local-templates/mobile/m-footer.html'],
        dest: 'homepage/170727/build/local-hp-m.html'
      },

      hpToolkit: {
        src: ['homepage/170727/css/hp-styles.css','homepage/170727/dev/content.html'],
        dest: 'homepage/170727/toolkit/toolkit-hp.html'
      },

      // CATEGORY PAGES
      categories: {
        files: {
          //girl -----------------------------------------------------------------------------
          //girl desktop
          'category-pages/170727/build/local-girls-clothing-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/170727/css/girls-clothing.css','category-pages/170727/dev/girls-clothing.html','local-templates/desktop/d-footer-2column.html'],
          //girl mobile
          'category-pages/170727/build/local-girls-clothing-m.html': ['local-templates/mobile/m-header.html','category-pages/170727/css/girls-clothing.css','category-pages/170727/dev/girls-clothing.html','local-templates/mobile/m-footer.html'],
          //girl toolkit
          'category-pages/170727/toolkit/girls-clothing-toolkit.html': ['category-pages/170727/css/girls-clothing.css','category-pages/170727/dev/girls-clothing.html'],

          //boy -----------------------------------------------------------------------------
          //boy desktop
          'category-pages/170727/build/local-boys-clothing-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/170727/css/boys-clothing.css','category-pages/170727/dev/boys-clothing.html','local-templates/desktop/d-footer-2column.html'],
          //boy mobile
          'category-pages/170727/build/local-boys-clothing-m.html': ['local-templates/mobile/m-header.html','category-pages/170727/css/boys-clothing.css','category-pages/170727/dev/boys-clothing.html','local-templates/mobile/m-footer.html'],
          //boy toolkit
          'category-pages/170727/toolkit/boys-clothing-toolkit.html': ['category-pages/170727/css/boys-clothing.css','category-pages/170727/dev/boys-clothing.html'],

          //baby girl -----------------------------------------------------------------------------
          //baby girl desktop
          'category-pages/170727/build/local-baby-girl-clothes-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/170727/css/baby-girl-clothes.css','category-pages/170727/dev/baby-girl-clothes.html','local-templates/desktop/d-footer-2column.html'],
          //baby girl mobile
          'category-pages/170727/build/local-baby-girl-clothes-m.html': ['local-templates/mobile/m-header.html','category-pages/170727/css/baby-girl-clothes.css','category-pages/170727/dev/baby-girl-clothes.html','local-templates/mobile/m-footer.html'],
          //baby girl toolkit
          'category-pages/170727/toolkit/baby-girl-clothes-toolkit.html': ['category-pages/170727/css/baby-girl-clothes.css','category-pages/170727/dev/baby-girl-clothes.html'],

          //baby boy -----------------------------------------------------------------------------
          //baby boy desktop
          'category-pages/170727/build/local-baby-boy-clothes-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/170727/css/baby-boy-clothes.css','category-pages/170727/dev/baby-boy-clothes.html','local-templates/desktop/d-footer-2column.html'],
          //baby boy mobile
          'category-pages/170727/build/local-baby-boy-clothes-m.html': ['local-templates/mobile/m-header.html','category-pages/170727/css/baby-boy-clothes.css','category-pages/170727/dev/baby-boy-clothes.html','local-templates/mobile/m-footer.html'],
          //baby boy toolkit
          'category-pages/170727/toolkit/baby-boy-clothes-toolkit.html': ['category-pages/170727/css/baby-boy-clothes.css','category-pages/170727/dev/baby-boy-clothes.html'],

          //newborn -----------------------------------------------------------------------------
          //newborn desktop
          'category-pages/170727/build/local-newborn-clothes-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/170727/css/newborn-clothes.css','category-pages/170727/dev/newborn-clothes.html','local-templates/desktop/d-footer-2column.html'],
          //newborn mobile
          'category-pages/170727/build/local-newborn-clothes-m.html': ['local-templates/mobile/m-header.html','category-pages/170727/css/newborn-clothes.css','category-pages/170727/dev/newborn-clothes.html','local-templates/mobile/m-footer.html'],
          //newborn toolkit
          'category-pages/170727/toolkit/newborn-clothes-toolkit.html': ['category-pages/170727/css/newborn-clothes.css','category-pages/170727/dev/newborn-clothes.html'],
        }
      },

      //girl -----------------------------------------------------------------------------
      girlsClothingD: {
        src: ['local-templates/desktop/d-header-2column.html','category-pages/170727/css/girls-clothing.css','category-pages/170727/dev/girls-clothing.html','local-templates/desktop/d-footer-2column.html'],
        dest: 'category-pages/170727/build/local-girls-clothing-d.html'
      },

      girlsClothingM: {
        src: ['local-templates/mobile/m-header.html','category-pages/170727/css/girls-clothing.css','category-pages/170727/dev/girls-clothing.html','local-templates/mobile/m-footer.html'],
        dest: 'category-pages/170727/build/local-girls-clothing-m.html'
      },

      girlsClothingToolkit: {
        src: ['category-pages/170727/css/girls-clothing.css','category-pages/170727/dev/girls-clothing.html'],
        dest: 'category-pages/170727/toolkit/girls-clothing-toolkit.html'
      },

      //boy -----------------------------------------------------------------------------
      boysClothingD: {
        src: ['local-templates/desktop/d-header-2column.html','category-pages/170727/css/boys-clothing.css','category-pages/170727/dev/boys-clothing.html','local-templates/desktop/d-footer-2column.html'],
        dest: 'category-pages/170727/build/local-boys-clothing-d.html'
      },

      boysClothingM: {
        src: ['local-templates/mobile/m-header.html','category-pages/170727/css/boys-clothing.css','category-pages/170727/dev/boys-clothing.html','local-templates/mobile/m-footer.html'],
        dest: 'category-pages/170727/build/local-boys-clothing-m.html'
      },

      boysClothingToolkit: {
        src: ['category-pages/170727/css/boys-clothing.css','category-pages/170727/dev/boys-clothing.html'],
        dest: 'category-pages/170727/toolkit/boys-clothing-toolkit.html'
      },

      //baby girl -----------------------------------------------------------------------------
      babyGirlClothesD: {
        src: ['local-templates/desktop/d-header-2column.html','category-pages/170727/css/baby-girl-clothes.css','category-pages/170727/dev/baby-girl-clothes.html','local-templates/desktop/d-footer-2column.html'],
        dest: 'category-pages/170727/build/local-baby-girl-clothes-d.html'
      },

      babyGirlClothesM: {
        src: ['local-templates/mobile/m-header.html','category-pages/170727/css/baby-girl-clothes.css','category-pages/170727/dev/baby-girl-clothes.html','local-templates/mobile/m-footer.html'],
        dest: 'category-pages/170727/build/local-baby-girl-clothes-m.html'
      },

      babyGirlClothesToolkit: {
        src: ['category-pages/170727/css/baby-girl-clothes.css','category-pages/170727/dev/baby-girl-clothes.html'],
        dest: 'category-pages/170727/toolkit/baby-girl-clothes-toolkit.html'
      },

      //baby boy -----------------------------------------------------------------------------
      babyBoyClothesD: {
        src: ['local-templates/desktop/d-header-2column.html','category-pages/170727/css/baby-boy-clothes.css','category-pages/170727/dev/baby-boy-clothes.html','local-templates/desktop/d-footer-2column.html'],
        dest: 'category-pages/170727/build/local-baby-boy-clothes-d.html'
      },

      babyBoyClothesM: {
        src: ['local-templates/mobile/m-header.html','category-pages/170727/css/baby-boy-clothes.css','category-pages/170727/dev/baby-boy-clothes.html','local-templates/mobile/m-footer.html'],
        dest: 'category-pages/170727/build/local-baby-boy-clothes-m.html'
      },

      babyBoyClothesToolkit: {
        src: ['category-pages/170727/css/baby-boy-clothes.css','category-pages/170727/dev/baby-boy-clothes.html'],
        dest: 'category-pages/170727/toolkit/baby-boy-clothes-toolkit.html'
      },

      //newborn -----------------------------------------------------------------------------
      newbornClothesD: {
        src: ['local-templates/desktop/d-header-2column.html','category-pages/170727/css/newborn-clothes.css','category-pages/170727/dev/newborn-clothes.html','local-templates/desktop/d-footer-2column.html'],
        dest: 'category-pages/170727/build/local-newborn-clothes-d.html'
      },

      newbornClothesM: {
        src: ['local-templates/mobile/m-header.html','category-pages/170727/css/newborn-clothes.css','category-pages/170727/dev/newborn-clothes.html','local-templates/mobile/m-footer.html'],
        dest: 'category-pages/170727/build/local-newborn-clothes-m.html'
      },

      newbornClothesToolkit: {
        src: ['category-pages/170727/css/newborn-clothes.css','category-pages/170727/dev/newborn-clothes.html'],
        dest: 'category-pages/170727/toolkit/newborn-clothes-toolkit.html'
      },

      //catalog -----------------------------------------------------------------------------
      catalog: {
        files: {
          //desktop
          'catalog/170330/build/local-catalog-d.html': ['local-templates/desktop/d-header-hp.html','catalog/170330/css/catalog.css','catalog/170330/dev/catalog.html','local-templates/desktop/d-footer-hp.html'],
          //mobile
          'catalog/170330/build/local-catalog-m.html': ['local-templates/mobile/m-header.html','catalog/170330/css/catalog.css','catalog/170330/dev/catalog.html','local-templates/mobile/m-footer.html'],
          //toolkit
          'catalog/170330/toolkit/catalog-toolkit.html': ['catalog/170330/css/catalog.css','catalog/170330/dev/catalog.html'],
        }
      },

      //test promo -----------------------------------------------------------------------------
      promoTestM: {
        src: ['local-templates/mobile/m-header.html','promos/test/dev/test.html','local-templates/mobile/m-footer.html'],
        dest: 'promos/test/build/local-promo-test-m.html'
      },

      
      // global shop -----------------------------------------------------------------------------
      globalShop: {
        files: {
          //desktop
          'landing-page/global-shop/build/local-global-shop-d.html':['local-templates/desktop/d-header.html','landing-page/global-shop/css/global-shop-styles.css','landing-page/global-shop/dev/content.html','local-templates/desktop/d-footer.html'],
          //mobile
          'landing-page/global-shop/build/local-global-shop-m.html': ['local-templates/mobile/m-header.html','landing-page/global-shop/css/global-shop-styles.css','landing-page/global-shop/dev/content.html','local-templates/mobile/m-footer.html'],
          //toolkit
          'landing-page/global-shop/toolkit/toolkit-global-shop.html': ['landing-page/global-shop/css/global-shop-styles.css','landing-page/global-shop/dev/content.html'],
        }
      },

      // influencer -----------------------------------------------------------------------------
      influencer: {
        files: {
        //desktop
        'landing-page/influencer/build/local-influencer-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/influencer/css/influencer-styles.css','landing-page/influencer/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        //mobile
        'landing-page/influencer/build/local-influencer-m.html': ['local-templates/mobile/m-header.html','landing-page/influencer/css/influencer-styles.css','landing-page/influencer/dev/content.html','local-templates/mobile/m-footer.html'],
        //toolkit
        'landing-page/influencer/toolkit/toolkit-influencer.html': ['landing-page/influencer/css/influencer-styles.css','landing-page/influencer/dev/content.html'],
        } 
      },

      // baby sweeps -----------------------------------------------------------------------------
      babysweeps: {
        files: {
        //desktop
        'landing-page/baby-sweeps/build/local-babysweeps-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/baby-sweeps/css/styles.css','landing-page/baby-sweeps/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        //mobile
        'landing-page/baby-sweeps/build/local-babysweeps-m.html': ['local-templates/mobile/m-header.html','landing-page/baby-sweeps/css/styles.css','landing-page/baby-sweeps/dev/content.html','local-templates/mobile/m-footer.html'],
        //toolkit
        'landing-page/baby-sweeps/toolkit/toolkit-babysweeps.html': ['landing-page/baby-sweeps/css/styles.css','landing-page/baby-sweeps/dev/content.html'],
        }
      },

      // little citizen -----------------------------------------------------------------------------
      littleCitizen: {
        files: {
        //desktop
        'landing-page/little-citizen/170723/build/local-little-citizen-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/little-citizen/170723/css/styles.css','landing-page/little-citizen/170723/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        //mobile
        'landing-page/little-citizen/170723/build/local-little-citizen-m.html': ['local-templates/mobile/m-header.html','landing-page/little-citizen/170723/css/styles.css','landing-page/little-citizen/170723/dev/content.html','local-templates/mobile/m-footer.html'],
        //toolkit
        'landing-page/little-citizen/170723/toolkit/toolkit-little-citizen.html': ['landing-page/little-citizen/170723/css/styles.css','landing-page/little-citizen/170723/dev/content.html'],
        }
      },

       // about -----------------------------------------------------------------------------
      about: {
        files: {
        //desktop
        'landing-page/about/build/local-about-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/about/css/styles.css','landing-page/about/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        //mobile
        'landing-page/about/build/local-about-m.html': ['local-templates/mobile/m-header.html','landing-page/about/css/styles.css','landing-page/about/dev/content.html','local-templates/mobile/m-footer.html'],
        //toolkit
        'landing-page/about/toolkit/toolkit-about.html': ['landing-page/about/css/styles.css','landing-page/about/dev/content.html'],
        }
      },

       // careers -----------------------------------------------------------------------------
      careers: {
        files: {
        //desktop
        'landing-page/careers/build/local-careers-d.html': ['local-templates/desktop/d-header-2column.html','landing-page/careers/css/styles.css','landing-page/careers/dev/content.html','local-templates/desktop/d-footer-2column.html'],
        //mobile
        'landing-page/careers/build/local-careers-m.html': ['local-templates/mobile/m-header.html','landing-page/careers/css/styles.css','landing-page/careers/dev/content.html','local-templates/mobile/m-footer.html'],
        //toolkit
        'landing-page/careers/toolkit/toolkit-careers.html': ['landing-page/careers/css/styles.css','landing-page/careers/dev/content.html'],
        } 
      },

       // inspiration -----------------------------------------------------------------------------
      inspiration: {
        files: {
        //desktop
        'landing-page/inspiration/scotland/build/local-inspiration-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/inspiration/scotland/css/styles.css','landing-page/inspiration/scotland/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        //mobile
        'landing-page/inspiration/scotland/build/local-inspiration-m.html': ['local-templates/mobile/m-header.html','landing-page/inspiration/scotland/css/styles.css','landing-page/inspiration/scotland/dev/content.html','local-templates/mobile/m-footer.html'],
        //toolkit
        'landing-page/inspiration/scotland/toolkit/toolkit-inspiration.html': ['landing-page/inspiration/scotland/css/styles.css','landing-page/inspiration/scotland/dev/content.html'],
        }
      },

       // active -----------------------------------------------------------------------------
      active: {
        files: {
          //desktop
          'landing-page/active/170727/build/local-active-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/active/170727/css/styles.css','landing-page/active/170727/dev/content.html','local-templates/desktop/d-footer-hp.html'],
          //mobile
          'landing-page/active/170727/build/local-active-m.html': ['local-templates/mobile/m-header.html','landing-page/active/170727/css/styles.css','landing-page/active/170727/dev/content.html','local-templates/mobile/m-footer.html'],
          //toolkit
          'landing-page/active/170727/toolkit/toolkit.html': ['landing-page/active/170727/css/styles.css','landing-page/active/170727/dev/content.html'],
        }
      },

      // back to school sweeps -----------------------------------------------------------------------------
      backToSchool: {
        files: {
        //desktop
        'landing-page/back-to-school-sweeps/build/local-back-to-school-sweeps-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/back-to-school-sweeps/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        //mobile
        'landing-page/back-to-school-sweeps/build/local-back-to-school-sweeps-m.html': ['local-templates/mobile/m-header.html','landing-page/back-to-school-sweeps/dev/content.html','local-templates/mobile/m-footer.html'],
        //toolkit
        'landing-page/back-to-school-sweeps/toolkit/toolkit-back-to-school-sweeps.html': ['landing-page/back-to-school-sweeps/css/styles.css','landing-page/back-to-school-sweeps/dev/content.html'],
        }
      },

      // nav-redesign -----------------------------------------------------------------------------
      navRedesignHTML: {
        files: {
          //version 1
          'nav-redesign/build/local-nav-redesign-1.html': ['nav-redesign/html/header2.html','nav-redesign/html/nav1.html','nav-redesign/html/footer.html'],
          //version 2
          'nav-redesign/build/local-nav-redesign-2.html': ['nav-redesign/html/header2.html','nav-redesign/html/nav2.html','nav-redesign/html/footer.html'],
          //version 3
          'nav-redesign/build/local-nav-redesign-3.html': ['nav-redesign/html/header2.html','nav-redesign/html/nav3.html','nav-redesign/html/footer.html'],
          //version 4
          'nav-redesign/build/local-nav-redesign-4.html': ['nav-redesign/html/header2.html','nav-redesign/html/nav4.html','nav-redesign/html/footer.html'],
          //version 5
          'nav-redesign/build/local-nav-redesign-5.html': ['nav-redesign/html/header2.html','nav-redesign/html/nav5.html','nav-redesign/html/footer.html'],
          //version 6
          'nav-redesign/build/local-nav-redesign-6.html': ['nav-redesign/html/header2.html','nav-redesign/html/nav6.html','nav-redesign/html/footer.html'],
          //version 7
          'nav-redesign/build/local-nav-redesign-7.html': ['nav-redesign/html/header2.html','nav-redesign/html/nav7.html','nav-redesign/html/footer.html'],
          //version 8
          'nav-redesign/build/local-nav-redesign-8.html': ['nav-redesign/html/header2.html','nav-redesign/html/nav8.html','nav-redesign/html/footer.html'],
        }
      },


      // header-redesign -----------------------------------------------------------------------------
      headerRedesignHTML: {
        src: ['header-redesign/header.html','local-templates/desktop/d-footer-hp.html'],
        dest: 'header-redesign/build/local-header-redesign.html'
      },
  }
};