$(document).ready(function(){
    $(function () {
        $('.wrapper__block__poster').load('header.html')
    })
    $(function () {
        $('.poster__footer').load('footer.html')
    })
})



let posterImg = document.querySelectorAll('.poster__content');
let objImg = [
    {
        img: "url('img/afisha/afisha-photo_1.png')"
    },
    {
        img: "url(img/afisha/afisha-photo_2.png)"
    },
    {
        img: "url(img/afisha/afisha-photo_3.png)"
    },
    {
        img: "url(img/afisha/afisha-photo_4.png)"
    },
    {
        img: "url(img/afisha/afisha-photo_5.png)"
    },
    {
        img: "url(img/afisha/afisha-photo_6.png)"
    },
    {
        img: "url(img/afisha/afisha-photo_7.png)"
    },
    {
        img: "url(img/afisha/afisha-photo_8.png)"
    },
    {
        img: "url(img/afisha/afisha-photo_9.png)"
    },
    {
        img: "url(img/afisha/afisha-photo_10.png)"
    },
    {
        img: "url(img/afisha/afisha-photo_11.png)"
    },
    {
        img: "url(img/afisha/afisha-photo_12.png)"
    },
]

posterImg.forEach(posterImgEl => {
        posterImgEl.style.background = objImg[posterImgEl.dataset.obj].img;
})