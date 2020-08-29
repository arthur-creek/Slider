document.querySelector('#button').onclick = () => {
  document.querySelector('.modal-simple').classList.add('modal-simple--opened');
};

document.querySelector('.modal-simple__close').onclick = () => {
  document.querySelector('.modal-simple').classList.remove('modal-simple--opened');
};
