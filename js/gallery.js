$(document).ready(function(){
    $(function () {
        $('.wrapper__block__gallery').load('header.html')
    })
    $(function () {
        $('.gallery__footer').load('footer.html')
    })
})

let posterImg = document.querySelectorAll('.poster__content');

let objImg = [
    {
        img: "url('img/gallery/photo__gallery-1.png')"
    },
    {
        img: "url('img/gallery/photo__gallery-2.png')"
    },
    {
        img: "url('img/gallery/photo__gallery-3.png')"
    },
    {
        img: "url('img/gallery/photo__gallery-4.png')"
    },
    {
        img: "url('img/gallery/photo__gallery-5.png')"
    },
    {
        img: "url('img/gallery/photo__gallery-6.png')"
    },
    {
        img: "url('img/gallery/photo__gallery-7.png')"
    },
    {
        img: "url('img/gallery/photo__gallery-8.png')"
    },
    {
        img: "url('img/gallery/photo__gallery-9.png')"
    },
    {
        img: "url('img/gallery/photo__gallery-10.png')"
    },
    {
        img: "url('img/gallery/photo__gallery-11.png')"
    },
    {
        img: "url('img/gallery/photo__gallery-12.png')"
    },
]

posterImg.forEach(posterImgEl => {
        posterImgEl.style.background = objImg[posterImgEl.dataset.obj].img;
})