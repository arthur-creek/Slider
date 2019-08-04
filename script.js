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
  console.log('before', position, width);
  position = Math.min(position + width, 0);
  listImages.style.marginLeft = position + 'px';
  console.log('after', position);
};

carousel.querySelector('.next').onclick = function() {
  console.log('before', position, width);
  position = Math.max(position - width, -width * (listElements.length - 1));
  listImages.style.marginLeft = position + 'px';
  console.log('after', position);
};
