module.exports = function(grunt){

	return {
		options:{livereload: true},

      // HOMEPAGE ---------------------------------------------------------------------------
  		HP: {
  			files: ['homepage/170907/css/styles.less', 'homepage/170907/dev/content.html'],
  			tasks: ['less:hpCSS','copy:hpCopy', 'includes:hpIncludes', 'concat:hp'],
  		},

      // cssHP1: {
      //   files: ['homepage/170907/css/*.less'],
      //   tasks: ['less:hpCSS1','makeCss:homepage/170907/css/hp-styles-original.css:homepage/170907/css/hp-styles-original.css', 'concat:hpD1', 'concat:hpM1', 'concat:hpToolkit1'],
      // },

      // CATEGORIES ---------------------------------------------------------------------------
      Categories: {
        files: ['category-pages/170907/css/*.less','category-pages/170907/dev/*.html'],
        tasks: ['less:categoriesCSS', 'copy:categoriesCopy', 'includes:categoriesIncludes', 'concat:categories'],
      },

      // CATALOG  ---------------------------------------------------------------------------
      Catalog: {
        files: ['catalog/170330/css/catalog.less', 'catalog/170330/dev/*.html'],
        tasks: ['less:catalogCSS','makeCss:catalog/170330/css/catalog.css:catalog/170330/css/catalog.css', 'concat:catalog'],
      },
      
      // INFLUENCER  ---------------------------------------------------------------------------
      Influencer: {
        files: ['landing-page/influencer/170828/css/*.less', 'landing-page/influencer/170828/dev/*.html'],
        tasks: ['less:influencerCSS', 'concat:influencer'],
      },
      // BABYSWEEPS  ---------------------------------------------------------------------------
      Babysweeps: {
        files: ['landing-page/baby-sweeps/css/styles.less', 'landing-page/baby-sweeps/dev/content.html'],
        tasks: ['less:babysweepsCSS','cssmin','makeCss:landing-page/baby-sweeps/css/styles.css:landing-page/baby-sweeps/css/styles.css', 'concat:babysweeps'],
      },
      // LITTLE CITIZEN  ---------------------------------------------------------------------------
      LittleCitizen: {
        files: ['landing-page/little-citizen/170723/css/styles.less','landing-page/little-citizen/170723/dev/content.html'],
        tasks: ['less:littleCitizenCSS','cssmin','makeCss:landing-page/little-citizen/170723/css/styles.css:landing-page/little-citizen/170723/css/styles.css', 'concat:littleCitizen'],
      },
      // GLOBAL SHOP  ---------------------------------------------------------------------------
      GlobalShop: {
        files: ['landing-page/global-shop/css/global-shop-styles.less','landing-page/global-shop/dev/*.html'],
        tasks: ['less:globalShopCSS','makeCss:landing-page/global-shop/css/global-shop-styles.css:landing-page/global-shop/css/global-shop-styles.css', 'concat:globalShop'],
      },
      // ABOUT  ---------------------------------------------------------------------------
      About: {
        files: ['landing-page/about/css/styles.less','landing-page/about/dev/content.html'],
        tasks: ['less:aboutCSS','makeCss:landing-page/about/css/styles.css:landing-page/about/css/styles.css', 'concat:about'],
      },
      // CAREERS  ---------------------------------------------------------------------------
      Careers: {
        files: ['landing-page/careers/css/styles.less','landing-page/careers/dev/content.html'],
        tasks: ['less:careersCSS','makeCss:landing-page/careers/css/styles.css:landing-page/careers/css/styles.css', 'concat:careers'],
      },
      // INSPIRATION  ---------------------------------------------------------------------------
      Inspiration: {
        files: ['landing-page/inspiration/scotland/css/styles.less','landing-page/inspiration/scotland/dev/content.html'],
        tasks: ['less:inspirationCSS','makeCss:landing-page/inspiration/scotland/css/styles.css:landing-page/inspiration/scotland/css/styles.css', 'concat:inspiration'],
      },
      // ACTIVE  ---------------------------------------------------------------------------
      Active: {
        files: ['landing-page/active/170907/css/styles.less', 'landing-page/active/170907/dev/*.html'],
        tasks: ['less:activeCSS','makeCss:landing-page/active/170907/css/styles.css:landing-page/active/170907/css/styles.css', 'concat:active'],
      },
      // BACK TO SCHOOL SWEEPS  ---------------------------------------------------------------------------
      BackToSchool: {
        files: ['landing-page/back-to-school-sweeps/css/styles.less', 'landing-page/back-to-school-sweeps/dev/*.html'],
        tasks: ['less:backToSchoolCSS', 'concat:backToSchool'],
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
        files: ['promos/labor-day/170831/css/styles.less', 'promos/labor-day/170831/dev/content.html'],
        tasks: ['less:promosCSS', 'copy:promosCopy','concat:promosHTML', 'includes:promosIncludes'],
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