//add the tracking code
var theUrl = window.location.pathname;
theUrl = theUrl.split('/');

if(theUrl[2] == 'asia' || theUrl[2] == 'africa'){
 theUrl = theUrl[3] + ' ' + theUrl[2];
} else {
 theUrl = theUrl[2];
}

$('a, area').attr('data-page', theUrl + ' landing page');
