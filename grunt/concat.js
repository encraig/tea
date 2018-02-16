module.exports = function(grunt){
	return {
		options: {
        //sourceMap:true,
      },

      // CONTENT CELL ---------------------------------------------------------------------------
      cell: {
        files: {
          //desktop
          'content-cell-take-over/<%= cell.date %>/<%= cell.name %>/build/local-d.html': ['local-templates/desktop/d-header-2column.html','content-cell-take-over/<%= cell.date %>/<%= cell.name %>/dev/content.html','local-templates/desktop/d-footer-2column.html'],
          //mobile
          'content-cell-take-over/<%= cell.date %>/<%= cell.name %>/build/local-m.html': ['local-templates/mobile/m-header.html','content-cell-take-over/<%= cell.date %>/<%= cell.name %>/dev/content.html','local-templates/mobile/m-footer.html'],
        }
      },

      // HOMEPAGE ---------------------------------------------------------------------------
      hp: {
        files: {
          //desktop
          'homepage/<%= hp.date %>/build/hp-d.html': ['local-templates/desktop/header-get.html','local-templates/build/full-page.html','local-templates/desktop/footer-get.html'],
          //mobile
          'homepage/<%= hp.date %>/build/hp-m.html': ['local-templates/mobile/header-get.html','local-templates/build/full-page.html','local-templates/mobile/footer-get.html'],
        }
      },

      // CATEGORY PAGES
      categories: {
          files:[
            //desktop
            {
              dest:'category-pages/<%= cat.date %>/build/headers-d.html',
              src: ['local-templates/desktop/header-get.html','local-templates/build/two-column-page.html','local-templates/desktop/footer-get.html'],
            },
            //mobile
            {
              dest:'category-pages/<%= cat.date %>/build/headers-m.html',
              src: ['local-templates/mobile/header-get.html','local-templates/build/two-column-page.html','local-templates/mobile/footer-get.html'],
            }      
          ]
          
        // files: {
        //   //girl -----------------------------------------------------------------------------
        //   //girl desktop
        //   'category-pages/<%= cat.date %>/build/local-girls-clothing-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/<%= cat.date %>/dev/girls-clothing.html','local-templates/desktop/d-footer-2column.html'],
        //   //girl mobile
        //   'category-pages/<%= cat.date %>/build/local-girls-clothing-m.html': ['local-templates/mobile/m-header.html','category-pages/<%= cat.date %>/dev/girls-clothing.html','local-templates/mobile/m-footer.html'],

        //   //boy -----------------------------------------------------------------------------
        //   //boy desktop
        //   'category-pages/<%= cat.date %>/build/local-boys-clothing-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/<%= cat.date %>/dev/boys-clothing.html','local-templates/desktop/d-footer-2column.html'],
        //   //boy mobile
        //   'category-pages/<%= cat.date %>/build/local-boys-clothing-m.html': ['local-templates/mobile/m-header.html','category-pages/<%= cat.date %>/dev/boys-clothing.html','local-templates/mobile/m-footer.html'],

        //   //baby girl -----------------------------------------------------------------------------
        //   //baby girl desktop
        //   'category-pages/<%= cat.date %>/build/local-baby-girl-clothes-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/<%= cat.date %>/dev/baby-girl-clothes.html','local-templates/desktop/d-footer-2column.html'],
        //   //baby girl mobile
        //   'category-pages/<%= cat.date %>/build/local-baby-girl-clothes-m.html': ['local-templates/mobile/m-header.html','category-pages/<%= cat.date %>/dev/baby-girl-clothes.html','local-templates/mobile/m-footer.html'],

        //   //baby boy -----------------------------------------------------------------------------
        //   //baby boy desktop
        //   'category-pages/<%= cat.date %>/build/local-baby-boy-clothes-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/<%= cat.date %>/dev/baby-boy-clothes.html','local-templates/desktop/d-footer-2column.html'],
        //   //baby boy mobile
        //   'category-pages/<%= cat.date %>/build/local-baby-boy-clothes-m.html': ['local-templates/mobile/m-header.html','category-pages/<%= cat.date %>/dev/baby-boy-clothes.html','local-templates/mobile/m-footer.html'],

        //   //newborn -----------------------------------------------------------------------------
        //   //newborn desktop
        //   'category-pages/<%= cat.date %>/build/local-newborn-clothes-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/<%= cat.date %>/dev/newborn-clothes.html','local-templates/desktop/d-footer-2column.html'],
        //   //newborn mobile
        //   'category-pages/<%= cat.date %>/build/local-newborn-clothes-m.html': ['local-templates/mobile/m-header.html','category-pages/<%= cat.date %>/dev/newborn-clothes.html','local-templates/mobile/m-footer.html'],

        //   //girls swim -----------------------------------------------------------------------------
        //   //girls swim desktop
        //   'category-pages/<%= cat.date %>/build/local-girls-swimwear-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/<%= cat.date %>/dev/girls-swimwear.html','local-templates/desktop/d-footer-2column.html'],
        //   //girls swim mobile
        //   'category-pages/<%= cat.date %>/build/local-girls-swimwear-m.html': ['local-templates/mobile/m-header.html','category-pages/<%= cat.date %>/dev/girls-swimwear.html','local-templates/mobile/m-footer.html'],

        //   //boys swim -----------------------------------------------------------------------------
        //   //boys swim desktop
        //   'category-pages/<%= cat.date %>/build/local-boys-swimwear-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/<%= cat.date %>/dev/boys-swimwear.html','local-templates/desktop/d-footer-2column.html'],
        //   //boys swim mobile
        //   'category-pages/<%= cat.date %>/build/local-boys-swimwear-m.html': ['local-templates/mobile/m-header.html','category-pages/<%= cat.date %>/dev/boys-swimwear.html','local-templates/mobile/m-footer.html'],

        //   //trending tea  -----------------------------------------------------------------------------
        //   //trending desktop
        //   'category-pages/<%= cat.date %>/build/local-trending-tea-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/<%= cat.date %>/dev/trending-tea.html','local-templates/desktop/d-footer-2column.html'],
        //   //trending mobile
        //   'category-pages/<%= cat.date %>/build/local-trending-tea-m.html': ['local-templates/mobile/m-header.html','category-pages/<%= cat.date %>/dev/trending-tea.html','local-templates/mobile/m-footer.html'],

        //   //black friday -----------------------------------------------------------------------------
        //   //black friday desktop
        //   'category-pages/<%= cat.date %>/build/local-black-friday-d.html': ['local-templates/desktop/d-header-2column.html','category-pages/<%= cat.date %>/dev/content.html','local-templates/desktop/d-footer-2column.html'],
        //   //black friday mobile
        //   'category-pages/<%= cat.date %>/build/local-black-friday-m.html': ['local-templates/mobile/m-header.html','category-pages/<%= cat.date %>/dev/content.html','local-templates/mobile/m-footer.html'],
        // }

      },

      //catalog -----------------------------------------------------------------------------
      catalog: {
        files: {
          //desktop
          'catalog/<%= date %>/build/local-catalog-d.html': ['local-templates/desktop/d-header-hp.html','catalog/<%= date %>/css/catalog.css','catalog/<%= date %>/dev/catalog.html','local-templates/desktop/d-footer-hp.html'],
          //mobile
          'catalog/<%= date %>/build/local-catalog-m.html': ['local-templates/mobile/m-header.html','catalog/<%= date %>/css/catalog.css','catalog/<%= date %>/dev/catalog.html','local-templates/mobile/m-footer.html'],
          //toolkit
          'catalog/<%= date %>/toolkit/catalog-toolkit.html': ['catalog/<%= date %>/css/catalog.css','catalog/<%= date %>/dev/catalog.html'],
        }
      },

      // landing page -----------------------------------------------------------------------------
      landingPages: {
        files: {
        //desktop
        'landing-page/<%= landing.name %>/<%= landing.date %>/build/<%= landing.name %>-d.html': ['local-templates/desktop/header-get.html','local-templates/build/two-column-page.html','local-templates/desktop/footer-get.html'],
        //mobile
        'landing-page/<%= landing.name %>/<%= landing.date %>/build/<%= landing.name %>-m.html': ['local-templates/mobile/header-get.html','local-templates/build/two-column-page.html','local-templates/mobile/footer-get.html'],
        } 
      },

      
      // global shop -----------------------------------------------------------------------------
      // globalShop: {
      //   files: {
      //     //desktop
      //     'landing-page/global-shop/build/local-global-shop-d.html':['local-templates/desktop/d-header.html','landing-page/global-shop/dev/content.html','local-templates/desktop/d-footer.html'],
      //     //mobile
      //     'landing-page/global-shop/build/local-global-shop-m.html': ['local-templates/mobile/m-header.html','landing-page/global-shop/dev/content.html','local-templates/mobile/m-footer.html'],
      //   }
      // },

      // influencer -----------------------------------------------------------------------------
      // influencer: {
      //   files: {
      //   //desktop
      //   'landing-page/influencer/<%= date %>/build/local-influencer-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/influencer/<%= date %>/dev/content.html','local-templates/desktop/d-footer-hp.html'],
      //   //mobile
      //   'landing-page/influencer/<%= date %>/build/local-influencer-m.html': ['local-templates/mobile/m-header.html','landing-page/influencer/<%= date %>/dev/content.html','local-templates/mobile/m-footer.html'],
      //   } 
      // },

      // baby sweeps -----------------------------------------------------------------------------
      // babysweeps: {
      //   files: {
      //   //desktop
      //   'landing-page/baby-sweeps/build/local-babysweeps-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/baby-sweeps/dev/content.html','local-templates/desktop/d-footer-hp.html'],
      //   //mobile
      //   'landing-page/baby-sweeps/build/local-babysweeps-m.html': ['local-templates/mobile/m-header.html','landing-page/baby-sweeps/dev/content.html','local-templates/mobile/m-footer.html'],
      //   }
      // },

      // little citizen -----------------------------------------------------------------------------
      // littleCitizen: {
      //   files: {
      //   //desktop
      //   'landing-page/little-citizen/<%= date %>/build/local-little-citizen-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/little-citizen/<%= date %>/dev/content.html','local-templates/desktop/d-footer-hp.html'],
      //   //mobile
      //   'landing-page/little-citizen/<%= date %>/build/local-little-citizen-m.html': ['local-templates/mobile/m-header.html','landing-page/little-citizen/<%= date %>/dev/content.html','local-templates/mobile/m-footer.html'],
      //   }
      // },

       // about -----------------------------------------------------------------------------
      // about: {
      //   files: {
      //   //desktop
      //   'landing-page/about/build/local-about-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/about/dev/content.html','local-templates/desktop/d-footer-hp.html'],
      //   //mobile
      //   'landing-page/about/build/local-about-m.html': ['local-templates/mobile/m-header.html','landing-page/about/dev/content.html','local-templates/mobile/m-footer.html'],
      //   }
      // },

       // careers -----------------------------------------------------------------------------
      // careers: {
      //   files: {
      //   //desktop
      //   'landing-page/careers/build/local-careers-d.html': ['local-templates/desktop/d-header-2column.html','landing-page/careers/dev/content.html','local-templates/desktop/d-footer-2column.html'],
      //   //mobile
      //   'landing-page/careers/build/local-careers-m.html': ['local-templates/mobile/m-header.html','landing-page/careers/dev/content.html','local-templates/mobile/m-footer.html'],
      //   } 
      // },

       // inspiration -----------------------------------------------------------------------------
      // inspiration: {
      //   files: {
      //   //desktop
      //   'landing-page/inspiration/scotland/build/local-inspiration-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/inspiration/scotland/dev/content.html','local-templates/desktop/d-footer-hp.html'],
      //   //mobile
      //   'landing-page/inspiration/scotland/build/local-inspiration-m.html': ['local-templates/mobile/m-header.html','landing-page/inspiration/scotland/dev/content.html','local-templates/mobile/m-footer.html'],
      //   }
      // },

       // active -----------------------------------------------------------------------------
      // active: {
      //   files: {
      //     //desktop
      //     'landing-page/active/<%= date %>/build/local-active-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/active/<%= date %>/dev/content.html','local-templates/desktop/d-footer-hp.html'],
      //     //mobile
      //     'landing-page/active/<%= date %>/build/local-active-m.html': ['local-templates/mobile/m-header.html','landing-page/active/<%= date %>/dev/content.html','local-templates/mobile/m-footer.html'],
      //   }
      // },

      // back to school sweeps -----------------------------------------------------------------------------
      backToSchool: {
        files: {
        //desktop landing page
        'landing-page/back-to-school-sweeps/build/local-back-to-school-sweeps-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/back-to-school-sweeps/dev/content.html','local-templates/desktop/d-footer-hp.html'],
        //mobile landing page
        'landing-page/back-to-school-sweeps/build/local-back-to-school-sweeps-m.html': ['local-templates/mobile/m-header.html','landing-page/back-to-school-sweeps/dev/content.html','local-templates/mobile/m-footer.html'],

        //desktop thank you page
        'landing-page/back-to-school-sweeps/build/local-back-to-school-thanks-d.html': ['local-templates/desktop/d-header-hp.html','landing-page/back-to-school-sweeps/dev/thanks.html','local-templates/desktop/d-footer-hp.html'],
        //mobile thank you page
        'landing-page/back-to-school-sweeps/build/local-back-to-school-thanks-m.html': ['local-templates/mobile/m-header.html','landing-page/back-to-school-sweeps/dev/thanks.html','local-templates/mobile/m-footer.html'],
        }
      },
      

      // nav-redesign -----------------------------------------------------------------------------
      navRedesignHTML: {

        files: {

          'nav-redesign/<%= nav.folder %>/build/local-<%= nav.name %>.html': ['nav-redesign/<%= nav.folder %>/html/header.html','nav-redesign/<%= nav.folder %>/html/nav-container-header.html','nav-redesign/<%= nav.folder %>/html/<%= nav.name %>.html','nav-redesign/<%= nav.folder %>/html/nav-container-footer.html','nav-redesign/<%= nav.folder %>/html/footer.html'],

          'nav-redesign/<%= nav.folder %>/monetate/<%= nav.name %>-monetate.js': ['nav-redesign/<%= nav.folder %>/js/nav1-base.js','nav-redesign/<%= nav.folder %>/js/nav1.js','nav-redesign/<%= nav.folder %>/js/icon-bag.js','nav-redesign/<%= nav.folder %>/js/icon-search.js','nav-redesign/<%= nav.folder %>/js/icon-account.js'],

          // 'nav-redesign/<%= nav.folder %>/monetate/nav-1-monetate.js': ['nav-redesign/<%= nav.folder %>/js/nav-base-1.js','nav-redesign/<%= nav.folder %>/js/nav1.js'],

          // 'nav-redesign/<%= nav.folder %>/monetate/nav-2-monetate.js': ['nav-redesign/<%= nav.folder %>/js/nav-base-2.js','nav-redesign/<%= nav.folder %>/js/nav2.js'],
        
        }
      },


      // header-redesign -----------------------------------------------------------------------------
      headerRedesignHTML: {
        src: ['header-redesign/header.html','local-templates/desktop/d-footer-hp.html'],
        dest: 'header-redesign/build/local-header-redesign.html'
      },

       // promos -----------------------------------------------------------------------------
      promosHTML: {
        files: {
          // promo template
          //desktop
          'promos/<%= promo.name %>/<%= promo.date %>/build/local-<%= promo.name %>-d.html': ['local-templates/desktop/d-header-hp.html','promos/<%= promo.name %>/<%= promo.date %>/dev/content.html','local-templates/desktop/d-footer-hp.html'],
          //mobile
          'promos/<%= promo.name %>/<%= promo.date %>/build/local-<%= promo.name %>-m.html': ['local-templates/mobile/m-header.html','promos/<%= promo.name %>/<%= promo.date %>/dev/content.html','local-templates/mobile/m-footer.html'],
        }
      },

      //test promo -----------------------------------------------------------------------------
      promoTestM: {
        src: ['local-templates/mobile/m-header.html','promos/test/dev/test.html','local-templates/mobile/m-footer.html'],
        dest: 'promos/test/build/local-promo-test-m.html'
      },

       //filter -----------------------------------------------------------------------------
      filterHTML: {
        files: {
          'filter/build/local-filter-d.html': ['local-templates/desktop/d-header-2column.html','filter/dev/content.html','local-templates/desktop/d-footer-2column.html'],
        }
      },


      
  }
};