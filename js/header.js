let a = document.querySelector('header');
    console.log(a.parentElement.classList);
    if (a.parentElement.classList == 'wrapper__block') {
        document.querySelector('.menu__link').classList.add('active');
    } else if (a.parentElement.classList == 'wrapper__block__poster') {
        document.querySelector('.poster__link').classList.add('active');
    } else if (a.parentElement.classList == 'corporate__header') {
        document.querySelector('.corporate__link').classList.add('active');
    } else if (a.parentElement.classList == 'wrapper__block__gallery') {
        document.querySelector('.gallery__link').classList.add('active');
    }