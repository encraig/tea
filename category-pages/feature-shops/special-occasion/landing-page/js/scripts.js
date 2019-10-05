$(document).ready(function() {
  //move the banner ad zone category_header above the breadcrumbs
  var categoryHeader = $('.da-rennab-zone[data-zone="category_header"]');
  $('.breadcrumb-wrap').before(categoryHeader);
});