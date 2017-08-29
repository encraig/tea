module.exports = function(grunt){

	return {

		options: {
			flatten:true
		},

		// HOMEPAGE  ---------------------------------------------------------------------------
		hpIncludes: {
			options: {
				includePath: 'homepage/170907/include',
			},

			files: [
				//toolkit
				{ cwd: 'homepage/170907', src: [ 'dev/content.html' ], dest:  'homepage/170907/toolkit/toolkit-homepage.html',},
			],

		},

		// CATEGORIES  ---------------------------------------------------------------------------
		categoriesIncludes: {
			options: {
				includePath: 'category-pages/170907/include',
			},

			files: [
				//toolkit
				{ cwd: 'category-pages/170907/dev', src: [ '*.html' ], dest:  'category-pages/170907/toolkit/'},
			],

		},

		// PROMOS  ---------------------------------------------------------------------------
		promosIncludes: {
			options: {
				includePath: 'promos/labor-day/170831/include',
			},

			files: [
				//build
				{ cwd: 'promos/labor-day/170831', src: [ 'dev/content-build-d/content.html' ], dest: 'promos/labor-day/170831/build/build-labor-day-d-2.html',},
				//toolkit
				{ cwd: 'promos/labor-day/170831', src: [ 'dev/content.html' ], dest: 'promos/labor-day/170831/toolkit/toolkit-labor-day2.html',},
			]
		},
	}
};