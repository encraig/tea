module.exports = function(grunt){

	return {

		options: {
			flatten:true
		},

		// HOMEPAGE  ---------------------------------------------------------------------------
		hpIncludes: {

			files: [
				//toolkit
				{ cwd: 'homepage/170907', src: [ 'dev/content.html' ], dest:  'homepage/170907/toolkit/toolkit-homepage.html',},
			],

		},

		// CATEGORIES  ---------------------------------------------------------------------------
		categoriesIncludes: {

			files: [
				//toolkit
				{ cwd: 'category-pages/170907/dev', src: [ '*.html' ], dest:  'category-pages/170907/toolkit/'},
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
				{ cwd: 'landing-page/influencer/170828/dev', src: [ '*.html' ], dest:  'landing-page/influencer/170828/toolkit/toolkit-influencer.html'},
				// inspiration toolkit
				{ cwd: 'landing-page/inspiration/scotland/dev', src: [ '*.html' ], dest:  'landing-page/inspiration/scotland/toolkit/toolkit-inspiration.html'},
				// little citizen toolkit
				{ cwd: 'landing-page/little-citizen/170723/dev', src: [ '*.html' ], dest:  'landing-page/little-citizen/170723/toolkit/toolkit-little-citizen.html'},
			],

		},

		// PROMOS  ---------------------------------------------------------------------------
		promosIncludes: {

			files: [
				// labor day toolkit
				{ cwd: 'promos/labor-day/170831/dev', src: [ '*.html' ], dest: 'promos/labor-day/170831/toolkit/toolkit-labor-day.html',},
				// influencer toolkit
				{ cwd: 'promos/influencer/170828/dev', src: [ '*.html' ], dest: 'promos/influencer/170828/toolkit/toolkit-influencer.html',},
			]
		},
	}
};