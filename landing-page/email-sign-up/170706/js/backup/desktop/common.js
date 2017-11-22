// $Id: common.js 122360 2017-02-23 10:30:21Z chris $
// KT: for minification/packaging use:
// * http://dean.edwards.name/packer/
// * http://www.refresh-sf.com/yui/

/** Peekaboo */
(function($){$.fn.peekaboo=function(d){var e=$.extend({},$.fn.peekaboo.defaults,d);this.each(function(){var a=$(this);if(a.next().length=='1'){a.next().slideUp(0);a.before(buildbutton);var b=a.prev();peekaboo(b)}});function buildbutton(){if(e.button=='a'){var a='<'+e.button+' class="'+e.buttonclass+'" href="#">'+e.buttontext+'</'+e.button+'>'}else{var a='<'+e.button+' class="'+e.buttonclass+'">'+e.buttontext+'</'+e.button+'>'}return a}function peekaboo(c){c.click(function(a){a.preventDefault();var b=$(this).next().next();if(b.length){b.slideToggle(e.togglespeed,function(){c.toggleClass(e.toggleclass)})}})}};$.fn.peekaboo.defaults={'button':'a','buttonclass':'show-hide-button','buttontext':'Show/Hide','togglespeed':'slow','toggleclass':'expanded'}})(jQuery);

 /** TipTip */
(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);

/** jQuery Placeholder */
(function($){if("placeholder"in document.createElement("input"))return;$(document).ready(function(){$(':input[placeholder]').not(':password').each(function(){setupPlaceholder($(this))});$(':password[placeholder]').each(function(){setupPasswords($(this))});$('form').submit(function(e){clearPlaceholdersBeforeSubmit($(this))})});function setupPlaceholder(a){var b=a.attr('placeholder');setPlaceholderOrFlagChanged(a,b);a.focus(function(e){if(a.data('changed')===true)return;if(a.val()===b)a.val('')}).blur(function(e){if(a.val()==='')a.val(b)}).change(function(e){a.data('changed',a.val()!=='')})}function setPlaceholderOrFlagChanged(a,b){(a.val()==='')?a.val(b):a.data('changed',true)}function setupPasswords(a){var b=createPasswordPlaceholder(a);a.after(b);(a.val()==='')?a.hide():b.hide();$(a).blur(function(e){if(a.val()!=='')return;a.hide();b.show()});$(b).focus(function(e){a.show().focus();b.hide()})}function createPasswordPlaceholder(a){return $('<input>').attr({placeholder:a.attr('placeholder'),value:a.attr('placeholder'),id:a.attr('id'),readonly:true}).addClass(a.attr('class'))}function clearPlaceholdersBeforeSubmit(a){a.find(':input[placeholder]').each(function(){if($(this).data('changed')===true)return;if($(this).val()===$(this).attr('placeholder'))$(this).val('')})}})(jQuery);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Tea Collection's namespace
 */
var TC = TC || {};

TC.size_map = {};
TC.smallest_child_id = TC.smallest_child_id || {};
TC.biggest_child_id = TC.biggest_child_id || {};

var mpd = mpd || {};

/*
* Extract all unique size values and descriptions
*/
TC.extract_sizes = function () {
	var p, c;
	TC.size_map = {};
	for (p in mpd) {
		for (c in mpd[p].parent_data) {
			if (!TC.size_map.hasOwnProperty(mpd[p].parent_data[c].size)) {
				TC.size_map[mpd[p].parent_data[c].size] =
					mpd[p].parent_data[c].size_description;
			}
		}
	}
}

/*
* Marks wishlists as added if needed
*/
TC.fetch_wishlists = function (wrapper) {
	TC.wishlist_items = TC.wishlist_items || [];
	/*var i, populate = function() {
		wrapper = wrapper || jQuery('body');
		for (i in TC.wishlist_items) {
			wrapper.find(
				'.add-to-wishlist[href$="#'
					+ TC.wishlist_items[i].sku
					+ '/' + TC.wishlist_items[i].color + '"]'
			).addClass(
				'added-to-wishlist'
			).removeClass('add-to-wishlist');
		}
	};

	if (TC.wishlist_items == undefined) {
		TC.wishlist_items = [];
		jQuery.ajax({
			url: smarty_vars.rel_html_url,
			data: 'page=tea&action=wishes',
			type: 'POST',
			dataType: 'json',
			success: function (o) {
				for (i in o) {
					TC.wishlist_items.push({sku:o[i].sku,color:o[i].color});
				}
				populate();
			}
		});
	} else {
		populate();
	}*/
}
divinity.fetch_wishlists = function () {}
TC.items_per_color = {};

/**
* Cache child items per parent and color value
*/
TC.get_item_by_color = function (item_id, val) {
	var child_id;
	TC.items_per_color[item_id] = TC.items_per_color[item_id] || {};
	TC.items_per_color[item_id] = TC.items_per_color[item_id] || {};
	if (typeof TC.items_per_color[item_id][val] == 'undefined') {
		for (child_id in mpd[item_id].parent_data) {
			if (TC.infant) {
				if (child_id == TC.smallest_child_id[item_id][val]) {
					TC.items_per_color[item_id][mpd[item_id].parent_data[child_id].color] = child_id;
					break;
				}
			} else if (child_id == TC.biggest_child_id[item_id][val]) {
				TC.items_per_color[item_id][mpd[item_id].parent_data[child_id].color] = child_id;
				break;
			}
		}
	}
	return mpd[item_id].parent_data[TC.items_per_color[item_id][val]];
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * jCarousel
 */
jQuery(document).ready(function() {
	if (smarty_vars.divinity.page == 'item') {
		jQuery('body.item .jcarousel').jcarousel();
	}
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Info Box: Tooltip for the small box with a question mark in it. E.g. "PROMO CODE [?]"
 */
jQuery(document).ready(function() {
	jQuery('a.what-is-this').tipTip();
	jQuery(document).bind('ajaxCartViewAfter', function() {
		jQuery('#shopping-bag-popup a.what-is-this').tipTip();
	});
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Estimate Sales Tax Functionality
 */
jQuery(document).ready(function() {
	jQuery('body').delegate('a.estimate-tax', 'click', function(event) {
		event.preventDefault();
		var tax_wrapper = jQuery('.tax-wrapper');


		tax_wrapper.is(':visible') ? ((tax_wrapper.find('input').first().val()) ? jQuery(this).text('change') : (jQuery(this).hasClass('duty-tax') ? Query(this).text('estimate duties & taxes') : jQuery(this).text('estimate sales tax'))) : (jQuery(this).hasClass('duty-tax') ? jQuery(this).text('hide duties & taxes') : jQuery(this).text('hide sales tax'))

		tax_wrapper.slideToggle('fast');
	});
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* PDP & Quick-View tabs
*/
jQuery(document).ready(function() {
	jQuery('body').delegate('.pdp-item-details-description h6 a', 'click', function(event) {
		event.preventDefault();
		var div = jQuery(this).parent().next();
		if (div.hasClass('active')) {
			div.removeClass('active');
			return;
		} else {
			jQuery('.pdp-item-details-description div').removeClass('active');
			div.addClass('active');
		}
	});
	jQuery('.thumb-sizes').tipTip();
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Sidebar & Refine Filters
 */
jQuery(document).ready(function() {
	// Browse Pages: Sidebar -> Show/Hide Implementation (Peekaboo jQuery Plugin)
	jQuery('.show-hide').peekaboo({
		'togglespeed': 'fast'
	});

	// Current Category
	jQuery(
		'article.sidebar ul li a[href="'
		+ location.protocol
		+ '//' + location.host
		+ location.pathname + '"]'
	).closest('li').addClass('active');

	// Active Category in Top Nav
	jQuery('nav#main-categories ul li a[href="' + TC.active_category_url + '"]').closest('li').addClass('active');
	
	// Active Category in Sticky Nav
	jQuery('.sticky-header ul li a[href="' + TC.active_category_url + '"]').closest('li').addClass('active');

	//Refine Filters
	jQuery('.default_expanded').prev().click();

	// Sidebar Slider Implementation (Not Complete)
	// Moved to tpl... later on might move it here... for now till the dev is on will be there
	// $(function() {
	// 	$(".ui-slider").slider({
	// 		range: true,
	// 		min: 0,
	// 		max: 75,
	// 		values: [ 0, 75 ],
	// 		slide: function( event, ui ) {
	// 			$( "#price-range" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	// 		}
	// 	});
	// 	$( "#price-range" ).val( "$" + $( ".ui-slider" ).slider( "values", 0 ) +
	// 		" - $" + $( ".ui-slider" ).slider( "values", 1 ) );
	// });
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * PDP initialization & stuff: size chart + ajax upsells
 */
jQuery(document).ready(function() {
	// Size Charts
	jQuery('#item-details a.size-charts').live('click', function() {
		var n = window.open(this.href, this.target,
			"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=640,height=480");
			n.focus();
		return false;
	});
});

/**
 * Find the elements to which to attach the cart; these are usually A elements
 */
divinity.cart.adapter.beacons = function() {
		var found = false;
		return jQuery('a').filter(function() {
			if (found) return false;
			if (typeof(this.href) == 'undefined') return false;
			if ((this.href.indexOf('page=cart') > -1 || jQuery(this).attr('id') == 'view-cart') && !this.hash) {
				found = true;
				return true;
				}
			});
		}

divinity.cart.add = function() {

	var t = this, adapter = divinity.cart.adapter, a = adapter.beacons().filter(function(i) {
	return !i;
	});

	// KT: check to make sure that the params are OK
	//

	if ((this.tagName == 'FORM') && (jQuery(this).find('input[name="action"]').filter(':not(:disabled)').val() != 'cart')) {
		return true;
		}

	// jQuery event "ajaxCartAddInit"
	//
	a.trigger('ajaxCartAddInit', adapter);

	// "Before Add to Cart" event
	//
	if (typeof adapter.before_ajax == 'function') {
					if (!adapter.before_ajax(a, 'add')) {
							return false;
							}
		}

	// jQuery event "ajaxCartAddStart"
	//
	a.trigger('ajaxCartAddStart', adapter);

	// prepare the ajax call
	//
	var ajax = {
		"adapter": adapter, // KT: to make it available in the ajax object, e.g. this.adapter
		"url": smarty_vars.rel_html_url + '?page=item&action=cart&template=quickview',
		"type": 'POST',
		"dataType": 'html',
		"error": function() {

			// if there is an error, hide the cart container
			// and follow the cart link (e.g. change the page)
			//
			if (typeof adapter.hide == 'function') {
				adapter.hide(a, 'error.add');
				}
			document.location.href = this.url;
			},

		"success": function(o) {

			var k = jQuery('<div></div>').attr('id','fake');
			k.html(o);

			if (k.find('.error').html()){

				//Chris: only if the items is gift certificate we show the errors on the page
				if(jQuery('#pdp-item-details').hasClass('gift-type')){
					jQuery('#pdp-item-details .ajax-errors').html('<div class="custom-errors">' + k.find('.error').html() + '</div>');
					// hide cart
					adapter.hide(a, 'close');
					delete(k);
					return false;
				} else {
					delete(k);
				}
			}

			// jQuery event "ajaxCartAddSuccess"
			//
			a.trigger('ajaxCartAddSuccess', this, o);

			if (typeof adapter.before_show == 'function') {
				adapter.before_show(a, 'add');
				}

			// jQuery event "ajaxCartAddExecute"
			//
			a.trigger('ajaxCartAddExecute', this, o);

			adapter.show(o, a, 'add');

			// jQuery event "ajaxCartAddAfter"
			//
			a.trigger('ajaxCartAddAfter', this);
			}
		};

	// the operation might be triggered not just by a link,
	// but also by a form or if called the form directly
	//
	switch(true) {

		// Link
		//
		case (this.tagName == 'A'):
			ajax.url = smarty_vars.rel_html_url + t.search;
			ajax.data = (parse_url(t.href)).params;
			break;

		// Form
		//
		case (this.tagName == 'FORM'):
			ajax.data = jQuery(this).serialize();
			break;

		// direct call
		//
		case (this == window):
			ajax.data = skus;
			ajax.url += '&' + skus;
			break;
		}

	jQuery.ajax(ajax);

	// KT: very important in order to halt the link
	//
	return false;

}



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Quick View Implementation
*/

// Handler for modyfing the content that is going to be rendered by the cart,
// specially for the case when this is a Quick-View
jQuery(document).bind('ajaxBoxHTML', function(e, html, o) {

	// find the form
	//
	var f = jQuery(html).find('form[name^="thumb-form-"]');
	if (!f.length) {
		return false;
	}

	// set up the tip-tip
	//
	f.find('button:submit').tipTip();

	// make sure that submitting the form will submit the cart and close the box
	//
	f.submit(divinity.cart.add);
	f.submit(function () {
		divinity.box.close();
	});

});

// attaching the quick-view ?
//
var start_quickview = (
	smarty_vars.divinity.page == 'category' ||
	smarty_vars.divinity.page == 'search' ||
	smarty_vars.divinity.page == 'seek' ||
	smarty_vars.divinity.page == 'item' ||
	smarty_vars.divinity.page == 'cart' ||
	smarty_vars.divinity.page == 'pinboard' ||
	smarty_vars.divinity.page == 'static' ||

	/* KT: this is the propper way to do this: look at the DOM to see if there are any matching elements */
	jQuery('a.quickview, a.quick-view, .hotspot-qv,.pinboard-qv,div.quickview-overlay h2 a,div.quickview-overlay a,a.add2list,a.bundle-child-qv').length > 0
);

if (start_quickview) jQuery(document).ready(function() {

	var qv = function() {
		var c = jQuery(this).get(0).hash.substr(1).split('/');

		if (smarty_vars.divinity.page == 'cart') {
			jQuery(document).bind('ajaxCartAddSuccess', function () {
				jQuery(location).attr('href', window.location.href);
			});

			jQuery(document).bind('ajaxCartAddAfter', function () {
				jQuery('#shopping-cart-container').html('').addClass('loading');
			});
		}

		// set the color as a selected value
		//
		TC.selected_values = TC.selected_values || {};
		TC.selected_values.color = decodeURIComponent(c[1].toLowerCase());

		divinity.box.open('', {
			'title': '',
			'zIndex': 9999,
			'modal': {
				'position': ['20px']
			},
			'ajax': {
				'url': smarty_vars.rel_html_url
					+ '?page=' + qv_page
					+ '&action=' + qv_action
					+ '&id='+ c[0] +'&template='
					+ (jQuery(this).is('.bundle-child-qv') ? 'bundle-child' : 'quickview')
			},
			'handle_submit': false,
			modal: {
				onShow: function (o) {
					// initialize the parent\child stuff
					//
					if (jQuery.browser.msie) {
						setTimeout(
							function () {jQuery(document).trigger('parentChildAfterInit');},
							500
						);
					} else {
						jQuery(document).trigger('parentChildAfterInit');
					}

					TC.fetch_wishlists();
				}
			}
		});
		return false;
	}, qv_page = 'item', qv_action = 'index';

	// attach the handlers
	//
	jQuery('section.item').each(function() {
		jQuery(this).hover(

			// mouse over
			//
			function() {
				jQuery(this).find('.quickview-overlay').addClass('active').find('a').click(qv);
			},

			// mouse out
			//
			function() {
				jQuery(this).find('.quickview-overlay')
					.removeClass('active')
					.find('a').unbind('click');
			}
		);
	});

	if (smarty_vars.divinity.page == 'cart') {

		if (location.protocol == 'https:') {
			qv_page = 'tea';
			qv_action = 'qv';
		}

		jQuery('body').delegate('.add-upsell-to-cart', 'click', qv);
	}

	// For shop pages
	jQuery('body').delegate('.hotspot-qv', 'click', qv);

	// For pinboard pages
	jQuery('body').delegate('.pinboard-qv', 'click', qv);
	
	// For ensemble pages
	jQuery('body').delegate('.mnm-qv', 'click', qv);

	// For view all pages
	jQuery('#infinite').delegate('div.quickview-overlay h2 a', 'click', qv);

	// For pdp suggestion thumbs
	jQuery('#pdp-item-suggestions').delegate('div.quickview-overlay a', 'click', qv);

	jQuery('body').delegate('a.add2list', 'click', qv);

	jQuery('body').delegate('a.bundle-child-qv', 'click', qv);
	
	jQuery('#pdp-item-recommendations').delegate('div.quickview-overlay h2 a', 'click', qv);

	// similar styles
	//
	jQuery('body').delegate('a.similar-qv', 'click', qv);

});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Shopping Cart Stuff
 */
jQuery(document).ready(function() {

	/* Shortcut method for hinting when there is an ajax error */
	function tc_error() {
		jQuery('#simplemodal-overlay').css('background-color', '#990000');
		setTimeout(function() {
			divinity.box.close();
			jQuery('#simplemodal-overlay').css('background-color', '#000000');
		}, 800);
	}

	// Handle qty dropdowns in order summary sidebar
	//
	jQuery('body').delegate('#shopping-bag-sidebar select[name^="qty["]', 'change', function() {
		divinity.box.loading();
		jQuery.ajax({
			url: smarty_vars.rel_html_url
				+ '?' + jQuery(this).closest('form').serialize(),
			success: function(o) {
				jQuery(location).attr('href', window.location.href);
			}
		});
	});

	// Handle qty dropdowns in the ajax cart
	//
	jQuery('body').delegate('#shopping-bag-popup-items select[name^="qty["]', 'change', function() {
		var form_serialized = jQuery(this.form).serialize();
		jQuery('#shopping-cart-container').html('').addClass('loading');
		if (smarty_vars.divinity.page == 'cart') {
			jQuery(this.form).submit();
			return;
		} else if (smarty_vars.divinity.page == 'checkout' || smarty_vars.divinity.page == 'shipping') {
			divinity.box.loading();
			jQuery.ajax({
				url: smarty_vars.rel_html_url
					+ '?' + form_serialized,
				success: function(o) {
					jQuery(location).attr('href', window.location.href);
				}
			});
			return;
		}
		jQuery.ajax({
			url: smarty_vars.rel_html_url
				+ '?' + form_serialized,
			success: function(o) {
				jQuery('#shopping-cart-container').removeClass('loading');
				jQuery('#shopping-cart-container').html(o);
				if (jQuery.browser.msie) {
					jQuery('#shopping-cart-container').html(innerShiv(o));
				}
				jQuery('#shopping-cart > a').addClass('shopping-cart-ajax');
				jQuery('#shopping-cart-summary').addClass('active');
			}
		});
	});

	// Handle remove links in order summary sidebar
	//
	jQuery('body').delegate('#shopping-bag-sidebar a.cart-remove', 'click', function() {
		divinity.box.loading();
		jQuery.ajax({
			url: this.href,
			success: function(o) {
				jQuery(location).attr('href', window.location.href);
			}
		});
		return false;
	});

	// Handle remove link in the ajax cart
	//
	jQuery('body').delegate('#shopping-bag-popup-items a.ajax-cart-remove', 'click', function() {
		jQuery('#shopping-cart-container').html('').addClass('loading');
		if (smarty_vars.divinity.page == 'cart') {
			jQuery(location).attr('href', this.href);
			return;
		} else if (smarty_vars.divinity.page == 'checkout' || smarty_vars.divinity.page == 'shipping') {
			divinity.box.loading();
			jQuery.ajax({
				url: smarty_vars.rel_html_url
					+ '?' + jQuery(this).closest('form').serialize(),
				success: function(o) {
					jQuery(location).attr('href', window.location.href);
				}
			});
			return false;
		}
		var d = parse_url(this.href);
		jQuery.ajax({
			url: d.relative,
			success: function(o) {
				jQuery('#shopping-cart-container').removeClass('loading');
				jQuery('#shopping-cart-container').html(o);
				if (jQuery.browser.msie) {
					jQuery('#shopping-cart-container').html(innerShiv(o));
				}
				jQuery('#shopping-cart > a').addClass('shopping-cart-ajax');
				jQuery('#shopping-cart-summary').addClass('active');
			}
		});
		return false;
	});

	// Handle the qty dropdowns on cart page
	//
	jQuery('body').delegate('select.cartline_qty', 'change', function() {
		var f = jQuery(this).closest('form');
		f.find('input[name="return_url"]').remove();
		f.submit();
	});

	// Handle edit link in the ajax cart
	//
	jQuery('body').delegate('#shopping-bag-popup-items a.ajax-cart-edit', 'click', function() {
		var c = (this.hash.substr(1)).split('/'), old_qty = c[1],
			cart_line_id = c[0], sku = c[2], add2cart = divinity.cart.add;

		divinity.cart.add = function() {

			var f = jQuery('form[name="thumb-form-other"]');

			jQuery.ajax({
				url: smarty_vars.rel_html_url
					+ '?page=tea&action=checkout_cart_update&id='
					+ jQuery('#simplemodal-container form[name^="thumb-form-"]  input[name="id"]').val()
					+ '&qty=' + jQuery('#simplemodal-container form[name^="thumb-form-"] [name="qty"]').val()
					+ '&c=' + cart_line_id + '&o=' + smarty_vars.divinity.page
					+ '&gift_card_values=' + f.find('[name="gift_card_values"]').val()
                    + '&gift_card_amount=' + f.find('input[name="gift_card_amount"]').val()
                    + '&recipient_name=' + encodeURIComponent(f.find('input[name="recipient_name"]').val())
                    + '&recipient_email=' + encodeURIComponent(f.find('input[name="recipient_email"]').val())
                    + '&sender_name=' + encodeURIComponent(f.find('input[name="sender_name"]').val())
                    + '&gift_message=' + encodeURIComponent(f.find('textarea[name="gift_message"]').val())
                    + '&delivery_date=' + f.find('input[name="delivery_date"]').val()
                    + '&send_to_me=' + f.find('input[name="send_to_me"]:checked').val()
                    + '&gift_card_indicator=' + f.find('input[name="gift_card_indicator"]').val()
					+ '&old=1'
					+ '&template=quickview',
				type: 'POST',
				success: function(o) {

					var k = jQuery('<div></div>').attr('id','fake');
                    k.html(o);

					if (k.find('.error').html()){

                        /** KT: now open the Quick-View */
                         divinity.box.open(o, {

                            modal: {
                                'position': ['20px'],
                                onShow: function () {
									var f = jQuery('#simplemodal-container form[name^="thumb-form-"]'),
										parent_id = f.attr('name').substring(11);
									TC.selected_values = TC.selected_values || {};
									if(mpd[parent_id]){
										for (var id in mpd[parent_id].parent_data) {
											if (mpd[parent_id].parent_data[id].sku == sku) {
												TC.selected_values = {
													color: mpd[parent_id].parent_data[id].color,
													size: mpd[parent_id].parent_data[id].size
												}
											}
										}
									}
                                    if (jQuery.browser.msie) {
                                            setTimeout(
                                                    function () {jQuery.event.trigger('parentChildAfterInit',[f]);},
                                                    500
                                            );
                                    } else {
                                        jQuery.event.trigger("parentChildAfterInit",[f]);
                                    }
                                    jQuery('[name="gift_card_values"]').trigger('change');
                                    jQuery('.error').css({'color':'#ff1800', 'font-size':'14px'});
                                }
                            },

                            handle_submit:false
                        });

                        delete(k);
                        return false;
                    }


					if (smarty_vars.divinity.page == 'cart' || smarty_vars.divinity.page == 'checkout'  || smarty_vars.divinity.page == 'shipping') {
						jQuery('#shopping-cart-container').html('').addClass('loading');
						jQuery(location).attr('href', window.location.href);
						return;
					}
					jQuery('#shopping-cart-container').html(o);
					if (jQuery.browser.msie) {
						jQuery('#shopping-cart-container').html(innerShiv(o));
					}
					jQuery('#shopping-cart > a').addClass('shopping-cart-ajax');
					jQuery('#shopping-cart-summary').addClass('active');
				},
				error: tc_error
			});

			// Restore default behavior
			//
			divinity.cart.add = add2cart;
			delete(add2cart);
			return false;
		}

		divinity.box.open('', {
			modal: {
				'position': ['20px']
			},
			ajax: {
				url: smarty_vars.rel_html_url
					+ '?page=tea&action=checkout_cart_edit&template=quickview&id='
					+ cart_line_id + '&old=' + old_qty + '&sku=' + sku
			},
			modal: {
				onShow: function (o) {
					var f = jQuery('#simplemodal-container form[name^="thumb-form-"]'),
						parent_id = f.attr('name').substring(11);
					TC.selected_values = TC.selected_values || {};

					if(mpd[parent_id]){
						for (var id in mpd[parent_id].parent_data) {
							if (mpd[parent_id].parent_data[id].sku == sku) {
								TC.selected_values = {
									color: mpd[parent_id].parent_data[id].color,
									size: mpd[parent_id].parent_data[id].size
								}
							}
						}
					}

					if (jQuery.browser.msie) {
                             setTimeout(
                                 function () {jQuery(document).trigger('parentChildAfterInit',[f]);},
                                 500
                             );
                         } else {
                             jQuery(document).trigger('parentChildAfterInit',[f]);
                     }

                    jQuery('[name="gift_card_values"]').trigger('change');

				}
			},
			handle_submit: false
		});
		TC.selected_values = {};
		return false;

	});

	// GFC donation
	//
	jQuery('form[name="gfc"] :submit').live('click',function() {
		jQuery(location).attr(
			'href',
			smarty_vars.rel_html_url
			+ '?page=item&action=cart&id='
			+ jQuery('form[name="gfc"] select[name="id"]').val()
			+ '&qty=1&return_url='
			+ jQuery('form[name="gfc"] input[name="return_url"]').val()
		);
		return false;
	});

	// Handle "review before submit" qty update
	//
	jQuery('body').delegate('select.review-qty', 'change', function() {
		divinity.box.loading();
		var f = jQuery(this).closest('form');
		f.find('input[name="page"]').val('cart');
		f.find('input[name="action"]').val('update');
		jQuery.ajax({
			url: smarty_vars.rel_html_url
				+ '?' + jQuery(this).closest('form').serialize(),
			success: function(o) {
				jQuery(location).attr('href', window.location.href);
			}
		});
		return false;
	});

	// Handle "review before submit" remove item
	//
	jQuery('body').delegate('a.review-rm', 'click', function() {
		divinity.box.loading();
		jQuery.ajax({
			url: this.href,
			success: function(o) {
				jQuery(location).attr('href', window.location.href);
			}
		});
		return false;
	});

	/* Ajax-recalculation of the shopping cart */
	var checkout_ajax_target = jQuery('article.sidebar');
	function checkout_ajax(ajax_url, async) {
		if (!ajax_url) {
			return false;
		}

		async = typeof async !== 'undefined' ? async : true;

		divinity.box.loading();
		jQuery.ajax({
			url: smarty_vars.rel_html_url + ajax_url,
			async: async,
			success: function(o) {

				if (smarty_vars.divinity.page == 'checkout' && smarty_vars.divinity.action == 'review'){
                    location.reload(true);
                    return;
                }

				checkout_ajax_target.html(o);

				if (jQuery.browser.msie) {

					checkout_ajax_target.html(innerShiv(o));
				}

				divinity.box.close();
			},
			error: tc_error
		});
	}

        /** KT: promo codes and GCs on payment page */
        jQuery('#promos button, #gifts button').click(function() {
        	if (jQuery(this).data('type') == 'gifts') {
        		TC.is_gift_applied = true;
        	} else {
        		TC.is_gift_applied = false;
        	}

           checkout_ajax(
                '?page=tea&action=promo_or_gift_card&o=checkout&coupon_code='
                + jQuery(this).parent().find("input[type='text']").val());

           // #3591
           jQuery(this).parent().find("input[type='text']").val('');
        });

        jQuery('#promos input, #gifts input').keypress(function (e)
        {
  			if(e.which == 13)
  			{
    			jQuery(this).parent().parent().find("button").trigger('click');

    			return false;
  			}
		});

	/* KT: the function is registered "globally" (to window.*) so it can work out of divinity.box.open() */
	window.remove_cart_line = function(id) {
		checkout_ajax(
			'?page=tea&action=checkout_cart_remove&id=' + id
			);
		}

	// Checkout's shopping bag remove link
	jQuery('.order-summary a.cart-remove').live('click', function() {

		jQuery('#remove_cart_line button').attr('id', 'cart_line_'+this.hash.substr(8));
		jQuery('#remove_cart_line button').attr('name', this.hash.substr(8));
		divinity.box.open(
			jQuery('#remove_cart_line').html(), {
			'title': this.title
			});

		return false;
		});

	// Checkout's shopping bag edit link
	jQuery('a.cart-edit').live('click', function() {
		var c = (this.hash.substr(1)).split('/'), old_qty = c[1], cart_line_id = c[0], sku = c[2];

		/** KT: change the default functionality */
		divinity.cart.add = function() {

			var f = jQuery('form[name="thumb-form-other"]');
            jQuery.ajax({
                url: smarty_vars.rel_html_url
				+ '?page=tea&action=checkout_cart_update&id='
				+ jQuery('form[name^="thumb-form-"]  input[name="id"]').val()
				+ '&qty=' + jQuery('form[name^="thumb-form-"] [name="qty"]').val()
				+ '&c=' + cart_line_id + '&o=' + smarty_vars.divinity.page
				+ '&gift_card_values=' + f.find('[name="gift_card_values"]').val()
                + '&gift_card_amount=' + f.find('input[name="gift_card_amount"]').val()
                + '&recipient_name=' + encodeURIComponent(f.find('input[name="recipient_name"]').val())
                + '&recipient_email=' + encodeURIComponent(f.find('input[name="recipient_email"]').val())
                + '&sender_name=' + encodeURIComponent(f.find('input[name="sender_name"]').val())
                + '&gift_message=' + encodeURIComponent(f.find('textarea[name="gift_message"]').val())
                + '&delivery_date=' + f.find('input[name="delivery_date"]').val()
				+ '&send_to_me=' + f.find('input[name="send_to_me"]:checked').val()
                + '&gift_card_indicator=' + f.find('input[name="gift_card_indicator"]').val()
				+ '&old=1'
				+ '&template=quickview'
                ,
                type: 'POST',
        success: function(o) {
        var k = jQuery('<div></div>').attr('id','fake');
        k.html(o);

        if (jQuery(k).find('.error').html()){
		/** KT: now open the Quick-View */
		divinity.box.open(o, {
			modal: {
				onShow: function (o) {
					var f = jQuery('form[name^="thumb-form-"]'),
						parent_id = f.attr('name').substring(11);
					TC.selected_values = TC.selected_values || {};
					if(mpd[parent_id]){
						for (var id in mpd[parent_id].parent_data) {
							if (mpd[parent_id].parent_data[id].sku == sku) {
								TC.selected_values = {
									color: mpd[parent_id].parent_data[id].color,
									size: mpd[parent_id].parent_data[id].size
								}
							}
						}
					}
					if (jQuery.browser.msie) {
						setTimeout(
							function () {jQuery(document).trigger('parentChildAfterInit');},
							500
						);
					} else {
						jQuery(document).trigger('parentChildAfterInit');
				}
				jQuery('[name="gift_card_values"]').trigger('change');
				}
			},
			handle_submit: false
		});
		delete(k);
		return false;
	}

	    divinity.box.close();
	    if (smarty_vars.divinity.page == 'checkout' && smarty_vars.divinity.action == 'review'){
	        location.reload(true);
	        return;
	    }

	    checkout_ajax_target.html(o);
	    if (jQuery.browser.msie) {

	        checkout_ajax_target.html(innerShiv(o));
	    }

	    divinity.box.close();

	}
	});
        return false;
    }
            /** KT: now open the Quick-View */
        divinity.box.open('', {
            modal: {
                'position': ['20px']
            },
            ajax: {
                url: smarty_vars.rel_html_url
                    + '?page=tea&action=checkout_cart_edit&template=quickview&id='
                    + cart_line_id + '&old=' + old_qty + '&sku=' + sku
            },
            modal: {
                onShow: function () {
					var f = jQuery('form[name^="thumb-form-"]'),
						parent_id = f.attr('name').substring(11);
					TC.selected_values = TC.selected_values || {};

					if(mpd[parent_id]){
						for (var id in mpd[parent_id].parent_data) {
							if (mpd[parent_id].parent_data[id].sku == sku) {
								TC.selected_values = {
									color: mpd[parent_id].parent_data[id].color,
									size: mpd[parent_id].parent_data[id].size
								}
							}
						}
					}

					if (jQuery.browser.msie) {
						setTimeout(function () {
								jQuery(document).trigger('parentChildAfterInit');
							},500);
					} else {
						jQuery(document).trigger('parentChildAfterInit');
					}
					jQuery('[name="gift_card_values"]').trigger('change');

                }
            },
            handle_submit: false
        });
		TC.selected_values = {};
        return false;
});

	// View Cart submit
	if (smarty_vars.divinity.page == 'cart') {

		/** KT: swap this with the whole cart */
		checkout_ajax_target = jQuery('body > div.content-wrapper');

		/**
		*/
		function ie_onchange() {
			if (jQuery.browser.msie) {
				checkout_ajax_target
					.find('tr.item select')
					.bind('propertychange', basket_ajax);
				}
			}

		/**
		*/
		function basket_ajax() {

			var data = jQuery.param(checkout_ajax_target.find('input,select').get());

			divinity.box.loading();
			jQuery.ajax({
				"type": 'POST',
				"url": smarty_vars.rel_html_url,
				"data": data,
				"success" : function(o) {
					divinity.box.close();
					if (jQuery.trim(o)) checkout_ajax_target.html(innerShiv(o));
					ie_onchange();
					if(jQuery(checkout_ajax_target).find('.error').html()) {
						/**/
						var error_and_status = '';
						jQuery(checkout_ajax_target).find('.error').each(function() {
							error_and_status += '<div class="error">' + this.innerHTML + '<\/div>';
							});
						divinity.box.open(error_and_status, {
							'title': 'Error'
							});
						/**/

						jQuery('html,body').animate({"scrollTop": 0}, 1000);
						}
					},
				"error": tc_error
				});
			}

		/* KT: when the qty inputs are changed, recalculate */
		jQuery('tr.item select').live('change', basket_ajax);
		ie_onchange();
	}

}); // end of main document.ready()

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Wisthlist-related operations
 */
jQuery(document).ready(function() {

	// Mark as added to wishlist
	//
	jQuery('body').delegate('a.add-to-wishlist,a.added-to-wishlist', 'click', function () {
		TC.wishlist_link = jQuery(this);
		TC.wishlist_item_hash = this.hash;
	});

	if (smarty_vars.divinity.page == 'item') {
		jQuery('#facebook-stuff-wishlist, #pdp-item-details footer .add-to-wishlist').each(function () {
			jQuery(this).attr(
				'href',
				jQuery(this).attr('href') + location.hash.substr(1).toUpperCase()
			);
		});
	}

	// Fetch & mark wishlist items
	//
	TC.fetch_wishlists();

});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Gift Wrap Functionality
 */
jQuery(document).ready(function() {

	function gift_wrap_options() {
		jQuery('article#giftwrap section > div').hide();
		jQuery('input[name="gift_wrap_message"]').each(function() {
			if (jQuery(this).is(':checked')) {
				jQuery(this).parent().next().show();
			}
		});
	}

	jQuery('.is-this-a-gift').live('click', function() {
		address_id = jQuery(this).attr('address_id');
		//address_jQuery(this).attr('address_id');

		divinity.box.loading();
		divinity.box.open('', {
			'title': 'Gift Wrap',
			'modal': {
				'position': ['20px'],
				'onShow': gift_wrap_options
			},
			'ajax': {
				'url': smarty_vars.rel_html_url + '?page=tea&action=gift_options&address_id='+address_id
			}
		});
		return false;
	});

	jQuery('input[name="gift_wrap_message"]').live('click', gift_wrap_options);

});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Shopping Bag: Change Background Color on Shopping Cart Summary
 * Shopping Bag: Autohide functionality after item is added
 *
 */
 
jQuery(document).ready(function() {
	(function() {
		var summary = jQuery('#shopping-cart-summary');
		jQuery('#shopping-cart').delegate('#shopping-cart > a', 'ajaxCartViewStart ajaxCartAddInit', function() {
			summary.addClass('active');
		});
		jQuery('#shopping-cart').delegate('#shopping-cart > a', 'ajaxCartClose', function() {
			summary.removeClass('active');
		});
		jQuery('#shopping-cart').delegate('#shopping-cart > a', 'ajaxCartAddAfter', function() {
			/*var cart = setTimeout(function(){
				divinity.cart.close();
			}, 3000); // Autoclose cart in 3 seconds
			
			jQuery('#shopping-cart').hover(function(event) {
				event.stopPropagation();
				clearTimeout(cart);
			});*/
			jQuery('#main-categories').delegate('a', 'mouseenter', function() {
				divinity.cart.close(); // Close cart when hovering main menu
				jQuery("#shopping-bag").removeClass("status-only");
			});
			jQuery('#closebtn').live('click', function() {
				divinity.cart.close(); // Close cart button
				jQuery("#shopping-bag").removeClass("status-only");
			});
		});
		/*jQuery('#view-cart').live('click', function() {
			jQuery("#shopping-bag-tab").addClass("active");
			divinity.cart.view();
			jQuery("#view-cart div").attr("class", "arrow-down");
			jQuery(this).attr("id","view-cart-close"); // Set so next click will close cart
		});*/
		jQuery('#shopping-bag-tab').on("mouseenter", "#view-cart", function(){
			if (!jQuery('#shopping-bag-popup').length) {
				jQuery("#shopping-bag").removeClass("status-only");
				divinity.cart.view();
			}
		});
		jQuery('#view-cart-close').live('click', function() {
			jQuery('#closebtn').click();
			jQuery(this).attr("id","view-cart"); // Reset back to open cart
		});
		jQuery('#closebtn').live('click', function() {
			divinity.cart.close(); // Close cart button
			jQuery("#view-cart div, #view-cart-close div").attr("class", "arrow-right");
			jQuery("#shopping-bag-tab").removeClass("active");
			jQuery("#shopping-bag").removeClass("status-only");
		});
		jQuery('#shopping-cart').delegate('#shopping-cart-summary h3', 'click', function() {
			window.open(smarty_vars.secure_html_url + 'index.php?page=cart', '_self');
			return false;
		});
	})();
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Checkout Start: Login, Register & Guest Checkout
 */
jQuery(document).ready(function() {
	if (jQuery('.checkout #new').length) {

		var a = jQuery('#get-started button'),
			a1 = jQuery('#get-started-form'),
			b = jQuery('#begin-checkout button'),
			b1 = jQuery('#begin-checkout-form');

		var c = function(A,A1,B,B1) {
			A1.fadeIn('slow', function() {
				A1.find('input[name="first_name"]').focus();
				});
			A.fadeOut('fast');

			B.fadeIn('fast');
			B1.fadeOut('slow');
			return false;
			}

		a.click(function() {
			return c(a, a1, b, b1);
			});
		b.click(function() {
			return c(b, b1, a, a1);
			});
		}
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Fetching just browsed items
 */
jQuery(document).ready(function () {
	if (jQuery('.just-browsed').length) {
		jQuery.ajax({
			type: 'POST',
			url: smarty_vars.rel_html_url,
			data: 'page=tea&action=just_browsed',
			success: function (data) {
				jQuery('.just-browsed').html(data);
				setTimeout(
					function () {
						jQuery('section.just-browsed .jcarousel').jcarousel({});
					},
					1000
				);
			}
		});
	}
});


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Parent/Child customization
 */
jQuery(document).ready(function () {

	var origin_val, radio, span, f, parent_id,
		color, size, child_id, child, zoomer, orig_thickbox_url, orig_image_url;

	// Mouseover/Mouseleave on swatches
	//
	jQuery('form[name^="thumb-form-"] div.pdp-item-details-attributes dl dd ol li label').live({
		mouseenter: function () {
			f = jQuery(this).closest('form');
			parent_id = f.attr('name').substring(11);
			color = f.find('input:radio:checked[name="color"]').val();
			size = jQuery('#' + jQuery(this).attr('for')).val();
			child_id;
			child;
			zoomer = jQuery('a#main-image-a-'+parent_id).length
				? jQuery('a#main-image-a-'+parent_id) : jQuery('a#main-image-qv-'+parent_id);
			radio = jQuery('input[id="' + jQuery(this).attr('for') + '"]');
			if (jQuery(radio).attr('name') == 'size') {
			span = jQuery(this).closest('form').find('div.pdp-item-details-attributes dl dd[id$="'
				+ radio.attr('name')
				+ '"] span.selected-value');
			} else {
			span = jQuery(this).closest('form').find('div.pdp-item-details-attributes dl dt[id$="'
				+ radio.attr('name')
				+ '"] span.selected-value');
			}
			orig_thickbox_url = zoomer.attr('href');
			orig_image_url = zoomer.find('img').attr('src');
			origin_val = span.text();
			if (typeof TC.size_map[radio.val()] === 'undefined') {
				TC.extract_sizes();
			}
			for (child_id in mpd[parent_id].parent_data) {
				child = mpd[parent_id].parent_data[child_id];
				if (child.color == color && child.size == size) {
					if (child.thickbox_image_url) {
						zoomer.attr('href', child.thickbox_image_url);
					}
					if (child.large_image_url) {
						zoomer.find('img').attr('src', child.large_image_url);
					}
				}
			}
			//if(!jQuery(radio).hasClass('disabled')){
			//	span.text(radio.attr('name') == 'size' ? TC.size_map[radio.val()] : radio.val());
			//}
		}, mouseleave: function () {
			if (!radio.parent().is('.selected')) {
				//span.text(origin_val);
				zoomer.attr('href', orig_thickbox_url);
				zoomer.find('img').attr('src', orig_image_url);
			}
			delete origin_val, orig_thickbox_url, orig_image_url, radio, span;
		}
	});

});

/*
* Binds custom functionality after an attribute(color, size, etc..) is changed
*/
jQuery(document).bind('parentChildAfterChangeAttribute', function (event, radio, item_id) {
	var form = jQuery(radio).closest('form'), item, cid;

	if (radio.name == 'color') {
		item = TC.get_item_by_color(item_id, radio.value);

		// show/hide promo teaser
		if(item.promo_teaser)
		{
			form.find('.promo-teaser').text(item.promo_teaser);
			form.find('.promo-teaser').show();
		}
		else
		{
			form.find('.promo-teaser').hide();
		}

		// show/hide promo message
		if(item.promo_message)
		{
			form.find('.promo-message').text(item.promo_message);
			form.find('.promo-message').show();
		}
		else
		{
			form.find('.promo-message').hide();
		}

		if (item.is_new_arrival) {
			form.find('.new-item').show();
		} else {
			form.find('.new-item').hide();
		}

		if(mpd[item_id].show_tea_badge != undefined && item.per_color_qty < 1) {
			form.find('button:submit').hide();
			form.find(
				'#dd-attr-' + item_id + '-size li'
			).removeClass('selected').addClass('disabled');
			form.find('input[name="size"]').attr('disabled', 'disabled');
		}

	}

});

/*
* Binds custom functionality when an attribute(color, size, etc..) is changed
*/
jQuery(document).bind('parentChildChangeAttribute', function (event, radio, item_id) {

	// Change images
	//
	var form = jQuery(radio).closest('form'),
		section = form.closest('section'),
		child_id, item,
		parent_id = form.attr('name').substring(11),
		zoomer = jQuery('a#main-image-a-'+parent_id).length
		? jQuery('a#main-image-a-'+parent_id)
		: jQuery('a#main-image-qv-'+parent_id),
		zoomer_id = zoomer.attr('id'),
		outfit_link = section.find('div.pdp-item-outfit a.see-in-outfit'),
		price_holder = section.find('p:first'),
		wishlist_url;

	form.find('button:submit').show();
	form.find('button:submit').tipTip({defaultPosition: 'top'});

	// reset inventory control
	//
	if (mpd[parent_id].show_tea_badge != undefined) {
		mpd[parent_id].inventory_control = 'in_stock_email';
	}

	if (radio.name == 'color') {
		item = TC.get_item_by_color(item_id, radio.value);

		// set inventory control to hide
		//
		mpd[parent_id].inventory_control = 'hide';
		form.closest('article').find('img.badges').hide();

		if(mpd[parent_id].show_tea_badge != undefined && item.per_color_qty < 1) {

			switch(item.badge) {
				case 'comingsoon':
					form.closest('article').find('.comingsoon-badge').show();
					break;
				case 'unavailable':
					form.closest('article').find('.unavailable-badge').show();
					break;
				default:
					form.closest('article').find('.sold-out-badge').show();
					break;
			}
		}

		if (jQuery('a#main-image-outfit').length) {
			section.find('a')[0].hash = '#' + item.color.toLowerCase();
			section.find('img').attr('src', item.small_image_url);
		} else {

			// Reload "Put It All Together" Items
			//
			jQuery.ajax({
				'url': smarty_vars.rel_html_url
					+ '?page=tea&action=upsell&id='
					+ form.find('input[name="id"]').val()
					+ '&color=' + radio.value
					+ '&cat_url=' + encodeURI(TC.active_category_url),
				'success': function(html) {
					if (html) {
						jQuery('.pdp-item-suggestions-'+parent_id+' ul').html(html);
						jQuery('.pdp-item-suggestions-'+parent_id).show('slow');
					} else {
						jQuery('.pdp-item-suggestions-'+parent_id).hide('slow');
					}
				}
			});

			// Change images
			//
			if (item.thickbox_image_url) {
				zoomer.attr('href', item.thickbox_image_url);
			}
			if (item.large_image_url) {
				zoomer.find('img').attr('src', item.large_image_url);
			}
			jQuery('#pdp-item-gallery-'+parent_id+' ul').html(
				jQuery.browser.msie ?
					innerShiv(item.gallery, false) : item.gallery
			);

			// Reload the CloudZoom
			//
			tea_zoom(
				'#' + zoomer_id + ' img',
				zoomer_id == 'main-image-a-'+parent_id ? 21 : 31
			);
		}

		form.find('.qty-in-stock').removeClass('qty-in-stock').html('');

		outfit_link.css({display: 'none'});
		for (var id in mpd[parent_id].parent_data) {

			var el = form.find('li.swatch-size input[name=size][value="'+ mpd[parent_id].parent_data[id].size +'"]'),
			label = el.prev().find('div');

			if (mpd[parent_id].parent_data[id].color == radio.value) {

				if (
					mpd[parent_id].parent_data[id].store_quantity
					&& mpd[parent_id].parent_data[id].store_quantity <  mpd[parent_id].threshold
				) {
					label.addClass('qty-in-stock').html('only<br />2 left');
				}

				// Change price
				//
				price_holder.addClass('regular-price').html('');
				if (parseInt(mpd[parent_id].parent_data[id]['original']['retail_price'], 10) >
					parseInt(mpd[parent_id].parent_data[id]['original']['store_price'], 10)
				) {
					price_holder.removeClass(
						'regular-price'
					).html(
						'<strike>' + mpd[parent_id].parent_data[id]['retail_price'] + '</strike>'
					);
				}
				// price_holder.append(mpd[parent_id].parent_data[id]['store_price']);
				var schema_price = (Math.round(mpd[parent_id].parent_data[id]['original']['store_price'] * 100) / 100).toFixed(2);
				price_holder.append('<span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="' + schema_price + '">' + schema_price + '</span>');

				// See The Whole Outfit link
				//
				if (mpd[parent_id].parent_data[id].outfit_url) {
					outfit_link.attr(
						'href', mpd[parent_id].parent_data[id].outfit_url
					).css({display: 'block'});
				}
			}
		}

	}

	// Replace size with size_description
	//
	if (jQuery(radio).attr('name') == 'size') {
		if (typeof TC.size_map[radio.value] === 'undefined') {
			TC.extract_sizes();
		}
		form.find('dt#attr-'
			+ item_id + '-' + jQuery(radio).attr('name') + ' span.selected-value'
		).text(TC.size_map[radio.value]);
		form.find('#dd-attr-'
			+ item_id + '-' + jQuery(radio).attr('name') + ' span.selected-value'
		).text(TC.size_map[radio.value]);
	}
});

/*
* Binds custom functionality after child item is changed
*/
jQuery(document).bind('parentChildItemChanged', function (event, radio, child) {
	var outfit_link = jQuery(radio).closest('form').closest('section').find('p.outfit-link a'),
		form = jQuery(radio).closest('form'),
		parent_id = form.attr('name').substring(11),
		section = form.closest('section'),
		price_holder = form.closest('section').find('p:first'),
		zoomer = jQuery('a#main-image-a-'+parent_id).length
			? jQuery('a#main-image-a-'+parent_id) : jQuery('a#main-image-qv-'+parent_id),
		zoomer_id = zoomer.attr('id'), lists_link, sku_chunks = child.sku.split('-');

	if ((lists_link = jQuery(radio.form).find('.add-to-wishlist:hidden')).length) {
		jQuery(radio.form).find('.add-to-wishlist:visible').remove();
		lists_link.show();
	}

	if (jQuery('.store-box').length) {
		section.find('a').filter(function() {
			return this.href.indexOf('page=wishlists') > -1
				&& this.href.indexOf('action=add') > -1;
		}).each(function () {
			jQuery(this).attr(
				'href',
				location.protocol + '//'
				+ location.host + '?'
				+ 'page=wishlists&action=add&id='
				+ child.sku + '#' + sku_chunks[0] + '/' + child.color
			).addClass(
				'add-to-wishlist'
			).removeClass('added-to-wishlist');
		});
		TC.fetch_wishlists();
	}

	if (!jQuery('a#main-image-outfit').length) {

		if (child.thickbox_image_url) {
			zoomer.attr('href', child.thickbox_image_url);
		}
		if (child.large_image_url) {
			zoomer.find('img').attr('src', child.large_image_url);
		}

		jQuery('#pdp-item-gallery-'+parent_id+' ul').html(
			jQuery.browser.msie ?
				innerShiv(child.gallery, false) : child.gallery
		);

		// Reload the CloudZoom
		//
		tea_zoom(
			'#' + zoomer_id + ' img',
			zoomer_id == 'main-image-a-'+parent_id ? 21 : 31
		);

	}

	if (child.store_quantity < 1 && mpd[parent_id].show_tea_badge) {
		form.find('input:submit, button:submit').addClass('disabled');
	}

	// Stock allert
	//
	form.find('p.stock-level').text('');
	if (child.store_quantity  < 5) {
		form.find('p.stock-level').text('Only ' + child.store_quantity + ' left in stock');
	}

	// Store price
	//
	price_holder.addClass('regular-price').html('');
	if (parseInt(child.original.retail_price, 10) > parseInt(child.original.store_price, 10)) {
		price_holder.removeClass(
			'regular-price'
		).html(
			'<strike>' + child.retail_price + '</strike>'
		);
	}
	// price_holder.append(child.store_price);
	var schema_price = (Math.round(child.original.store_price * 100) / 100).toFixed(2);
	price_holder.append('<span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="' + schema_price + '">' + schema_price + '</span>');

});

// Initialize the parent\child stuff inside the provided form
jQuery(document).bind('parentChildAfterInit', function (e, F) {
	var F = arguments[1] || jQuery('form[name^="thumb-form-"]'),
		f = jQuery(F), s = function(what) {
		jQuery(what)
			.attr('checked', 'checked')
			.trigger('change');
	};

	if (jQuery('form[name^="thumb-form-"] .add-to-list-fake').length) {
		jQuery('form[name^="thumb-form-"] .add-to-list-fake').tipTip({defaultPosition: 'top'});
	}

	TC.infant = parse_url(
		TC.cat_referer
			? TC.cat_referer
			: (jQuery('a#main-image-qv').length
				? location.href : TC.active_category_url)
	).file.match(/^baby-/);

	f.each(function() {
		var parent_id = this.name.substring(11);

		if (typeof mpd[parent_id] != 'undefined') {

			jQuery(this).find('button:submit').tipTip({defaultPosition: 'top'});
			TC.biggest_child_id[parent_id] = {};
			TC.smallest_child_id[parent_id] = {};

			if (mpd[parent_id].inventory_control == 'in_stock_email') {
				mpd[parent_id].show_tea_badge = true;
				//mpd[parent_id].inventory_control = 'hide';
			}

			f.find('input[name="color"]').each(function() {
				var i, sortOrder, minSortOrder, maxSortOrder;

				for (i in mpd[parent_id].parent_data) {

					if (mpd[parent_id].parent_data[i].color == this.value) {

						if (
							(sortOrder = parseInt(mpd[parent_id].parent_data[i].sort_order, 10)) < minSortOrder
							|| typeof minSortOrder == 'undefined'
						) {
							minSortOrder = sortOrder;
							TC.biggest_child_id[parent_id][this.value] = i;
						}
						if (
							(sortOrder = parseInt(mpd[parent_id].parent_data[i].sort_order, 10)) > maxSortOrder
							|| typeof maxSortOrder == 'undefined'
						) {
							maxSortOrder = sortOrder;
							TC.smallest_child_id[parent_id][this.value] = i;
						}

					}

				}
				delete(parent_id, i, sortOrder, minSortOrder, maxSortOrder);
			});

		}

	});

	if(jQuery('#outfit-items').length) {
		f.find('input[name="color"]:checked').each(function() {
			s(this);
		});
	}

	if (jQuery('form[name^="thumb-form-"]').length == 1 || jQuery('#simplemodal-container form[name^="thumb-form-"]').length == 1) {
		// try to see what is already selected ?
		//
		if (typeof TC.selected_values !== 'undefined') {
			for (var col in TC.selected_values) {
				f.find('input[name="' + col + '"]').each(function () {
					//if (jQuery(this).val().toLowerCase() == TC.selected_values[col]) {
					//if (jQuery(this).val() == TC.selected_values[col]) {
					if (jQuery(this).val().toLowerCase() == TC.selected_values[col].toLowerCase()) {
						s(this);
					}
				});
			}
		} else if (location.hash.length) {
			f.find('input[name="color"]').each(function () {
				if (jQuery(this).val().toLowerCase() == location.hash.substr(1).toLowerCase()) {
					s(this);
				}
			});
		} else {
			s(f.find('input[name="color"]').get(0));
		}

		// KT: when there is a single child option do go and auto-click it
		//
		var attr_map = {};
		f.find('input[type="radio"]:not(disabled)').each(function(i) {
			if (!attr_map[this.name]) {
				attr_map[this.name] = [];
			}
			attr_map[this.name].push(this);
		});
		for(var i in attr_map) {
			if (attr_map[i].length == 1 && !attr_map[i][0].checked) {
				s(attr_map[i][0]);
			}
		}
	}
});

/*
* Outfit Zoomer?
*/
jQuery(document).ready(function () {
	tea_zoom('#main-image-outfit img');
});

//////////////////////////////////////////////////////////////////////////////////
// Cloud Zoom V1.0.2.5
// (c) 2010 by R Cecco. <http://www.professorcloud.com>
// with enhancements by Philipp Andreas <https://github.com/smurfy/cloud-zoom>
//
// MIT License
//
// Please retain this copyright header in all versions of the software
//////////////////////////////////////////////////////////////////////////////////
!function($){function format(t){for(var o=1;o<arguments.length;o++)t=t.replace("%"+(o-1),arguments[o]);return t}function CloudZoom(t,o){var e,i,s,a,n,r,l,d,u=$("img",t),p=null,c=null,h=null,m=null,f=null,g=null,v=0,x=0,b=0,y=0,z=0,w=0,O=this;setTimeout(function(){if(null===c){var o=t.width();t.parent().append(format('<div style="width:%0px;position:absolute;top:75%;left:%1px;text-align:center" class="cloud-zoom-loading" >Loading...</div>',o/3,o/2-o/6)).find(":last").css("opacity",.5)}},200);var k=function(){null!==g&&(g.remove(),g=null)};this.removeBits=function(){h&&(h.remove(),h=null),m&&(m.remove(),m=null),f&&(f.remove(),f=null),k(),$(".cloud-zoom-loading",t.parent()).remove()},this.destroy=function(){t.data("zoom",null),c&&(c.unbind(),c.remove(),c=null),p&&(p.remove(),p=null),this.removeBits()},this.fadedOut=function(){p&&(p.remove(),p=null),this.removeBits()},this.controlLoop=function(){if(h){var t=r-u.offset().left-.5*a>>0,e=l-u.offset().top-.5*n>>0;0>t?t=0:t>u.outerWidth()-a&&(t=u.outerWidth()-a),0>e?e=0:e>u.outerHeight()-n&&(e=u.outerHeight()-n),h.css({left:t,top:e}),h.css("background-position",-t+"px "+-e+"px"),x=t/u.outerWidth()*s.width>>0,b=e/u.outerHeight()*s.height>>0,z+=(x-z)/o.smoothMove,y+=(b-y)/o.smoothMove,p.css("background-position",-(z>>0)+"px "+(-(y>>0)+"px"))}v=setTimeout(function(){O.controlLoop()},30)},this.init2=function(t,o){w++,1===o&&(s=t),2===w&&this.init()},this.init=function(){$(".cloud-zoom-loading",t.parent()).remove(),c=t.parent().append(format("<div class='mousetrap' style='background-image:url(\""+o.transparentImage+"\");z-index:999;position:absolute;width:%0px;height:%1px;left:%2px;top:%3px;'></div>",u.outerWidth(),u.outerHeight(),0,0)).find(":last"),c.bind("mousemove",this,function(t){r=t.pageX,l=t.pageY}),c.bind("mouseleave",this,function(){return clearTimeout(v),h&&h.fadeOut(299),m&&m.fadeOut(299),f&&f.fadeOut(299),p.fadeOut(300,function(){O.fadedOut()}),!1}),c.bind("mouseenter",this,function(e){r=e.pageX,l=e.pageY,d=e.data,p&&(p.stop(!0,!1),p.remove());var i=o.adjustX,v=o.adjustY,x=u.outerWidth(),b=u.outerHeight(),y=o.zoomWidth,z=o.zoomHeight;"auto"==o.zoomWidth&&(y=x),"auto"==o.zoomHeight&&(z=b);var w=t.parent();switch(o.position){case"top":v-=z;break;case"right":i+=x;break;case"bottom":v+=b;break;case"left":i-=y;break;case"inside":y=x,z=b;break;default:w=$("#"+o.position),w.length?(y=w.innerWidth(),z=w.innerHeight()):(w=t,i+=x,v+=b)}p=w.append(format('<div id="cloud-zoom-big" class="cloud-zoom-big" style="display:none;position:absolute;left:%0px;top:%1px;width:%2px;height:%3px;background-image:url(\'%4\');z-index:99;"></div>',i,v,y,z,s.src)).find(":last"),u.attr("title")&&o.showTitle&&p.append(format('<div class="cloud-zoom-title">%0</div>',u.attr("title"))).find(":last").css("opacity",o.titleOpacity);var O=/(msie) ([\w.]+)/.exec(navigator.userAgent);O&&"msie"==(O[1]||"")&&(O[2]||"0")<7&&(g=$('<iframe frameborder="0" src="#"></iframe>').css({position:"absolute",left:i,top:v,zIndex:99,width:y,height:z}).insertBefore(p)),p.fadeIn(500),h&&(h.remove(),h=null),a=u.outerWidth()/s.width*p.width(),n=u.outerHeight()/s.height*p.height(),h=t.append(format("<div class = 'cloud-zoom-lens' style='display:none;z-index:98;position:absolute;width:%0px;height:%1px;'></div>",a,n)).find(":last"),c.css("cursor",h.css("cursor"));var k=!1;o.tint&&(h.css("background",'url("'+u.attr("src")+'")'),m=t.append(format('<div style="display:none;position:absolute; left:0px; top:0px; width:%0px; height:%1px; background-color:%2;" />',u.outerWidth(),u.outerHeight(),o.tint)).find(":last"),m.css("opacity",o.tintOpacity),k=!0,m.fadeIn(500)),o.softFocus&&(h.css("background",'url("'+u.attr("src")+'")'),f=t.append(format('<div style="position:absolute;display:none;top:2px; left:2px; width:%0px; height:%1px;" />',u.outerWidth()-2,u.outerHeight()-2,o.tint)).find(":last"),f.css("background",'url("'+u.attr("src")+'")'),f.css("opacity",.5),k=!0,f.fadeIn(500)),k||h.css("opacity",o.lensOpacity),"inside"!==o.position&&h.fadeIn(500),d.controlLoop()})},e=new Image,$(e).load(function(){O.init2(this,0)}),e.src=u.attr("src"),i=new Image,$(i).load(function(){O.init2(this,1)}),i.src=t.attr("href")}$(document).ready(function(){$(".cloud-zoom, .cloud-zoom-gallery").CloudZoom()}),$.fn.CloudZoom=function(options){try{document.execCommand("BackgroundImageCache",!1,!0)}catch(e){}return this.each(function(){var relOpts,opts;eval("var	a = {"+$(this).attr("rel")+"}"),relOpts=a,$(this).is(".cloud-zoom")?(opts=$.extend({},$.fn.CloudZoom.defaults,options),opts=$.extend({},opts,relOpts),$(this).css({position:"relative",display:"block"}),$("img",$(this)).css({display:"block"}),!$(this).parent().hasClass("cloud-zoom-wrap")&&opts.useWrapper&&$(this).wrap('<div class="cloud-zoom-wrap"></div>'),$(this).data("zoom",new CloudZoom($(this),opts))):$(this).is(".cloud-zoom-gallery")&&(opts=$.extend({},relOpts,options),$(this).data("relOpts",opts),$(this).bind("click",$(this),function(t){var o=t.data.data("relOpts");return $("#"+o.useZoom).data("zoom").destroy(),$("#"+o.useZoom).attr("href",t.data.attr("href")),$("#"+o.useZoom+" img").attr("src",t.data.data("relOpts").smallImage),$("#"+t.data.data("relOpts").useZoom).CloudZoom(),!1}))}),this},$.fn.CloudZoom.defaults={zoomWidth:"auto",zoomHeight:"auto",position:"right",transparentImage:".",useWrapper:!0,tint:!1,tintOpacity:.5,lensOpacity:.5,softFocus:!1,smoothMove:3,showTitle:!0,titleOpacity:.5,adjustX:100,adjustY:0}}(jQuery);

/* KT: shortcut for creating a zoomer */
function tea_zoom(what, adjust) {
	what = what || (jQuery('#main-image-a img').length
		? '#main-image-a img' : '#main-image-outfit img');
	adjust = adjust || 21;
	jQuery(what).each(function() {
		jQuery.fn.CloudZoom.defaults.adjustX = adjust;
		jQuery(this).parent().attr('rel', '').addClass('cloud-zoom');
		jQuery('.cloud-zoom, .cloud-zoom-gallery').CloudZoom({adjustX:100});
	});
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Tea Collection's Newsletter Sign-Up
 */
jQuery(document).ready(function() {
	jQuery('button.newsletter-subscribe').click(function(event) {
		var error = jQuery('#footer-top-newsletter .error');
		error.hide();
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var emailaddressVal = $("input.newsletter-subscribe").val();

		if(emailaddressVal == '') {
			error.text('Please enter your email address.');
			error.show();
			return false;
		}
		else if(!emailReg.test(emailaddressVal)) {
			error.text('Enter a valid email address.');
			error.show();
			return false;
		}
		jQuery('#subscribe_form').submit(function() {
			jQuery.post(smarty_vars.relative_request_uri, jQuery(this).serialize());
			var status_message = jQuery(this).find('p');
			status_message.text('Thank you!').show();
			setTimeout(function() {
				status_message.fadeOut().text('');
				jQuery('#subscribe_form input').val('');
			}, 3000);
			return false;
		});
	});
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Tea Collection's Checkout Payment Page
 */
if (smarty_vars.divinity.page == 'checkout' && (smarty_vars.divinity.action == 'payment' || smarty_vars.divinity.action == 'payment_do'))  {
	jQuery(document).ready(function() {
		var cc = jQuery('#new-card'), ci = cc.find('input,select');
		jQuery('input[name="pay"]').click(function() {
			if (this.value == 'credit_card') {
				ci.removeAttr('disabled');
				cc.slideDown('fast', function() {
					jQuery('select[name="address_id"]').focus();
				});
			} else {
				ci.attr('disabled', 'disabled');
				cc.slideUp('fast');
			}
		}).filter(':checked').triggerHandler('click');
	});
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Tea Collection's Wallets Page
 */
jQuery(document).ready(function () {
	jQuery('a.delete-card').click(function (e) {
		e.preventDefault();
		if (confirm('Are you sure you want to delete this credit card?')) {
			jQuery(location).attr('href', this.href);
		}
	});
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Tea Collection's Lyris Mailing List Form Validation
 */

 	// form input prefill clear on focus, and reset on blur (if empty)
	function prefillClear(field) {
		if (field.defaultValue==field.value) { field.value = ''; }
		else if (field.value == '') { field.value = field.defaultValue; }
	}

	function emailCheck (emailStr) {
		var emailPat=/^(.+)@(.+)$/;
		var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
		var validChars="\[^\\s" + specialChars + "\]";
		var quotedUser="(\"[^\"]*\")";
		var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
		var atom=validChars + '+';
		var word="(" + atom + "|" + quotedUser + ")";
		var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
		var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");
		var matchArray=emailStr.match(emailPat);
		if (matchArray==null) {
			alert("Email address seems incorrect (check @ and .'s)");
			return false;
		}
		var user=matchArray[1];
		var domain=matchArray[2];
		if (user.match(userPat)==null) {
			alert("The username doesn't seem to be valid.");
			return false;
		}
		var IPArray=domain.match(ipDomainPat);
		if (IPArray!=null) {
			for (var i=1;i<=4;i++) {
				if (IPArray[i]>255) {
					alert("Destination IP address is invalid!");
					return false;
				}
			}
			return true;
		}
		var domainArray=domain.match(domainPat);
		if (domainArray==null) {
			alert("The domain name doesn't seem to be valid.");
			return false;
		}
		var atomPat=new RegExp(atom,"g");
		var domArr=domain.match(atomPat);
		var len=domArr.length;
		if ((domArr[domArr.length-1] != "info") && (domArr[domArr.length-1] != "name") && (domArr[domArr.length-1] != "arpa") && (domArr[domArr.length-1] != "coop") && (domArr[domArr.length-1] != "aero")) {
				if (domArr[domArr.length-1].length<2 || domArr[domArr.length-1].length>3) {
						alert("The address must end in a three-letter domain, or two letter country.");
						return false;
				}
		}
		if (len<2) {
			var errStr="This address is missing a hostname!";
			alert(errStr);
			return false;
		}
		return true;
	}

	function UPTvalidateform(thisform) {
		if (emailCheck(thisform.email.value)) {
			if (document.getElementById('unsubscribe') && !document.getElementById('unsubscribe').checked) {
			} else {
			}
			return false;
		} else {
			return true;
		}
	}

	function UPTvalidateformCat(thisform) {
		if (thisform.val_1.value==""){
		alert("Please enter a value for First Name");
		return(true);}if (thisform.val_2.value==""){
		alert("Please enter a value for Last Name");
		return(true);}if (thisform.val_4.value==""){
		alert("Please enter a value for Address");
		return(true);}if (thisform.val_5.value==""){
		alert("Please enter a value for City");
		return(true);}if (thisform.val_6.selectedIndex==0) {
		alert("Please select a value for State/Province");
		return(true);}if (thisform.val_7.value==""){
		alert("Please enter a value for ZIP/Postal Code");
		return(true);}
		if (emailCheck(thisform.email.value))
		{
			if (document.getElementById('unsubscribe') && !document.getElementById('unsubscribe').checked) {
		    } else {
            }
		return false;
		} else {
		return true;
		}
	}

	function emailCheck2 (emailStr) {
		var emailPat=/^(.+)@(.+)$/;
		var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
		var validChars="\[^\\s" + specialChars + "\]";
		var quotedUser="(\"[^\"]*\")";
		var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
		var atom=validChars + '+';
		var word="(" + atom + "|" + quotedUser + ")";
		var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
		var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");
		var matchArray=emailStr.match(emailPat);
		if (matchArray==null) {
			alert("Email address seems incorrect (check @ and .'s)");
			return false;
		}
		var user=matchArray[1];
		var domain=matchArray[2];
		if (user.match(userPat)==null) {
			alert("The username doesn't seem to be valid.");
			return false;
		}
		var IPArray=domain.match(ipDomainPat);
		if (IPArray!=null) {
			for (var i=1;i<=4;i++) {
				if (IPArray[i]>255) {
					alert("Destination IP address is invalid!");
				return false;
				}
			}
			return true;
		}
		var domainArray=domain.match(domainPat);
		if (domainArray==null) {
			alert("The domain name doesn't seem to be valid.");
			return false;
		}
		var atomPat=new RegExp(atom,"g");
		var domArr=domain.match(atomPat);
		var len=domArr.length;
		if ((domArr[domArr.length-1] != "info") &&
			(domArr[domArr.length-1] != "name") &&
			(domArr[domArr.length-1] != "arpa") &&
			(domArr[domArr.length-1] != "coop") &&
			(domArr[domArr.length-1] != "aero")) {
        if (domArr[domArr.length-1].length<2 ||
            domArr[domArr.length-1].length>3) {
                alert("The address must end in a three-letter domain, or two letter country.");
                return false;
        }
		}
		if (len<2) {
		var errStr="This address is missing a hostname!";
		alert(errStr);
		return false;
		}
		return true;
	}

	function UPTvalidateform2(thisform){
	if ((thisform.val_56833.value!="")&&(thisform.val_56833.value.split('/').length!=3)){
		alert("Please enter a valid date for Child1Birthday\nformat(mm/dd/yy)");
		return(true);}if ((thisform.val_56834.value!="")&&(thisform.val_56834.value.split('/').length!=3)){
		alert("Please enter a valid date for Child2Birthday\nformat(mm/dd/yy)");
		return(true);}if ((thisform.val_56835.value!="")&&(thisform.val_56835.value.split('/').length!=3)){
		alert("Please enter a valid date for Child3Birthday\nformat(mm/dd/yy)");
		return(true);}if ((thisform.val_56836.value!="")&&(thisform.val_56836.value.split('/').length!=3)){
		alert("Please enter a valid date for Child4Birthday\nformat(mm/dd/yy)");
		return(true);}if ((thisform.val_56837.value!="")&&(thisform.val_56837.value.split('/').length!=3)){
		alert("Please enter a valid date for Child5Birthday\nformat(mm/dd/yy)");
		return(true);}
			if (emailCheck2(thisform.email.value))
			{

				if (document.getElementById('unsubscribe') && !document.getElementById('unsubscribe').checked) {
				} else {
				}
			return false;
			}
		else
		{
		return true;
		}
	}



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Review Before Submit Page: Hide the Submit button and show a loading image 
 */
var spinner = function() {
	if(!jQuery(this).next().hasClass('checkout-thank-you')){ //dont trigger this if spinner is already applied
		jQuery('.place-order').hide().after('<p class="checkout-thank-you">Please Wait...</p>');
	}
}
jQuery(document).bind('checkoutPlaceNewOrder', spinner);
jQuery(document).ready(function(){
	jQuery('.place-order').live('click', spinner);
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Outfits Lookbook: Slider/Carousel
 */
jQuery(document).ready(function(){

	(function(jQuery) {
		// This is the function we call to check which items are visible
		function itemVisibleInCallbackBeforeAnimation(carousel, item, idx, state) {
				jQuery(item).addClass('visible');
		    //console.log('Item #' + idx + ' is now visible');
		};

		// This is the function we call to check which items are not visible
		function itemVisibleOutCallbackBeforeAnimation(carousel, item, idx, state) {
			jQuery(item).removeClass('visible');
			//console.log('Item #' + idx + ' is no longer visible');
		}

		// Initialize main carousel
		jQuery("#outfit-thumbs").jcarousel({
			wrap: 'circular',
			'itemVisibleInCallback': {
				'onBeforeAnimation': itemVisibleInCallbackBeforeAnimation // Callback defined above
			},
			'itemVisibleOutCallback': {
				'onBeforeAnimation': itemVisibleOutCallbackBeforeAnimation // Callback defined above
			}
		});

		// Sync the "Shop This Look" and the big image hrefs to the currently active thumb
		// This is called when page is first loaded.
		jQuery(".outfit-link").attr('href', jQuery("#outfit-thumbs li.active a").attr('href'));

		// Custom carousel control buttons around the big image
		jQuery(".carousel-controls").click(function(event) {
			event.preventDefault();

			// Check if the thumb next to the active one is visible and if not, scroll
			// the carousel so that it becomes visible
			if (!jQuery("#outfit-thumbs li.active").next().hasClass('visible')) {
				jQuery(".jcarousel-next").trigger('click');
			}

			// Check if the thumb previous to the active one is visible and if not, scroll
			// the carousel so that it becomes visible
			if (!jQuery("#outfit-thumbs li.active").prev().hasClass('visible')) {
				jQuery(".jcarousel-prev").trigger('click');
			}

			// Trigger the click even on the thumb since the big image and the thumb are in sync
			if (jQuery(this).hasClass('next')) {
				var nextThumbAnchor = jQuery("#outfit-thumbs li.active").next().find('a');
				jQuery(nextThumbAnchor).trigger('outfitThumbClicked');
			} else {
				var prevThumbAnchor = jQuery("#outfit-thumbs li.active").prev().find('a');
				jQuery(prevThumbAnchor).trigger('outfitThumbClicked');
			}
		});

		// Custom event that gets triggered when thumb is clicked or custom controls
		// around the big image are clicked
		jQuery("#outfit-thumbs a").bind('outfitThumbClicked', function(){
			var parent = jQuery(this).parent();
			if (!parent.hasClass('active')) {
				jQuery("#outfit-thumbs li").removeClass('active');
				parent.addClass('active');
				var thumbUrl = jQuery(this).attr('href');
				jQuery(".outfit-link").attr('href', thumbUrl);
				var thumbImageUrl = jQuery(this).find('img').attr('src');
				var largeImageUrl = (thumbImageUrl.replace(/lookbook_thumb/, "lookbook_"));
				jQuery("#outfit-image").attr('src', largeImageUrl);
			}
		});

		// Trigger the thumb custom event defined above
		jQuery("#outfit-thumbs a").click(function(event) {
			event.preventDefault();
			jQuery(this).trigger('outfitThumbClicked');
		});
	})(jQuery);


});

$(function() {

   // back to top button on scroll
    $(window).scroll(function() {
		 if ($(this).scrollTop()) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
    });

});

/**
* Wink functionality
*/
jQuery(document).ready(function() {
	'use strict';
	var img, src, wink;

	jQuery('body').delegate('section.item img', 'mouseenter', function() {
		img = jQuery(this);
		wink = img.data('wink');
		if (wink === undefined) {
			return;
		}
		src = img.attr('src');
		img.attr('src', wink);
	});

	jQuery('body').delegate('section.item img', 'mouseleave', function() {
		if (wink === undefined) {
			return;
		}
		img.attr('src', src);
	});

});

//Changing state to province and zip to postal code
function changeLabels(){

	if(parseInt(jQuery('select[name*="country_id"]').val()) == "37"){

		if(jQuery('select[name*="country_id"]').hasClass("myaccount-country")) {

			jQuery('select[name*="country_id"]').parents("form").find('label[for*="state_id"]').html('Province');
			jQuery('select[name*="country_id"]').parents("form").find('label[for*="zip"]').html('Postal Code');

		} else {

			jQuery('#address1hint').html('Street address, company name, c/o');
			jQuery('select[name*="country_id"]').parents("form").find('label[for*="state_id"]').html('Province*');
			jQuery('select[name*="country_id"]').parents("form").find('label[for*="zip"]').html('Postal Code*');

		}

	}

	if(parseInt(jQuery('select[name*="country_id"]').val()) == "224"){

		if(jQuery('select[name*="country_id"]').hasClass("myaccount-country")) {

			jQuery('select[name*="country_id"]').parents("form").find('label[for*="state_id"]').html('State');
			jQuery('select[name*="country_id"]').parents("form").find('label[for*="zip"]').html('Zip');

		} else {

			jQuery('#address1hint').html('Street address, PO box, company name, c/o');
			jQuery('select[name*="country_id"]').parents("form").find('label[for*="state_id"]').html('State*');
			jQuery('select[name*="country_id"]').parents("form").find('label[for*="zip"]').html('Zip*');

		}

	}

}


function changeStatesSelector()
{
	country_id = parseInt(jQuery('select[name*="country_id"]').val());
	if(country_id == "37")
	{
		jQuery('select[name="state_id"] option:first').text("Select Province");
	}

}

jQuery(document).ready(function() {

	changeLabels();

	jQuery('select[name*="country_id"]').live('change', function(){

		changeLabels();

	})


	jQuery(document).live("ajaxStatesSuccess", function() {
		changeStatesSelector();
	});

});


// when ship to Canada customers have to accept terms
//

// Show errors
function canadaCheck(){
	if (jQuery('#canada-terms-check').length) {
		if(!jQuery('#canada-terms-check').is(":checked")){
			jQuery('.canada-terms-error').show();
		} else {
			jQuery('.canada-terms-error').hide();
		}
	}
}

function canadaClearCart()
{
	jQuery.get(smarty_vars.rel_html_url + '?page=tea_cart&action=shipping_to_canada')
		.done(function (data){
		if (data.trim().length > 0)
		{
			divinity.box.open(data, {
				title: '',
				modal: {
					'position' : ['20px']
				},
				handle_submit: false
			});

		}
	});
}


function confirm_shipping_to_canada()
{
	jQuery.get(smarty_vars.rel_html_url + '?page=tea_cart&action=clean_restricted_items')
		.done(function (data){
		if (data.length > 0)
		{
			window.location.reload();
		}
	});
}

// when placing order, check if the terms are accepted
jQuery('a.place-order').live("click", function () {
	canadaCheck();
});

//When check/uncheck terms, change the "place order" button from active to inactive
jQuery('#canada-terms-check').live('click', function() {

	if(jQuery(this).is(":checked")){

		jQuery('a.place-order').each(function(){
			jQuery(this).removeAttr("style");
			jQuery(this).attr("href", smarty_vars.secure_html_url + "?page=checkout&action=complete");

			var cvv_v = jQuery('input[name=security_code]').val();
			if (typeof cvv_required != 'undefined' && cvv_required){
				divinity.set_cvv();
			}
			jQuery('input[name=security_code]').val(cvv_v);
		})

		canadaClearCart();

	} else {

		jQuery('a.place-order').each(function(){
			jQuery(this).unbind();
			jQuery(this).bind("click", function () {
				canadaCheck();
			});
			jQuery(this).removeAttr("href");
			jQuery(this).attr("style", "cursor: not-allowed");
		})
	}

})

// show/hide promo input box on express checkout page
jQuery('#ec_promo h2, .ec-promo-right, .ec-promo-down').live('click', function(){

	if(jQuery('#ec-promo-hidden').is(":hidden")){

		jQuery('#ec-promo-hidden').slideDown();
		jQuery('.ec-promo-right').hide();
		jQuery('.ec-promo-down').show();

	} else {

		jQuery('#ec-promo-hidden').slideUp();
		jQuery('.ec-promo-down').hide();
		jQuery('.ec-promo-right').show();

	}

});

// put red border on the input if the cvv is wrong
jQuery(document).bind('cvvIncorrect', function (){

	jQuery('.security_code'). css({'border':'2px solid #C91600','outline':'none'});

});

jQuery(document).ready(function() {
	//jQuery(".size-button").click(function() {
		//jQuery(this).find(".size-swatches , .bar").toggle( "slow" );
		//jQuery(this).find(".size-label").text("Size:");
	//});
	jQuery('body').delegate('.size-button input:radio, .size-button .size-button-label', 'click', function(e) {
		//jQuery(this).closest('.size-button').find(".size-swatches , .bar").toggle( "fast" );
		jQuery(this).closest('.size-button').find(".size-label").text("Size:");
	});
});

jQuery(document).ready(function () {
	jQuery('body').on('change', 'input:radio[name="wishlists"]', function () {
		if (this.value == 'new') {
			jQuery('button.ajax-wishlist-btn').removeClass('ajax-wishlist');
		} else {
			jQuery('button.ajax-wishlist-btn').addClass('ajax-wishlist');
		}
	});

	if(smarty_vars.divinity.page == 'cart' && smarty_vars.divinity.action == 'index'){ 
		var cartWishlistLink;
		jQuery('.cart-add-to-wishlist').click(function(){cartWishlistLink = jQuery(this)});
	}

	jQuery('body').on('click', 'button.ajax-wishlist-btn', function (e) {
		if (!jQuery(this).is('.ajax-wishlist')) {
	        jQuery.ajax({
	            url: smarty_vars.rel_html_url,
	            data: 'page=wishlists&action=save_wishlist&wishlist[group]='
	            	+ jQuery('#mk-new-wishlist-title').val(),
	            type: 'POST',
	            success: function (o) {
	            	if(smarty_vars.divinity.page == 'cart' && smarty_vars.divinity.action == 'index'){
	            		cartWishlistLink.addClass('nocache').trigger('click');
	            	} else {
	            		jQuery('.add-to-wishlist').addClass('nocache').trigger('click');
	            	}
	            }
	        });
    	}
	});

});

jQuery(document).ready(function() {

	jQuery('body').on('submit', '.tea-share-list', function(e) {
		var form = jQuery(this);
		e.preventDefault();
		jQuery.ajax({
			url: smarty_vars.rel_html_url,
			data: form.serialize(),
			type: 'POST',
			success: function (o) {
				var input = form.find('input[name="emails"]');
				input.tipTip({
					activation: 'click',
					defaultPosition: 'top',
					content: o
				});
				input.trigger('click');
				setTimeout(
					function () {
						input.unbind('click');
					}, 2500
				);
			}
		});
	});

	jQuery('body').on('click', '.box-ajax-tea', function (e) {
		var a = jQuery(this);
		e.preventDefault();
		jQuery.ajax({
			url: a.attr('href'),
			type: 'GET',
			success: function (o) {
				divinity.box.open(o, {
					handle_submit: false
				});
			}
		});
	});

	jQuery('body').on('submit', '.tea-wl-delete-confirmed, .tea-wl-edit-submitted', function (e) {
		var form = jQuery(this);
		e.preventDefault();
		jQuery.ajax({
			url: smarty_vars.rel_html_url,
			data: form.serialize(),
			type: 'POST',
			success: function (o) {
				var dummy = jQuery('<div></div>').html(o);
				if (dummy.find('.error').length) {
					divinity.box.open(o, {
						handle_submit: false
					});
				} else {
					jQuery('.status-box').html(o);
					divinity.box.close();
				}
			}
		});

	});

	jQuery('body').on('change', '.tea-update-wishlist-items select', function () {
		jQuery(this.form).submit();
	});

});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * megamenu show menus with delay
 */

$(function() {
	jQuery('#mega_menu').children('li').bind('mouseenter',function(){
		jQuery("#closebtn, #popup-member-close").click(); // close cart/user menu when hovering main menu
		jQuery("#shopping-bag-tab, #welcome-member").removeClass("active"); // remove active from tabs in header when hovering main menu
		jQuery("#mega_menu").addClass("hasFocus");
		jQuery('#main-categories ul li').removeClass('selected');
		var currentTab = $(this);
		setTimeout(function(){ 
			if (jQuery("#mega_menu").hasClass("hasFocus")) {	
				jQuery('#main-categories ul li').removeClass('selected');
				jQuery(currentTab).addClass('selected');
			}
		}, 250 );
		return false;
	}).bind('mouseleave',function(){
		jQuery("#mega_menu").removeClass("hasFocus");
		jQuery('#main-categories ul li').removeClass('selected');
	});
});

// for touch devices disable for now
//jQuery(document).ready(function(){
//	jQuery('li.taphover').on("touchstart", function (e) {
//		"use strict"; //satisfy the code inspectors
//		var link = $(this); //preselect the link
//		if (link.hasClass('hover')) {
//			return true;
//		} else {
//			link.addClass("hover");
//			jQuery('li.taphover').not(this).removeClass("hover");
//			e.preventDefault();
//			return false; //extra, and to make sure the function has consistent return points
//		}
//	});
//});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * new top nav tabs
 */
 
    jQuery(document).ready(function() {
		jQuery('#welcome-member span a').click(function() {
			jQuery('div.popup-member').toggle();
			jQuery('#welcome-member').toggleClass("active");
		});
		jQuery('#popup-member-close').click(function() {
			jQuery('div.popup-member').css('display','none');
			jQuery('#welcome-member').removeClass("active");
		});
		// close member menu when click outside of container
		$(document).mouseup(function(e){
			var container = $("#welcome-member");

			if (!container.is(e.target) // if the target of the click isn't the container...
				&& container.has(e.target).length === 0) // ... nor a descendant of the container
			{
				jQuery('div.popup-member').css('display','none');
				jQuery('#welcome-member').removeClass("active");
			}
		});
		// close ajax cart when click outside of container
		$(document).mouseup(function(e){
			var container = $("#shopping-cart-container");

			if (!container.is(e.target) // if the target of the click isn't the container...
				&& container.has(e.target).length === 0) // ... nor a descendant of the container
			{
				jQuery('#closebtn').click();
				jQuery("#shopping-bag-tab").removeClass("active");
			}
		});
    });

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * sticky top nav
 */

	$(function() {
		
		$(window).scroll(function(){
		  var sticky = $('.sticky-header'),
			  scroll = $(window).scrollTop();

		  if (scroll >= 100){
				sticky.addClass('fixed-sticky');
				sticky.css("display","block");
			} else {
				sticky.removeClass('fixed-sticky');
				sticky.css("display","none");
			}
		});

	});
	

//autocomplete
jQuery(document).ready(function(){
    // autocomplete custom styling method
    // @overwrites style_main_block() method 
    // you can put here whatever needed
    if(typeof autocomplete_style !== "undefined"){
        autocomplete_style.style_main_block = function(search_input_width) {
            jQuery('.ui-autocomplete').css('left', jQuery("ul.ui-autocomplete").cssUnit('left')[0] - 6);
            jQuery('.ui-autocomplete').css('width', search_input_width + 42);
        };   
    }

});

jQuery(document).bind('parentChildAfterInit', function () {
	var ul = jQuery('.color-swatches'), elements = {}, colors = [], i;
	if (ul.is(':hidden')) {
		jQuery('.color-swatches li').each(function() {
			var el = jQuery(this),
				color = el.data('color');
			colors.push(color);
			elements[color] = el;
		});
		colors.sort();
		for (i in colors) {
			if (i == 0) {
				continue;
			}
			jQuery(elements[colors[i]]).insertAfter(
				elements[colors[i - 1]]
			);
		}
		ul.show();
	}
});