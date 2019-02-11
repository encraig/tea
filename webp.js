var webp = require('webp-converter');
var fs = require('fs');

//pass input image(.jpeg,.pnp .....) path ,output image(give path where to save and image file name with .webp extension)
//pass option(read  documentation for options)

//cwebp(input,output,option,result_callback)

// webp.cwebp("input.jpg", "output.webp", "-q 80", function(status, error) {
//   //if conversion successful status will be '100'
//   //if conversion fails status will be '101'
//   console.log(status, error);
// });

fs.readdir('homepage/default/images', 'utf8', function(e, f) {
  // console.log(e, f);
  var images = f;
  images.forEach(function(val, i) {
    // console.log(val);
    var name = val.split('.')[0] + '.webp';
    // console.log(name);
    webp.cwebp('homepage/default/images/' + val, 'homepage/default/images/' + name, "-q 80", function(status, error) {
      // if conversion successful status will be '100'
      // if conversion fails status will be '101'
      console.log(status, error);
    });
  });
});