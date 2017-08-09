
module.exports = function(grunt){

	return {
	
      options: {
          sourceMap: true,
          compress: true,
      },

      // HOMEPAGE CSS ---------------------------------------------------------------------------
      hpCSS:{
        files:{
          'homepage/170727/css/hp-styles.css': 'homepage/170727/css/hp-styles.less'
        }
      },

      // hpCSS1:{
      //   files:{
      //     'homepage/170727/css/hp-styles-original.css': 'homepage/170727/css/hp-styles-original.less'
      //   }
      // },

      // CATEGORIES CSS ---------------------------------------------------------------------------
      categoriesCSS: {
        files: {
          //girls
          'category-pages/170727/css/girls-clothing.css': 'category-pages/170727/css/girls-clothing.less',
          //boys
          'category-pages/170727/css/boys-clothing.css': 'category-pages/170727/css/boys-clothing.less',
          //baby girl
          'category-pages/170727/css/baby-girl-clothes.css': 'category-pages/170727/css/baby-girl-clothes.less',
          //baby boy
          'category-pages/170727/css/baby-boy-clothes.css': 'category-pages/170727/css/baby-boy-clothes.less',
          //newborn
          'category-pages/170727/css/newborn-clothes.css': 'category-pages/170727/css/newborn-clothes.less'
        }
      },

      girlsClothingCSS:{
        files:{
          'category-pages/170727/css/girls-clothing.css': 'category-pages/170727/css/girls-clothing.less'
        }
      },

      boysClothingCSS:{
        files:{
          'category-pages/170727/css/boys-clothing.css': 'category-pages/170727/css/boys-clothing.less'
        }
      },

      babyGirlClothesCSS:{
        files:{
          'category-pages/170727/css/baby-girl-clothes.css': 'category-pages/170727/css/baby-girl-clothes.less'
        }
      },

      babyBoyClothesCSS:{
        files:{
          'category-pages/170727/css/baby-boy-clothes.css': 'category-pages/170727/css/baby-boy-clothes.less'
        }
      },

      newbornClothesCSS:{
        files:{
          'category-pages/170727/css/newborn-clothes.css': 'category-pages/170727/css/newborn-clothes.less'
        }
      },

      // CATALOG CSS ---------------------------------------------------------------------------
      catalogCSS:{
        files:{
          'catalog/170330/css/catalog.css': 'catalog/170330/css/catalog.less'
        }
      },

      // GLOBAL SHOP CSS ---------------------------------------------------------------------------
  		globalShopCSS:{
  			files:{
  				'landing-page/global-shop/css/global-shop-styles.css': 'landing-page/global-shop/css/global-shop-styles.less'
  			}
  		},

      // INFLUENCER CSS ---------------------------------------------------------------------------
      influencerCSS:{
        files:{
          'landing-page/influencer/css/influencer-styles.css': 'landing-page/influencer/css/influencer-styles.less'
        }
      },

      // BABYSWEEPS CSS ---------------------------------------------------------------------------
      babysweepsCSS:{
        files:{
          'landing-page/baby-sweeps/css/styles.css': 'landing-page/baby-sweeps/css/styles.less'
        }
      },

      // LITTLE CITIZENS CSS ---------------------------------------------------------------------------
      littleCitizenCSS:{
        files:{
          'landing-page/little-citizen/170723/css/styles.css': 'landing-page/little-citizen/170723/css/styles.less'
        }
      },

      // ABOUT CSS ---------------------------------------------------------------------------
      aboutCSS:{
        files:{
          'landing-page/about/css/styles.css': 'landing-page/about/css/styles.less'
        }
      },

      // CAREERS CSS ---------------------------------------------------------------------------
      careersCSS:{
        files:{
          'landing-page/careers/css/styles.css': 'landing-page/careers/css/styles.less'
        }
      },

      // INSPIRATION CSS ---------------------------------------------------------------------------
      inspirationCSS:{
        files:{
          'landing-page/inspiration/scotland/css/styles.css': 'landing-page/inspiration/scotland/css/styles.less'
        }
      },

      // ACTIVE CSS ---------------------------------------------------------------------------
      activeCSS:{
        files:{
          'landing-page/active/170727/css/styles.css': 'landing-page/active/170727/css/styles.less'
        }
      },

      // BACK TO SCHOOL SWEEPS CSS ---------------------------------------------------------------------------
      backToSchoolCSS:{
        files:{
          'landing-page/back-to-school-sweeps/css/styles.css': 'landing-page/back-to-school-sweeps/css/styles.less'
        }
      },

      // NAV REDESIGN CSS ---------------------------------------------------------------------------
      navRedesignCSS: {
        files: {
          'nav-redesign/css/styles1.css': 'nav-redesign/css/styles1.less',
          'nav-redesign/css/styles2.css': 'nav-redesign/css/styles2.less',
          'nav-redesign/css/styles3.css': 'nav-redesign/css/styles3.less',
          'nav-redesign/css/styles4.css': 'nav-redesign/css/styles4.less',
          'nav-redesign/css/styles5.css': 'nav-redesign/css/styles5.less',
          'nav-redesign/css/styles6.css': 'nav-redesign/css/styles6.less',
          'nav-redesign/css/styles7.css': 'nav-redesign/css/styles7.less',
          'nav-redesign/css/styles8.css': 'nav-redesign/css/styles8.less'
        }
      },

      // HEADER REDESIGN CSS ---------------------------------------------------------------------------
      headerRedesignCSS:{
        files:{
          'header-redesign/styles.css': 'header-redesign/styles.less'
        }
      },
    
  }
};