var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];
var width = 750;
var position = 0;

var carousel = $('#carousel');
var listImages = $('ul.images');

var listElements = images.map(function (image) {
  var li = $('<li>').addClass('container-li').appendTo(listImages);

  $('<div>').addClass('container-image').css({ backgroundImage: 'url(' + image + ')' }).appendTo(li);

  return li;
});

$('.prev', carousel).on('click', function() {
  position = Math.min(position + width, 0);
  listImages.css({ marginLeft: position });
});

$('.next', carousel).on('click', function() {
  position = Math.max(position - width, -width * (listElements.length - 1));
  listImages.css({ marginLeft: position });
});

// var images = [
//   {
//     id: 12568,
//     src: 'http://morra.space/images/T6xshjKAsuwuisd.jpg',
//     name: '',
//     deacription: 'СТАя'
//   },
//   {
//     id: 12567,
//     src: 'http://morra.space/images/T6xshjKAsuwuisd.jpg',
//     name: '',
//     deacription: 'СВИНЬЯ'
//   },
//   {
//     id: 12566,
//     src: 'http://morra.space/images/T6xshjKAsuwuisd.jpg',
//     name: '',
//     deacription: 'ОГОНЬ'
//   }
// ]
//
// function getPage(id) {
//   fetch('https://morra.space/v1/api/images?id=' + id + '&pageSize=20').then(function (items) {
//     images.push(items);
//   });
// }
//
// getPage(images[images.length-1].id) // id = 12566
