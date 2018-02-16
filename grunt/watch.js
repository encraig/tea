module.exports = function(grunt){

	return {
		options:{livereload: true},

      // BUILD ---------------------------------------------------------------------------
      Build: {
        files: ['local-templates/*.html'],
        tasks: ['includes:buildIncludes'],
      },

      // CONTENT ZONE ---------------------------------------------------------------------------
      Zone: {
        files: ['content-zone/<%= zone.name %>/css/*.less', 'content-zone/<%= zone.name %>/dev/*.html'],
        tasks: ['less:zoneCSS', 'includes:zoneIncludes'],
      },

      // CONTENT CELL TAKE OVER ---------------------------------------------------------------------------
      Cell: {
        files: ['content-cell-take-over/<%= cell.date %>/<%= cell.name %>/css/*.less', 'content-cell-take-over/<%= cell.date %>/<%= cell.name %>/dev/*.html', 'content-cell-take-over/<%= cell.date %>/<%= cell.name %>/js/*.js'],
        tasks: ['less:cellCSS', 'includes:cellIncludes', 'concat:cell'],
      },

      // HOMEPAGE ---------------------------------------------------------------------------
  		HP: {
  			files: ['homepage/<%= hp.date %>/css/styles.less', 'homepage/<%= hp.date %>/dev/content.html'],
  			tasks: ['less:hpCSS', 'includes:hpIncludes','includes:buildIncludes', 'concat:hp'],
  		},

      // CATEGORIES ---------------------------------------------------------------------------
      Categories: {
        files: ['category-pages/<%= cat.date %>/css/*.less','category-pages/<%= cat.date %>/dev/*.html'],
        tasks: ['less:categoriesCSS', 'includes:categoriesIncludes','includes:buildIncludes', 'concat:categories'],
      },

      // LANDING PAGES  ---------------------------------------------------------------------------
      LandingPages: {
        files: ['landing-page/<%= landing.name %>/<%= landing.date %>/css/*.less', 'landing-page/<%= landing.name %>/<%= landing.date %>/dev/*.html', 'landing-page/<%= landing.name %>/<%= landing.date %>/js/*.js'],
        tasks: ['less:landingPagesCSS', 'includes:landingPagesIncludes','includes:buildIncludes', 'uglify:landingPagesScripts', 'concat:landingPages'],
      },
      

      // BACK TO SCHOOL SWEEPS  ---------------------------------------------------------------------------
      BackToSchool: {
        files: ['landing-page/back-to-school-sweeps/css/styles.less', 'landing-page/back-to-school-sweeps/dev/*.html'],
        tasks: ['less:backToSchoolCSS', 'includes:landingPagesIncludes', 'concat:backToSchool'],
      },
      
      
      // NAV REDESIGN  ---------------------------------------------------------------------------
      NavRedesign: {
        files: ['nav-redesign/<%= nav.folder %>/css/*.less', 'nav-redesign/<%= nav.folder %>/html/*.html', 'nav-redesign/<%= nav.folder %>/js/*.js'],
        tasks: ['less:navRedesignCSS','includes:navRedesignIncludes', 'concat:navRedesignHTML', 'uglify:navRedesignScripts'],
      },

      // HEADER REDESIGN  ---------------------------------------------------------------------------
      HeaderRedesign: {
        files: ['header-redesign/*.less', 'header-redesign/*.html'],
        tasks: ['less:headerRedesignCSS','concat:headerRedesignHTML'],
      },

       // PROMOS  ---------------------------------------------------------------------------
      Promos: {
        files: ['promos/<%= promo.name %>/<%= promo.date %>/css/styles.less', 'promos/<%= promo.name %>/<%= promo.date %>/dev/content.html'],
        tasks: ['less:promosCSS','includes:promosIncludes','concat:promosHTML', ],
      },


      // PROMO TEST HTML ---------------------------------------------------------------------------
      htmlPromoTest: {
        files:['promos/test/dev/*.html'],
        tasks:['concat:promoTestM']
      },

      // FILTER ---------------------------------------------------------------------------
      Filter: {
        files:['filter/dev/*.html', 'filter/css/*less'],
        tasks:['less:filterCSS', 'concat:filterHTML']
      },

      // js: {
      //   files: ['dev/**/*.js'],
      //   tasks: ['concat','uglify']
      // }
 
  }
};