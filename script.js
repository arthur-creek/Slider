var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];
var width = 750;
var position = 0;

var carousel = document.getElementById('carousel');
var listImages = carousel.querySelector('ul.images');

var listElements = images.map(function (image) {
  var li = document.createElement('li');
  li.classList.add('container-li');
  listImages.appendChild(li);

  var containerImage = document.createElement('div');
  containerImage.classList.add('container-image');
  containerImage.style.backgroundImage = 'url(' + image + ')';
  li.appendChild(containerImage);

  return li;
});

carousel.querySelector('.prev').onclick = function() {
  position = Math.min(position + width, 0);
  listImages.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  position = Math.max(position - width, -width * (listElements.length - 1));
  listImages.style.marginLeft = position + 'px';
};

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
