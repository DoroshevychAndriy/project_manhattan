const btnClick = document.querySelector('.block__event__btns');
const btnClick1 = document.querySelector('.block__event__button-1');
const btnClick2= document.querySelector('.block__event__button-2');
const ul = document.querySelector('.event__card__items');
const ulLI = document.querySelector('.event__card__two__items');

btnClick.addEventListener('click', (e) => {

    if(e.target.classList === btnClick1.classList){
        e.target.classList.add('event__card');
        btnClick2.classList.remove('event__card');
        ulLI.style.display = 'none';
        ul.style.display = 'flex';   
    } else if(e.target.classList === btnClick2.classList){
        e.target.classList.add('event__card');
        btnClick1.classList.remove('event__card');
        ulLI.style.display = 'flex';
        ul.style.display = 'none';       
    }
})
