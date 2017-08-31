module.exports = function(grunt){

	return {
		options:{livereload: true},

      // HOMEPAGE ---------------------------------------------------------------------------
  		HP: {
  			files: ['homepage/<%= date %>/css/styles.less', 'homepage/<%= date %>/dev/content.html'],
  			tasks: ['less:hpCSS', 'includes:hpIncludes', 'concat:hp'],
  		},

      // cssHP1: {
      //   files: ['homepage/<%= date %>/css/*.less'],
      //   tasks: ['less:hpCSS1','makeCss:homepage/<%= date %>/css/hp-styles-original.css:homepage/<%= date %>/css/hp-styles-original.css', 'concat:hpD1', 'concat:hpM1', 'concat:hpToolkit1'],
      // },

      // CATEGORIES ---------------------------------------------------------------------------
      Categories: {
        files: ['category-pages/<%= date %>/css/*.less','category-pages/<%= date %>/dev/*.html'],
        tasks: ['less:categoriesCSS', 'includes:categoriesIncludes', 'concat:categories'],
      },

      // CATALOG  ---------------------------------------------------------------------------
      Catalog: {
        files: ['catalog/<%= date %>/css/catalog.less', 'catalog/<%= date %>/dev/*.html'],
        tasks: ['less:catalogCSS','makeCss:catalog/<%= date %>/css/catalog.css:catalog/<%= date %>/css/catalog.css', 'concat:catalog'],
      },
      
      // INFLUENCER  ---------------------------------------------------------------------------
      Influencer: {
        files: ['landing-page/influencer/<%= date %>/css/*.less', 'landing-page/influencer/<%= date %>/dev/*.html'],
        tasks: ['less:influencerCSS', 'includes:landingPagesIncludes', 'concat:influencer'],
      },
      // BABYSWEEPS  ---------------------------------------------------------------------------
      Babysweeps: {
        files: ['landing-page/baby-sweeps/css/styles.less', 'landing-page/baby-sweeps/dev/content.html'],
        tasks: ['less:babysweepsCSS', 'includes:landingPagesIncludes', 'concat:babysweeps'],
      },
      // LITTLE CITIZEN  ---------------------------------------------------------------------------
      LittleCitizen: {
        files: ['landing-page/little-citizen/<%= date %>/css/styles.less','landing-page/little-citizen/<%= date %>/dev/content.html'],
        tasks: ['less:littleCitizenCSS', 'includes:landingPagesIncludes', 'concat:littleCitizen'],
      },
      // GLOBAL SHOP  ---------------------------------------------------------------------------
      GlobalShop: {
        files: ['landing-page/global-shop/css/global-shop-styles.less','landing-page/global-shop/dev/*.html'],
        tasks: ['less:globalShopCSS', 'includes:landingPagesIncludes', 'concat:globalShop'],
      },
      // ABOUT  ---------------------------------------------------------------------------
      About: {
        files: ['landing-page/about/css/styles.less','landing-page/about/dev/content.html'],
        tasks: ['less:aboutCSS', 'includes:landingPagesIncludes', 'concat:about'],
      },
      // CAREERS  ---------------------------------------------------------------------------
      Careers: {
        files: ['landing-page/careers/css/styles.less','landing-page/careers/dev/content.html'],
        tasks: ['less:careersCSS', 'includes:landingPagesIncludes', 'concat:careers'],
      },
      // INSPIRATION  ---------------------------------------------------------------------------
      Inspiration: {
        files: ['landing-page/inspiration/scotland/css/styles.less','landing-page/inspiration/scotland/dev/content.html'],
        tasks: ['less:inspirationCSS', 'includes:landingPagesIncludes', 'concat:inspiration'],
      },
      // ACTIVE  ---------------------------------------------------------------------------
      Active: {
        files: ['landing-page/active/<%= date %>/css/styles.less', 'landing-page/active/<%= date %>/dev/*.html'],
        tasks: ['less:activeCSS', 'includes:landingPagesIncludes', 'concat:active'],
      },
      // BACK TO SCHOOL SWEEPS  ---------------------------------------------------------------------------
      BackToSchool: {
        files: ['landing-page/back-to-school-sweeps/css/styles.less', 'landing-page/back-to-school-sweeps/dev/*.html'],
        tasks: ['less:backToSchoolCSS', 'includes:landingPagesIncludes', 'concat:backToSchool'],
      },
      

      // NAV REDESIGN  ---------------------------------------------------------------------------
      NavRedesign: {
        files: ['nav-redesign/css/*.less', 'nav-redesign/html/*.html', 'nav-redesign/js/*.js'],
        tasks: ['less:navRedesignCSS', 'concat:navRedesignHTML', 'uglify:navRedesignScripts'],
      },

      // HEADER REDESIGN  ---------------------------------------------------------------------------
      HeaderRedesign: {
        files: ['header-redesign/*.less', 'header-redesign/*.html'],
        tasks: ['less:headerRedesignCSS','concat:headerRedesignHTML'],
      },

       // PROMOS  ---------------------------------------------------------------------------
      Promos: {
        files: ['promos/influencer/<%= date %>/css/styles.less', 'promos/influencer/<%= date %>/dev/content.html'],
        tasks: ['less:promosCSS','includes:promosIncludes','concat:promosHTML', ],
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