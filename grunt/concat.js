module.exports = function(grunt){
	return {
		options: {
        //sourceMap:true,
      },

      // CONTENT CELL ---------------------------------------------------------------------------
      cell: {
        files: {
          //desktop
          'content-cell/<%= cell.name %>/<%= cell.date %>/build/local-d.html': ['local-templates/desktop/header-get.html','local-templates/build/two-column-page.html','local-templates/desktop/footer-get.html'],
          //mobile
          'content-cell/<%= cell.name %>/<%= cell.date %>/build/local-m.html': ['local-templates/mobile/header-get.html','local-templates/build/two-column-page.html','local-templates/mobile/footer-get.html'],
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
        'landing-page/<%= landing.name %>/<%= landing.date %>/build/<%= landing.name %>-d.html': ['local-templates/desktop/header-get.html','local-templates/build/full-page.html','local-templates/desktop/footer-get.html'],
        //mobile
        'landing-page/<%= landing.name %>/<%= landing.date %>/build/<%= landing.name %>-m.html': ['local-templates/mobile/header-get.html','local-templates/build/full-page.html','local-templates/mobile/footer-get.html'],
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


       //filter -----------------------------------------------------------------------------
      filterHTML: {
        files: {
          'filter/build/local-filter-d.html': ['local-templates/desktop/d-header-2column.html','filter/dev/content.html','local-templates/desktop/d-footer-2column.html'],
        }
      },


      
  }
};