
// set gallery slider var accessible in global scope
var itemImagesSLider;

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
* Cache child items per parent and attribute value
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

//
//
////Script for the category page
//
jQuery(document).ready(function(){
    jQuery('.cat-level-two').hide();
    jQuery('.cat-level-three').hide();
    jQuery('.cat-level-one-arrow-down').hide();
    jQuery('.cat-level-two-minus').hide();
    
    jQuery('.show-cat-level-two').click(function(){
        if (jQuery(this).next().is(':hidden'))
        {   
            jQuery('.show-cat-level-two').find('.cat-level-one-arrow-down').hide();
            jQuery('.show-cat-level-two').find('.cat-level-one-arrow').show();
            jQuery('.cat-level-two').hide();
            jQuery(this).find('.cat-level-one-arrow').hide();
            jQuery(this).find('.cat-level-one-arrow-down').show();
            jQuery(this).next().slideDown('slow');
            //jQuery(this).next().focus();
            jQuery(this)[0].scrollIntoView();
        } else {
            jQuery(this).find('.cat-level-one-arrow-down').hide();
            jQuery(this).find('.cat-level-one-arrow').show();
            jQuery(this).next().slideUp('slow');
            jQuery("#Girl")[0].scrollIntoView();
        }
                    
    })
    jQuery('.show-cat-level-three').click(function(){
        if (jQuery(this).next().is(':hidden'))
        {   
            jQuery('.show-cat-level-three').find('.cat-level-two-minus').hide();
            jQuery('.show-cat-level-three').find('.cat-level-two-plus').show();
            jQuery('.cat-level-three').hide();
            jQuery(this).find('.cat-level-two-plus').hide();
            jQuery(this).find('.cat-level-two-minus').show();
            jQuery(this).next().slideDown('slow');
            //jQuery(this).next().focus();
            jQuery(this).parent().parent().prev()[0].scrollIntoView();
        } else {
            jQuery(this).find('.cat-level-two-minus').hide();
            jQuery(this).find('.cat-level-two-plus').show();
            jQuery(this).next().slideUp('slow');
            jQuery(this).parent().parent().prev()[0].scrollIntoView();
            
            
        }
                    
    })
}) 

// Pricavy Policy 
//
jQuery(document).ready(function(){
    jQuery('.section-content').hide();
    jQuery(".section-heading span .arrow-down").hide();
        
    jQuery('.section-heading').click(function() {
        if (jQuery(this).next().is(":hidden")){
            jQuery('.section-content').hide();
            jQuery(".section-heading span .arrow-down").hide();
            jQuery(".section-heading span .arrow-right").show();
            jQuery('.section-content').parent().css({
                'background-color' : '#fafaf6', 
                'height' : '30px'
            });
            jQuery(this).find(".arrow-right").hide();
            jQuery(this).find(".arrow-down").show();
            jQuery(this).parent().css({
                'background-color' : '#f4ece2', 
                'height' : 'auto'
            });
            jQuery(this).next().slideDown("fast");
        } else {
            jQuery(this).find(".arrow-down").hide();
            jQuery(this).find(".arrow-right").show();
            jQuery(this).next().hide();
            jQuery(this).parent().css({
                'background-color' : '#fafaf6', 
                'height' : '30px'
            });
        }
    })
        
        
});
    
    
      
// Choose payment method section  
//

jQuery(document).ready(function(){
      
    jQuery('.payment-heading').click(function() {
	
		var $content = jQuery(this).parent().find('.payment-content');
		var $arrowup = jQuery(this).parent().find('.arrow-up');
		var $arrowdown = jQuery(this).parent().find('.arrow-down');
		jQuery(".arrow-up").not($arrowup).hide();
		jQuery(".arrow-down").not($arrowdown).show();
		jQuery(".payment-content").not($content).hide();
		
        if (jQuery(this).next().is(":hidden")){
            jQuery(this).find(".arrow-down").hide();
            jQuery(this).find(".arrow-up").show();
            jQuery(this).parent().css({'height' : 'auto'});
            jQuery(this).next().slideDown("fast");
        } else {
            jQuery(this).find(".arrow-up").hide();
            jQuery(this).find(".arrow-down").show();
            jQuery(this).next().hide();
        }
		
    })
     
   //jQuery('.payment-heading:first').trigger('click');    

   if(typeof jQuery('.promo-messages') != 'undefined' && jQuery('.promo-messages').length) {
        jQuery('.promo-messages').each(function(){
            if(jQuery(this).text().trim() != '') {
               jQuery(this).parents('.navigation-box').find('.payment-heading').trigger('click');
            }
        })
   }
        
});

// Review hide/show
//

jQuery(document).ready(function(){
      
    jQuery('body').on('click', '.review-heading', function() {
        if (jQuery(this).next().is(":hidden")){
            jQuery(this).addClass("open");
			jQuery(this).find(".arrow-down").hide();
            jQuery(this).find(".arrow-up").show();
            jQuery(this).parent().css({
                'height' : 'auto'
            });
            jQuery(this).next().slideDown("fast");
        } else {
			jQuery(this).removeClass("open");
            jQuery(this).find(".arrow-up").hide();
            jQuery(this).find(".arrow-down").show();
            jQuery(this).next().hide();
        }
    })
    
});
 
 
// Choose credit card
//
jQuery(document).ready(function(){
    // On page load hide all security code boxes 
    //
    jQuery('.security-code-box').hide();
    // Disable the security code inputs bc we may have more the one card
    //
    jQuery('.security-code-box input').attr('disabled','disabled');
    // Handles the click of the cc radio
    jQuery('.show-sc').click(function(){
        // First hide all the security code boxes bc we may have few cards
        //
        jQuery('.security-code-box').hide();
        // Disable the input so it is not sended on submit
        //
        jQuery('.security-code-box input').attr('disabled','disabled');
        // Hide new card form
        //
        jQuery('#new-card-box').hide();
        // Disable inputs and selects in that form so they are not sent with submit
        // 
        jQuery('#new-card-box').find('input').attr('disabled','disabled');
        jQuery('#new-card-box').find('select').attr('disabled','disabled');
        // Show the security box which is after the clicked radio
        //
        jQuery(this).next().next().next().slideDown();
        // Remove the disabled attribute of the security code input
        jQuery(this).next().next().next().children('input').attr('disabled',false);
    });
    // Handles the click on a new credit card radio
    //
    jQuery('#pay_credit_card').click(function(){
        // First hide all the security code boxes bc we may have few cards
        //
        jQuery('.security-code-box').hide();
        // Disable the input so it is not sended on submit
        //
        jQuery('.security-code-box input').attr('disabled','disabled');
        // Remove the disabled attribute for all the inputs and selects in the new cc form
        //
        jQuery('#new-card-box').find('input').attr('disabled',false);
        jQuery('#new-card-box').find('select').attr('disabled',false);
        // Show it with style :)
        //
        jQuery('#new-card-box').slideDown();
    });
});  

//Size chart show/hide
//

jQuery(document).ready(function(){
    jQuery('#size-chart').hide();
    //jQuery('#size-chart #girl-chart').hide();
	//jQuery('#size-chart #boy-chart').hide();
    //jQuery('#size-chart #newborn-chart').hide();
    //jQuery('#size-chart #shoes-chart').hide();
    
    jQuery('#open-size-chart').click(function(){
        if (jQuery('#size-chart').is(":hidden")){
            jQuery('#size-chart').slideDown();
            jQuery("#open-size-chart").css("display","none");
        } else {
            jQuery('#size-chart').slideUp();
			jQuery("#open-size-chart").css("display","block");
        }
    })
    jQuery('#girl-link').click(function(){
        jQuery('.chart-nav-link').removeClass('selected');
        jQuery(this).addClass('selected');
        jQuery('#size-chart #boy-chart').hide();
        jQuery('#size-chart #newborn-chart').hide();
		jQuery('#size-chart #shoes-chart').hide();
        jQuery('#size-chart #girl-chart').show();
        jQuery('dl.size-section').css({
            //'height':'450px'
        });
    })
    jQuery('#boy-link').click(function(){
        jQuery('.chart-nav-link').removeClass('selected');
        jQuery(this).addClass('selected');
        jQuery('#size-chart #girl-chart').hide();
        jQuery('#size-chart #newborn-chart').hide();
		jQuery('#size-chart #shoes-chart').hide();
        jQuery('#size-chart #boy-chart').show();
        jQuery('dl.size-section').css({
            //'height':'450px'
        });
    })
    jQuery('#newborn-link').click(function(){
        jQuery('.chart-nav-link').removeClass('selected');
        jQuery(this).addClass('selected');
        jQuery('#size-chart #girl-chart').hide();
        jQuery('#size-chart #boy-chart').hide();
		jQuery('#size-chart #shoes-chart').hide();
        jQuery('#size-chart #newborn-chart').show();
        jQuery('dl.size-section').css({
            //'height':'450px'
        });
    })
    jQuery('#shoes-link').click(function(){
        jQuery('.chart-nav-link').removeClass('selected');
        jQuery(this).addClass('selected');
        jQuery('#size-chart #girl-chart').hide();
        jQuery('#size-chart #boy-chart').hide();
		jQuery('#size-chart #newborn-chart').hide();
        jQuery('#size-chart #shoes-chart').show();
        jQuery('dl.size-section').css({
            //'height':'685px'
        });
    })
    
    
    
})

jQuery(document).ready(function(){
    var checkout_ajax_target = jQuery('#something-hidden');

    function checkout_ajax(ajax_url) {
        if (!ajax_url) {
            return false;
        }
        divinity.box.loading();
        jQuery.ajax({
            url: smarty_vars.rel_html_url + ajax_url,
            success: function(o) {
                checkout_ajax_target.html(o);

                if (jQuery.browser.msie) {
					
                    checkout_ajax_target.html(innerShiv(o));	
                }

                divinity.box.close();
                
            }//,
        //error: tc_error
        });
    }

    /** KT: promo codes and GCs on payment page */
    jQuery('.js-gc-btn, .js-promo-btn').click(function() {

        var _this = jQuery(this),
            gift = jQuery(this).hasClass('js-gc-btn') ? true : false;
            wrap = _this.closest('.js-gc-promo-box');
            field = wrap.find('input[type=text]'),
            messagesBox = wrap.find('.promo-messages');
            ajax_url = '?page=tea&action=promo_or_gift_card&o=checkout&coupon_code=' + field.val();

        if(field.val() == ''){
            messagesBox.html('<div class="error">Please enter code.</div>');
            field.focus();
            return false;
        }

        divinity.box.loading();

        jQuery.ajax({
            url: smarty_vars.rel_html_url + ajax_url,
            success: function(o) {
                o = '<script>gift = '+ gift +';</script>' + o;
                messagesBox.html(o);
                if (jQuery.browser.msie) {
                    messagesBox.html(innerShiv(o));    
                }
                if (messagesBox.find('.error').length == 0){
                    field.val('');
                }
                divinity.box.close();
            }
        });
    
    });
        
    jQuery('.js-gc-input, .js-promo-input').keypress(function (e){
        if(e.which == 13) {
            jQuery(this).next().trigger('click');
            return false;
        }
    });

    // GFC donation
	//
	jQuery('form[name="gfc"]').submit(function() {
		jQuery(location).attr(
			'href',
			smarty_vars.rel_html_url
			+ '?page=item&action=cart&id='
			+ jQuery('form[name="gfc"] input[name="donation"]:checked').val()
			+ '&qty=1&return_url='
			+ jQuery('form[name="gfc"] input[name="return_url"]').val()
		);
                 
		return false;
	});

})

/*
* Binds custom functionality after an attribute(color, size, etc..) is changed
*/
jQuery(document).bind('parentChildAfterChangeAttribute', function (event, radio, item_id) {
    var form = jQuery(radio).closest('form'), item;

    if (radio.name == 'color') {
        item = TC.get_item_by_color(item_id, radio.value);
        
        // show/hide promo teaser
		if(item.promo_teaser) 
		{
			form.find('div.promo-teaser').text(item.promo_teaser);
			form.find('div.promo-teaser').show();
		} 
		else 
		{
			form.find('div.promo-teaser').hide();
		}
		
		// show/hide promo message
		if(item.promo_message) 
		{
			form.find('span.promo-message').text(item.promo_message);
			form.find('span.promo-message').show();
		} 
		else 
		{
			form.find('.promo-message').hide();
		}

        if(mpd[item_id].show_tea_badge != undefined && item.per_color_qty < 1) {
            form.find('input:submit').hide();
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
		outfit_link = section.find('p.pdp-item-outfit a'),
		price_holder = jQuery('span#price_placeholder'), //section.find('p:first'),
		wishlist_url;

        form.find('input:submit').show();
        //form.find('button:submit').tipTip();

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
        form.find('span.badges').hide();

        if(mpd[parent_id].show_tea_badge != undefined && item.per_color_qty < 1) {

            switch(item.badge) {
                case 'comingsoon':
                    form.find('.comingsoon-badge').show();
                    break;
                case 'unavailable':
                    form.find('.unavailable-badge').show();
                    break;
                default:
                    form.find('.sold-out-badge').show();
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
                    //var slick = jQuery('#lgw');
                    //if (slick.is('.slick-initialized')) {
                    //    slick.slick('unslick');
                    //}
					if (html) {
						jQuery('div[class^="pdp-item-suggestions-"]').html(html);

						jQuery('div[class^="pdp-item-suggestions-"]').show('slow');
					} else {
						jQuery('div[class^="pdp-item-suggestions-"]').hide('slow');
					}
				}
			});

            alt_tag = item.image_title_tag ? item.image_title_tag : item.model;

			jQuery('#imagegallery.slick-initialized').slick('unslick');
            jQuery('#imagegallery').html(
                jQuery.browser.msie ?
                    innerShiv(
                        item.gallery
                            ? item.gallery
                            : '<div><img src="' + item.thickbox_image_url
                                + '" alt="' + alt_tag + '" data-fullsize="' + item.original_image_url + '" /></div>',
                        false
                    ) : (item.gallery
                            ? item.gallery
                            : '<div><img src="' + item.thickbox_image_url
                                + '" alt="' + alt_tag + '" data-fullsize="' + item.original_image_url + '" /></div>')
            ).show(
            ).slick({
                adaptiveHeight: true,
                arrows: false,
                dots: true,
                swipeToSlide: true
            }).on('beforeChange init', function(event, slick, currentSlide, nextSlide){
                jQuery('#zoom-img-container').css("display","none");
                jQuery("#zoom").removeClass("clicked");
            });  

		}

		outfit_link.css({display: 'none'});
		for (var id in mpd[parent_id].parent_data) {

			if (mpd[parent_id].parent_data[id].color == radio.value) {

				// Change price
				//
            if (parseInt(mpd[parent_id].parent_data[id]['original']['retail_price'], 10) > parseInt(mpd[parent_id].parent_data[id]['original']['store_price'], 10)) { 
                    price_holder.html(
                        '<span class="old-price">' + mpd[parent_id].parent_data[id]['retail_price'] + '</span> &nbsp; <span class="new-price">'+ mpd[parent_id].parent_data[id]['store_price'] +'</span>'
                    );
                }
                else{
                    price_holder.html(
                        '<span class="price">'+ mpd[parent_id].parent_data[id]['store_price'] +'</span>'
                    );
                }
				
    //             price_holder.addClass('regular-price').html('');
				// if (parseInt(mpd[parent_id].parent_data[id]['original']['retail_price'], 10) >
				// 	parseInt(mpd[parent_id].parent_data[id]['original']['store_price'], 10)
				// ) {
				// 	price_holder.removeClass(
				// 		'regular-price'
				// 	).html(
				// 		'<strike>' + mpd[parent_id].parent_data[id]['retail_price'] + '</strike>'
				// 	);
				// }
				// price_holder.append(mpd[parent_id].parent_data[id]['store_price']);

				// See The Whole Outfit link
				//
				if (mpd[parent_id].parent_data[id].outfit_url) {
					outfit_link.attr(
						'href', mpd[parent_id].parent_data[id].outfit_url
					).css({display: 'inline'});
				}
			}
		}

		// 
		//
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
					+ item.sku + this.hash + item.color
				);
			});
			TC.fetch_wishlists(section);
		}
	}

	
});

/*
* Binds custom functionality after child item is changed
*/
jQuery(document).bind('parentChildItemChanged', function (event, radio, child) {
	var outfit_link = jQuery(radio).closest('form').closest('section').find('p.outfit-link a'),
		form = jQuery(radio).closest('form'),
        parent_id = form.attr('name').substring(11),
		price_holder = jQuery('span#price_placeholder'),
		zoomer = jQuery('a#main-image-a').length
			? jQuery('a#main-image-a') : jQuery('a#main-image-qv'),
		zoomer_id = zoomer.attr('id'), lists_link;

    if ((lists_link = jQuery(radio.form).find('.add-to-wishlist:hidden')).length) {
        jQuery(radio.form).find('.add-to-wishlist:visible').remove();
        lists_link.show();
    }

	if (!jQuery('a#main-image-outfit').length) {

		jQuery('#imagegallery.slick-initialized').slick('unslick');
        jQuery('#imagegallery').html(
            jQuery.browser.msie ?
                innerShiv(
                    child.gallery
                        ? child.gallery
                        : '<div><img src="' + child.thickbox_image_url
                            + '" alt="' + child.model + '" data-fullsize="' + child.original_image_url + '" /></div>',
                    false
                ) : (child.gallery
                        ? child.gallery
                        : '<div><img src="' + child.thickbox_image_url
                            + '" alt="' + child.model + '" data-fullsize="' + child.original_image_url + '" /></div>')
        ).slick({
            adaptiveHeight: true,
            arrows: false,
            dots: true,
            swipeToSlide: true
        }).on('beforeChange init', function(event, slick, currentSlide, nextSlide){
            jQuery('#zoom-img-container').css("display","none");
            jQuery("#zoom").removeClass("clicked");
        });  
               
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
    if (parseInt(child.original.retail_price, 10) > parseInt(child.original.store_price, 10)) {
        price_holder.html(
            '<span class="old-price">' + child.retail_price + '</span> &nbsp; <span class="new-price">'+ child.store_price +'</span>'
        );
    }
    else{
        price_holder.html(
            '<span class="price">'+ child.store_price +'</span>'
        );
    }
	
});

/** TipTip */
(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);

    if (typeof mpd != 'undefined') {
        // Initialize the parent\child stuff inside the provided form
        jQuery(document).bind('parentChildAfterInit', function (e, F) {
        	var F = arguments[1] || jQuery('form[name^="thumb-form-"]'); 
        	var f = jQuery(F), s = function(what) {
        		jQuery(what)
        			.attr('checked', 'checked')
        			.trigger('change');
        	}

            if (jQuery('form[name^="thumb-form-"] .add-to-list-fake').length) {
                jQuery('form[name^="thumb-form-"] .add-to-list-fake').tipTip();
            }

            TC.infant = parse_url(
                TC.cat_referer
                    ? TC.cat_referer
                        : TC.active_category_url
            ).file.match(/^baby-/);

            f.each(function() {
                var parent_id = this.name.substring(11);

                TC.biggest_child_id[parent_id] = {};
                TC.smallest_child_id[parent_id] = {};

                //if (mpd[parent_id].inventory_control == 'in_stock_email') {
				if ((typeof mpd[parent_id] != 'undefined') && (mpd[parent_id].inventory_control == 'in_stock_email')) {
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

            });

        	if (jQuery('form[name^="thumb-form-"]').length == 1) {

        		// try to see what is already selected ?
        		//
        		if (typeof TC.selected_values !== 'undefined') {
        			for (var col in TC.selected_values) {
        				f.find('input[name="' + col + '"]').each(function () {
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
    }

function scrollBody(){
      !pageYOffset && !location.hash && setTimeout(function()
            {
                window.scrollTo(0, 1); 
            },1000);
}

// show hide donation block on checkout review page
  jQuery('.donate-heading').live('click', function(){
	  
        if (jQuery(this).next().is(":hidden")){
            jQuery(this).addClass("open");
			jQuery(this).find(".arrow-down").hide();
            jQuery(this).find(".arrow-up").show();
            jQuery(this).parent().css({
                'height' : 'auto'
            });
            jQuery(this).next().slideDown("fast");
        } else {
			jQuery(this).removeClass("open");
            jQuery(this).find(".arrow-up").hide();
            jQuery(this).find(".arrow-down").show();
            jQuery(this).next().hide();
        }
});

// put red border on the input if the cvv is wrong
jQuery(document).bind('cvvIncorrect', function (){

	jQuery('.security_code'). css({'border':'2px solid #C91600'});

});

//Changing state to province and zip to postal code
function changeLabels(){
	
	if(parseInt(jQuery('select[name*="country_id"]').val()) == "37"){

		jQuery('select[name*="country_id"]').parents("form").find('select[name*="state_id"]').prev().html('Province');
		jQuery('select[name*="country_id"]').parents("form").find('input[name*="zip"]').prev().html('Postal Code');

	}

	if(parseInt(jQuery('select[name*="country_id"]').val()) == "224"){

		jQuery('select[name*="country_id"]').parents("form").find('select[name*="state_id"]').prev().html('State');
		jQuery('select[name*="country_id"]').parents("form").find('input[name*="zip"]').prev().html('Zipcode');
		
	}

}

jQuery(document).ready(function() {
	
	changeLabels();
	
	jQuery('select[name*="country_id"]').live('change', function(){

		changeLabels();

	})
	
});

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
			
			jQuery('.items-to-remove').html(data);
			jQuery('.items-to-remove').show();
			jQuery('.submit-order-section').hide();
//			divinity.box.open(data, {
//				title: '',
//				modal: {
//					'position' : ['200px'],
//					'width'    : ['90%']
//				},
//				handle_submit: false
//			});

		}
	});
}


function confirm_shipping_to_canada()
{
	jQuery.get(smarty_vars.rel_html_url + '?page=tea_cart&action=clean_restricted_items')
		.done(function (data){
		if (data.trim().length > 0) 
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

// Toggle search box
jQuery(document).ready(function(){
	jQuery("#nav_search a").click(function(){
		jQuery("#search-container").toggle();
	}); 
});

// Toggle footer links
jQuery(document).ready(function(){
	jQuery("#footerlinks li span, #footerlinks li div").click(function(){
		jQuery(this).parent().toggleClass("active");
	}); 
});


jQuery(document).ready(function() {
     // Mark as added to wishlist
    //
    jQuery('body').delegate('a.add-to-wishlist,a.added-to-wishlist', 'click', function () {
        TC.wishlist_link = jQuery(this);
        TC.wishlist_item_hash = this.hash;
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

    jQuery('body').on('click', '.tea-share-wl-mobile', function (e) {
        e.preventDefault();
        divinity.box.open(jQuery('.share-list').html(), {
            handle_submit: false
        });
    });

    jQuery('body').on('change', 'input:radio[name="wishlists"]', function () {
        console.log(this);
        if (this.value == 'new') {
            jQuery('button.ajax-wishlist-btn').removeClass('ajax-wishlist');
        } else {
            jQuery('button.ajax-wishlist-btn').addClass('ajax-wishlist');
        }
    });

    jQuery('body').on('click', 'button.ajax-wishlist-btn', function (e) {
        if (!jQuery(this).is('.ajax-wishlist')) {
            jQuery.ajax({
                url: smarty_vars.rel_html_url,
                data: 'page=wishlists&action=save_wishlist&wishlist[group]='
                    + jQuery('#mk-new-wishlist-title').val(),
                type: 'POST',
                success: function (o) {
                    jQuery('.add-to-wishlist').addClass('nocache').trigger('click');
                }
            });
        }
    });

    jQuery('body').on('change', '.tea-update-wishlist-items select', function () {
        jQuery(this.form).submit();
    });

});

jQuery(document).ready(function() {
	// Active dept in hamburger menu
	jQuery('#header .hamburgerNav .hamburgerTopCategory a[href="' + TC.active_category_url + '"]').closest('div').addClass('current');

	// scroll to top
	jQuery('#scroll-to-top').click(function(){
		jQuery('html, body').animate({
			scrollTop: $( '#top-of-page' ).offset().top
			}, 500);
			return false;
	});

	// activate zoom on click
	// jQuery('body').on( "click", "#zoom", function(e) {
	// 	e.preventDefault();
	// 	jQuery('#zoom-img').trigger('zoom.destroy').empty();
				
	// 	if (!jQuery(this).hasClass("clicked")) {
	// 		var zoomurl = jQuery('.bxslider > li.active-slide').not('.bx-clone').find('img').data("fullsize");
					
	// 		jQuery('#zoom-img-container').css("display","block");
	// 		jQuery('.bxslider > li.active-slide').not('.bx-clone').find('img').clone().appendTo( "#zoom-img" );
	// 		jQuery('#zoom-img').zoom({
	// 			url: zoomurl,
	// 			on: 'click',
	// 			callback:function(){
	// 				jQuery(this).click();
 //                    jQuery(this).off('click.zoom'); // prevent from closing on click, use only the zoom btn
 //                    jQuery(document).off('click.zoom'); // prevent from closing on click, use only the zoom btn 
	// 			},
	// 			onZoomOut:function(){
	// 				jQuery('#zoom-img-container').css("display","none");
	// 				jQuery('#zoom-img').trigger('zoom.destroy').empty();
	// 			} 						
	// 		});
	// 		jQuery(this).addClass("clicked");
	// 	} else {
	// 		jQuery('#zoom-img-container').css("display","none");
	// 		jQuery('#zoom-img').trigger('zoom.destroy').empty();
	// 		jQuery(this).removeClass("clicked");
	// 	}
	// });
	// jQuery('body').on( "click", "#imagegallery, #zoom-img-container", function() {
	// 	jQuery("#zoom").click();
	// });

    // activate zoom on click
    jQuery('body').on( "click", "#zoom", function(e) {
        e.preventDefault();

        if (!jQuery(this).hasClass("clicked")) {
             jQuery('#zoom-img-container').css("display","block");
             
            jQuery("#zoom-img").html(jQuery('#imagegallery .slick-active').not('.slick-cloned').find('img').clone());
            jQuery('#zoom-img img').draggable({// 
                containment: [((jQuery('#zoom-img').offset().left + jQuery('#zoom-img').width()) - jQuery('#zoom-img img').width()), 
                              ((jQuery('#zoom-img').offset().top + jQuery('#zoom-img').height()) - jQuery('#zoom-img img').height()), 
                              0,
                              jQuery('#zoom-img').offset().top]
            });

            jQuery('#zoom-img img').css({ //center the image after opening
                "left": (jQuery('#zoom-img').width() / 2) - (jQuery('#zoom-img img').width() / 2),
                "top": (jQuery('#zoom-img').height() / 2) - (jQuery('#zoom-img img').height() / 2)
            })
            
            jQuery(this).addClass("clicked");
        } else {
            jQuery('#zoom-img-container').css("display","none");
            jQuery(this).removeClass("clicked");
        }
    });

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


jQuery(document).ready(function() {

	// Checkout's shopping bag edit link
	jQuery('a.cart-edit').live('click', function() {
		
		jQuery('body').addClass("nav-open"); // add class to stop scrolling of viewport behind quickview
		
		var c = (this.hash.substr(1)).split('/'), old_qty = c[1], cart_line_id = c[0], sku = c[2];

		/** KT: change the default functionality */
		divinity.cart.add = function() {

			var f = jQuery('form[name="thumb-form-other"]');
            jQuery.ajax({
                url: smarty_vars.rel_html_url
				+ '?page=tea&action=checkout_cart_update&id='
				+ jQuery('form[name^="thumb-form-"]  input[name="id"]').val()
				+ '&qty=' + jQuery('form[name^="thumb-form-"] [name="qty"]').val()
				+ '&c=' + cart_line_id + '&o=cart'// + smarty_vars.divinity.page //Chris: (#16746) this can be only triggered from cart page anyway, hardcode as "cart", bc page "item"(the one right after the items is added) was causing issues, bc if the page is different than cart, we apply override "checkout" which in the template only prints coupons scripts.
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
    if (smarty_vars.divinity.page == 'cart' || (smarty_vars.divinity.page == 'item' && smarty_vars.divinity.action == 'cart')) {

        /** KT: swap this with the whole cart */
        checkout_ajax_target = jQuery('#content-wrapper');

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


    // Extend Express checkout core functinality
    // handles express checkout shipping methods as select
    //
    jQuery('body').on('change', '.express_checkout .js-express-checkout-shipping-methods', function(){

        divinity.box.loading();

        jQuery.ajax({
            url: smarty_vars.rel_html_url + '?page=express_checkout&action=change_shipping_method',
            type: 'POST',
            data: jQuery('.express_checkout select').serialize(),
            dataType: 'html',
            success: function(html) {
                jQuery(jQuery('.express_checkout_app').get(0)).html(html);
                divinity.box.close();
            }
        });         
    });

    jQuery('body').on('click','.js-guest-create', function(e){
        var _this = jQuery(this);
            form = _this.closest('form');
        form.find('input[name="password2"]').val(form.find('input[name="password"]').val());
    });
	
	// only numbers when paste to phone input field
	jQuery('input[name="phone"],input[name="cc_phone"]').on('input', function(e){
		if (/\D/g.test(this.value)){
			// Filter non-digits from input value.
			this.value = this.value.replace(/\D/g, '');
		}
	});
	
    // show the subscribe box after delay
    setTimeout(function(){
        jQuery('.top-subscribe').slideDown('1000');
    },2000);
	
    // close top subscribe 
    jQuery('body').on('click', '.top-subscribe .close', function(){
        jQuery('.top-subscribe').remove();
    });

});

// before the email acquisition is loaded
jQuery(document).bind('beforeEmailAcquisitionCheck', function (event) {
    var show = function() {
        jQuery.ajax({
            url: smarty_vars.rel_html_url
                + '?page=email_acquisition_popup',
            data: jQuery(this).serialize(),
            success: function(o) {
                jQuery('#tea-promo-subscribe').html(o);
            }
        });
    };

    if (!jQuery.cookie('uc-ea')) {
        delay = parseInt(divinity.email_acquisition_popup_delay, 10);
        jQuery.cookie('uc-ea', 1);
        if (delay) {
            setTimeout(
                show,
                (isNaN(delay) ? 0 : delay) * 1000
            );
        } else {
            show();
        }
    }
});

// when the acquisition is submitted successfully 
jQuery(document).bind('emailAcquisitionSubmitSuccess', function (event) {
    jQuery('#form-container').html( "<span class='success'>Tea is on the way. Check your inbox for an email confirmation.</span>" );
	// hide the subscribe box
	setTimeout(function(){
        jQuery('#tea-promo-subscribe').slideUp();
    },4000);
    
});