module.exports = function(grunt){

	return {

		options: {
			flatten:true
		},

		// BUILD  ---------------------------------------------------------------------------
		buildIncludes: {

			files: [
				//toolkit
				{ 
					cwd: 'local-templates/', 
					src: [ '*.html' ], 
					dest:  'local-templates/build/',
				},
			],

		},

		// CONTENT ZONE  ---------------------------------------------------------------------------
		zoneIncludes: {

			files: [
				//toolkit
				{ 
					cwd: 'content-zone/<%= zone.name %>/dev', 
					src: [ '*.html' ], 
					dest:  'content-zone/<%= zone.name %>/toolkit/',
				},
			],

		},

		// CONTENT CELL TAKE OVER  ---------------------------------------------------------------------------
		cellIncludes: {

			files: [
				//toolkit
				{ 
					cwd: 'content-cell/<%= cell.name %>/<%= cell.date %>/dev', 
					src: [ '*.html' ], 
					dest:  'content-cell/<%= cell.name %>/<%= cell.date %>/toolkit/',
				},
			],

		},

		// HOMEPAGE  ---------------------------------------------------------------------------
		hpIncludes: {

			files: [
				//toolkit
				{ 
					cwd: 'homepage/<%= hp.date %>', 
					src: [ 'dev/content.html' ], 
					dest:  'homepage/<%= hp.date %>/toolkit/toolkit-homepage.html',
				},
			],

		},

		// CATEGORIES  ---------------------------------------------------------------------------
		categoriesIncludes: {

			files: [
				//toolkit
				{ cwd: 'category-pages/<%= cat.date %>/dev', src: [ '*.html' ], dest:  'category-pages/<%= cat.date %>/toolkit/'},
			],

		},

		// LANDING PAGES  ---------------------------------------------------------------------------
		landingPagesIncludes: {

			files: [
				{ 
					cwd: 'landing-page/<%= landing.name %>/<%= landing.date %>/dev', 
					src: [ '*.html' ], 
					dest:  'landing-page/<%= landing.name %>/<%= landing.date %>/toolkit/'
				},
			],

		},

		// PROMOS  ---------------------------------------------------------------------------
		promosIncludes: {

			files: [
				// promo template toolkit
				{ 
					cwd: 'promos/<%= promo.name %>/<%= promo.date %>/dev', 
					src: [ '*.html' ], 
					dest: 'promos/<%= promo.name %>/<%= promo.date %>/toolkit/toolkit-<%= promo.name %>.html',
				},
			]
		},

		// NAV REDESIGIN  ---------------------------------------------------------------------------
		navRedesignIncludes: {

			files: [
				
				{ cwd: 'nav-redesign/<%= nav.folder %>/html', src: [ 'template.html' ], dest:  'nav-redesign/<%= nav.folder %>/build/'},
			],

		},
	}
};