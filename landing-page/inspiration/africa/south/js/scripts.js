//the page country
        var theCountry = $('.content-container header h1').attr('data-country');
        // console.log(theCountry);

        //ISSUU
        //variables
        var baseUrl = 'https://api.issuu.com/1_0';
        var k = 'tl93eh3m2g89gui0dbgo374otpywg8sv';
        var s ='juixcxy7dri2nn0lwa6rh3eclyt39wkr';
        var access = 'access=public';
        var a1 = access.replace(/=/g,'');
        var action = 'action=issuu.documents.list';
        var a2 = action.replace(/=/g,'');
        var format = 'format=json';
        var f = format.replace(/=/g,'');
        var pageSize = 'pageSize=';
        var p = pageSize.replace(/=/g,'');
        var sig1 = s+a1+a2+'apiKey'+k+f;
        // console.log(sig1);
        sig1 = $.md5(sig1);
        var issu = 'https://issuu.com/teacollection/docs/';

        //function to output the thumbnails
        var showThumbs = function(){
            var thumbs = $('.these-catalogs ul li');
            // console.log(thumbs[0]);
            if($(thumbs[0]).attr('class') !== 'finished'){
                // console.log('lets go');

                $(thumbs).each(function(j,obj){
                    var url = $(obj).attr('data-name');
                    url = issu + url;
                    url = encodeURIComponent(url);

                    $.get('https://issuu.com/oembed?url='+url+'&iframe=true&format=json', function(data){
                        // console.log('the catalog');
                        console.log(data);

                        //add the thumb
                        $(obj).find('a').prepend('<img src="'+data.thumbnail_url+'" alt="'+data.title+'"/>');

                        //add the iframe
                        $('.issuu').append(data.html);

                        //get the iframe num from src
                        var elem = data.html;
                        var id = $(elem).attr('src').split('#')[1].split('/')[1];

                        //add it to the <a> with the same title
                        var a = $('.these-catalogs ul li a');
                        $.each(a, function(k, link){
                            var title = $(link).attr('data-title');
                            // console.log(title, data.title);
                            //find the match
                            if(title == data.title){
                                //add the src num
                                $(link).attr('data-num', id);

                                if($(window).width() < 737){
                                   //mobile change the href
                                    $(link).attr('href', data.url);
                                    //mobile add target="_blank"
                                    $(link).attr('target','_blank');
                                }
                                
                            }
                        });

                    });

                    $(obj).addClass('finished');

                });

                $('.these-catalogs ul li a').click(function(e){
                    //desktop show the lightbox
                    if($(window).width() > 737){

                    e.preventDefault();
                    // console.log('clicked a');

                    //hide all the iframe
                    $('.issuu iframe').hide();

                    //get the number data-num
                    var num = $(this).attr('data-num');
                    // console.log(num);

                    //show the parent elem
                    $('.issuu').show();

                    //find the iframe
                    var iframe = $('.issuu iframe');
                    $.each(iframe, function(i, val){
                        var src = $(val).attr('src').split('#')[1].split('/')[1];
                        // console.log('iframes');
                        // console.log(num, src);
                        
                        //find the match and show it
                        if(num == src){
                            $(val).show();
                        }
                    });

                    }

                });
            }
        };

        //start the initial get of the catalogs 
        $.get(baseUrl+'?'+access+'&'+action+'&apiKey='+k+'&'+format+'&signature='+sig1, function(data){
                // console.log(data);
                var totalCatalogs = data.rsp._content.result.totalCount;
                var sig2 = s+a1+a2+'apiKey'+k+f+p+totalCatalogs;
                sig2 = $.md5(sig2);

            //get all the catalogs
            $.get(baseUrl+'?'+access+'&'+action+'&apiKey='+k+'&'+format+'&pageSize='+totalCatalogs+'&signature='+sig2, function(data){
                // console.log(data);

                var catalogs = data.rsp._content.result._content;

                // console.log(catalogs);

                //find the catalogs
                $.each(catalogs, function(i,val){

                    // console.log(val.document.description)
                    var country = val.document.description;
                    country = country.split(' ')[0].split('.')[1];
                    console.log(i, country);

                    if(country == 'South'){
                        country = 'Africa';
                    }

                    if(country == theCountry){
                        // console.log('match');
                        // console.log(val);

                        //show .these-catalogs
                        $('.these-catalogs').show();

                        var title = val.document.title;
                        title = title.replace('Tea Collection - ','');
                        title = title.replace(/\(|\)/gi,'');

                        if(!$('.these-catalogs ul').hasClass('finished')){
                            $('.these-catalogs ul').append('<li data-name="'+val.document.name+'" data-desc="'+val.document.description+'"><a href="#iframe" data-title="'+ val.document.title +'"><h4>'+title+'</h4></a></li>');

                        }
            
                    }    

                });

                $('.these-catalogs ul').addClass('finished');

                showThumbs();

            });
        });