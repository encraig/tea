module.exports = function(grunt){

	return {

		options: {
			flatten:true
		},

		// HOMEPAGE  ---------------------------------------------------------------------------
		hpIncludes: {

			files: [
				//toolkit
				{ cwd: 'homepage/<%= date %>', src: [ 'dev/content.html' ], dest:  'homepage/<%= date %>/toolkit/toolkit-homepage.html',},
			],

		},

		// CATEGORIES  ---------------------------------------------------------------------------
		categoriesIncludes: {

			files: [
				//toolkit
				{ cwd: 'category-pages/<%= date %>/dev', src: [ '*.html' ], dest:  'category-pages/<%= date %>/toolkit/'},
			],

		},

		// LANDING PAGES  ---------------------------------------------------------------------------
		landingPagesIncludes: {

			files: [
				// about toolkit
				{ cwd: 'landing-page/about/dev', src: [ '*.html' ], dest:  'landing-page/about/toolkit/toolkit-about.html'},
				// baby sweeps toolkit
				{ cwd: 'landing-page/baby-sweeps/dev', src: [ '*.html' ], dest:  'landing-page/baby-sweeps/toolkit/toolkit-babysweeps.html'},
				// back to school sweeps toolkit
				{ cwd: 'landing-page/back-to-school-sweeps/dev', src: [ 'content.html' ], dest:  'landing-page/back-to-school-sweeps/toolkit/toolkit-back-to-school-sweeps.html'},
				{ cwd: 'landing-page/back-to-school-sweeps/dev', src: [ 'thanks.html' ], dest:  'landing-page/back-to-school-sweeps/toolkit/toolkit-back-to-school-thanks.html'},
				// careers toolkit
				{ cwd: 'landing-page/careers/dev', src: [ '*.html' ], dest:  'landing-page/careers/toolkit/toolkit-careers.html'},
				// influencer toolkit
				{ cwd: 'landing-page/influencer/<%= date %>/dev', src: [ '*.html' ], dest:  'landing-page/influencer/<%= date %>/toolkit/toolkit-influencer.html'},
				// inspiration toolkit
				{ cwd: 'landing-page/inspiration/scotland/dev', src: [ '*.html' ], dest:  'landing-page/inspiration/scotland/toolkit/toolkit-inspiration.html'},
				// little citizen toolkit
				{ cwd: 'landing-page/little-citizen/<%= date %>/dev', src: [ '*.html' ], dest:  'landing-page/little-citizen/<%= date %>/toolkit/toolkit-little-citizen.html'},
			],

		},

		// PROMOS  ---------------------------------------------------------------------------
		promosIncludes: {

			files: [
				// labor day toolkit
				{ cwd: 'promos/labor-day/<%= date %>/dev', src: [ '*.html' ], dest: 'promos/labor-day/<%= date %>/toolkit/toolkit-labor-day.html',},
				// influencer toolkit
				{ cwd: 'promos/influencer/<%= date %>/dev', src: [ '*.html' ], dest: 'promos/influencer/<%= date %>/toolkit/toolkit-influencer.html',},
				// school days recruitment toolkit
				{ cwd: 'promos/school-days-recruitment/<%= date %>/dev', src: [ '*.html' ], dest: 'promos/school-days-recruitment/<%= date %>/toolkit/toolkit-school-days.html',},
			]
		},
	}
};