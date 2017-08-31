
module.exports = function(grunt){

	return {
	
      options: {
          sourceMap: true,
          compress: true,
      },

      // HOMEPAGE CSS ---------------------------------------------------------------------------
      hpCSS:{
        files:{
          'homepage/<%= date %>/css/styles.css': 'homepage/<%= date %>/css/styles.less'
        }
      },

      // hpCSS1:{
      //   files:{
      //     'homepage/<%= date %>/css/hp-styles-original.css': 'homepage/<%= date %>/css/hp-styles-original.less'
      //   }
      // },

      // CATEGORIES CSS ---------------------------------------------------------------------------
      categoriesCSS: {
        files: {
          //girls
          'category-pages/<%= date %>/css/girls-clothing.css': 'category-pages/<%= date %>/css/girls-clothing.less',
          //boys
          'category-pages/<%= date %>/css/boys-clothing.css': 'category-pages/<%= date %>/css/boys-clothing.less',
          //baby girl
          'category-pages/<%= date %>/css/baby-girl-clothes.css': 'category-pages/<%= date %>/css/baby-girl-clothes.less',
          //baby boy
          'category-pages/<%= date %>/css/baby-boy-clothes.css': 'category-pages/<%= date %>/css/baby-boy-clothes.less',
          //newborn
          'category-pages/<%= date %>/css/newborn-clothes.css': 'category-pages/<%= date %>/css/newborn-clothes.less'
        }
      },


      // CATALOG CSS ---------------------------------------------------------------------------
      catalogCSS:{
        files:{
          'catalog/<%= date %>/css/catalog.css': 'catalog/<%= date %>/css/catalog.less'
        }
      },

      // LANDING PAGES CSS ---------------------------------------------------------------------------
      landingPagesCSS: {
        files: {
          // GLOBAL SHOP CSS ---------------------------------------------------------------------------
          'landing-page/global-shop/css/global-shop-styles.css': 'landing-page/global-shop/css/global-shop-styles.less',
          // INFLUENCER CSS ---------------------------------------------------------------------------
          'landing-page/influencer/<%= date %>/css/influencer-styles.css': 'landing-page/influencer/<%= date %>/css/influencer-styles.less',
          // BABYSWEEPS CSS ---------------------------------------------------------------------------
          'landing-page/baby-sweeps/css/styles.css': 'landing-page/baby-sweeps/css/styles.less',
          // LITTLE CITIZENS CSS ---------------------------------------------------------------------------
          'landing-page/little-citizen/<%= date %>/css/styles.css': 'landing-page/little-citizen/<%= date %>/css/styles.less',
          // ABOUT CSS ---------------------------------------------------------------------------
          'landing-page/about/css/styles.css': 'landing-page/about/css/styles.less',
          // CAREERS CSS ---------------------------------------------------------------------------
          'landing-page/careers/css/styles.css': 'landing-page/careers/css/styles.less',
          // INSPIRATION CSS ---------------------------------------------------------------------------
          'landing-page/inspiration/scotland/css/styles.css': 'landing-page/inspiration/scotland/css/styles.less',
          // ACTIVE CSS ---------------------------------------------------------------------------
          'landing-page/active/<%= date %>/css/styles.css': 'landing-page/active/<%= date %>/css/styles.less',
          // BACK TO SCHOOL SWEEPS CSS ---------------------------------------------------------------------------
          'landing-page/back-to-school-sweeps/css/styles.css': 'landing-page/back-to-school-sweeps/css/styles.less'
        }
      },


      // NAV REDESIGN CSS ---------------------------------------------------------------------------
      navRedesignCSS: {
        //dynamic files
        expand:true,
        cwd:'nav-redesign/css',
        src:['*.less'],
        dest:'nav-redesign/css/',
        ext:'.css',

        /*files: {
          'nav-redesign/css/styles1.css': 'nav-redesign/css/styles1.less',
          'nav-redesign/css/styles2.css': 'nav-redesign/css/styles2.less',
          'nav-redesign/css/styles3.css': 'nav-redesign/css/styles3.less',
          'nav-redesign/css/styles4.css': 'nav-redesign/css/styles4.less',
          'nav-redesign/css/styles5.css': 'nav-redesign/css/styles5.less',
          'nav-redesign/css/styles6.css': 'nav-redesign/css/styles6.less',
          'nav-redesign/css/styles7.css': 'nav-redesign/css/styles7.less',
          'nav-redesign/css/styles8.css': 'nav-redesign/css/styles8.less'
        }*/
      },

      // HEADER REDESIGN CSS ---------------------------------------------------------------------------
      headerRedesignCSS:{
        files:{
          'header-redesign/styles.css': 'header-redesign/styles.less',
          // '../nav-redesign/styles.css': 'header-redesign/styles.less'
        }
      },

      // PROMOS CSS ---------------------------------------------------------------------------
      promosCSS:{
        files:{
          //bmsm
          'promos/bmsm/<%= date %>/css/styles.css': 'promos/bmsm/<%= date %>/css/styles.less',
          //influencer
          'promos/influencer/<%= date %>/css/styles.css': 'promos/influencer/<%= date %>/css/styles.less',
          //labor day
          'promos/labor-day/<%= date %>/css/styles.css': 'promos/labor-day/<%= date %>/css/styles.less',
          //school days recruitment
          'promos/school-days-recruitment/<%= date %>/css/styles.css': 'promos/school-days-recruitment/<%= date %>/css/styles.less',
        }
      },
    
  }
};