// WEBP-CONVERTER

// var webp = require('webp-converter');
// var fs = require('fs');

//pass input image(.jpeg,.pnp .....) path ,output image(give path where to save and image file name with .webp extension)
//pass option(read  documentation for options)

//cwebp(input,output,option,result_callback)

// webp.cwebp("input.jpg", "output.webp", "-q 80", function(status, error) {
//   //if conversion successful status will be '100'
//   //if conversion fails status will be '101'
//   console.log(status, error);
// });

// var path = 'promos/one-offs/default/images/';
//
// fs.readdir(path, 'utf8', function(e, f) {
//   // console.log(e, f);
//   var images = f;
//   images.forEach(function(val, i) {
//     // console.log(val);
//     var name = val.split('.')[0] + '.webp';
//     // console.log(name);
//     webp.cwebp(path + val, path + name, "-q 80", function(status, error) {
//       // if conversion successful status will be '100'
//       // if conversion fails status will be '101'
//       console.log(status, error);
//     });
//   });
// });


// -------------------------------------------------------------------------------------------

// COMPRESS-IMAGES

var compress_images = require('compress-images')

var INPUT_path_to_your_images = 'mega-menu/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
var OUTPUT_path = 'mega-menu/compress/';

compress_images(INPUT_path_to_your_images, OUTPUT_path, {
    compress_force: false,
    statistic: true,
    autoupdate: true
  },
  false, {
    jpg: {
      engine: 'mozjpeg',
      command: ['-quality', '90']
    }
  }, {
    png: {
      engine: 'pngquant',
      command: ['--quality=20-50']
    }
  }, {
    svg: {
      engine: 'svgo',
      command: '--multipass'
    }
  }, {
    gif: {
      engine: 'gifsicle',
      command: ['--colors', '64', '--use-col=web']
    }
  },
  function(error, completed, statistic) {
    console.log('-------------');
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log('-------------');
  });