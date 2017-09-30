
module.exports = function(grunt){

	return {
	
      options: {
          sourceMap: true,
          compress: true,
      },

      // HOMEPAGE CSS ---------------------------------------------------------------------------
      hpCSS:{
        files:{
          'homepage/<%= hp.date %>/css/styles.css': 'homepage/<%= hp.date %>/css/styles.less'
        }
      },

      // CATEGORIES CSS ---------------------------------------------------------------------------
      categoriesCSS: {
        files: {
          //girls
          'category-pages/<%= cat.date %>/css/girls-clothing.css': 'category-pages/<%= cat.date %>/css/girls-clothing.less',
          //boys
          'category-pages/<%= cat.date %>/css/boys-clothing.css': 'category-pages/<%= cat.date %>/css/boys-clothing.less',
          //baby girl
          'category-pages/<%= cat.date %>/css/baby-girl-clothes.css': 'category-pages/<%= cat.date %>/css/baby-girl-clothes.less',
          //baby boy
          'category-pages/<%= cat.date %>/css/baby-boy-clothes.css': 'category-pages/<%= cat.date %>/css/baby-boy-clothes.less',
          //newborn
          'category-pages/<%= cat.date %>/css/newborn-clothes.css': 'category-pages/<%= cat.date %>/css/newborn-clothes.less'
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
          'landing-page/<%= landing.name %>/<%= landing.date %>/css/styles.css':'landing-page/<%= landing.name %>/<%= landing.date %>/css/styles.less',
        }
      },


      // NAV REDESIGN CSS ---------------------------------------------------------------------------
      navRedesignCSS: {
        //dynamic files
        expand:true,
        cwd:'nav-redesign/<%= nav.folder %>/css',
        src:['*.less'],
        dest:'nav-redesign/<%= nav.folder %>/css/output/',
        ext:'.css',
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
          //promo template
          'promos/<%= promo.name %>/<%= promo.date %>/css/styles.css': 'promos/<%= promo.name %>/<%= promo.date %>/css/styles.less',
        }
      },

      // FILTER CSS ---------------------------------------------------------------------------
      filterCSS:{
        files:{
          //promo template
          'filter/css/styles.css': 'filter/css/styles.less',
        }
      },
    
  }
};