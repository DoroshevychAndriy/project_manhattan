let popUp = document.querySelectorAll('.techrider__popup__content');

popUp.forEach(item => {
    item.addEventListener('click', (e) => {
        if(e.target.classList == 'popup__title'){
            e.currentTarget.querySelector('.techrider__popup__text').classList.toggle('hidden');
            e.currentTarget.classList.toggle('popup__back');
        }
    })
})
