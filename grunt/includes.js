module.exports = function(grunt){

	return {

		options: {
			flatten:true
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
					dest:  'landing-page/<%= landing.name %>/<%= landing.date %>/toolkit/toolkit-<%= landing.name %>.html'
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
				//toolkit
				{ cwd: 'nav-redesign/html', src: [ '{nav1,nav2,nav3,nav4,nav5,nav6,nav7,nav8}.html' ], dest:  'nav-redesign/monetate/'},
			],

		},
	}
};