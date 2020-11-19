 window.addEventListener('DOMContentLoaded', function() {

  // Появление попапа по нажатию на кнопку
    let modal = document.querySelector('.modal'),
        overlay = document.querySelector('.overlay'),
        button = document.querySelector('.app__add');

    button.addEventListener('click', function() {
        if (modal.classList.contains('modal-active')) {
            modal.classList.remove('modal-active');
            overlay.style.display = 'none';
        } else {
            modal.classList.add('modal-active');
            overlay.style.display = 'block';
        }
    });

 });