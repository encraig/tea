$(document).ready(function() {

  const content = [{
      pink: 'GREECE',
      blue: 'METAdrasi'
    },
    {
      pink: 'BAJA, MEXICO',
      blue: 'Door of Faith Orphanage'
    },
    {
      pink: 'SaN FRANCISCO, CALIFORNIA',
      blue: 'Homeless Prenatal Program'
    },
    {
      pink: 'NEPAL',
      blue: 'LITTLE SISTERS FUND'
    },
    {
      pink: 'NORTH AMERICA',
      blue: 'RAICES'
    },
    {
      pink: 'ITALY',
      blue: 'Citizens FC tournament'
    },
    {
      pink: 'HAITI',
      blue: 'SAKALA'
    },
    {
      pink: 'PERU',
      blue: 'Asociación Civil Los Pioneros'
    },
    {
      pink: 'INDIA',
      blue: 'Gram Bharati Samiti'
    },
  ];

  var theContent = '';

  const baseUrl = '/mas_assets/media/tea_collection/landing-pages/give-back/2020/0116/v0/';

  $.each(content, function(i, val) {
    var num = i + 1;
    var elem = `<div>
		<img src="${baseUrl}c3-${num}.png" alt="${val.blue}">
		<span>${val.pink}</span>
		<h3>${val.blue}</h3>
		</div>`;
    theContent = theContent + elem;
  });

  $('.values-wrap .c3').append(theContent);

});