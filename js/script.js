var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})
window.addEventListener('resize', function() {
    //var altura = window.innerHeight;
    var largura = window.innerWidth

    if (largura < 615) {
        swiper.slidesPerview = 0
        swiper.slidesPerGroup = 0
        console.log(swiper)
    }
})

const navbar = document.querySelector('.navbar')
const menuMobile = document.querySelector('.menu-mobile')
const menuItens = document.querySelectorAll('.menu-itens')

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden'
    document.body.scroll = 'no' // IE
}

function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto'
    document.body.scroll = 'yes' // IE
}

menuMobile.addEventListener('click', () => {
    if (navbar.classList.toggle('active')) {
        unloadScrollBars()
    } else {
        reloadScrollBars()
    }
})

menuItens.forEach(e => {
    e.addEventListener('click', () => {
        navbar.classList.toggle('active')
        reloadScrollBars()
    })
})

const firstCard = document.querySelector('#card-1')
const secondCard = document.querySelector('#card-2')
const thirdCard = document.querySelector('#card-3')

function changeFirstCard() {
    if ((state = true)) {
        firstCard.style.background = '#1d3557'
    } else {
        firstCard.style.background =
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/residencial.webp)'
        firstCard.style.backgroundRepeat = 'no-repeat'
        firstCard.style.backgroundSize = 'cover'
    }
}

function changeSecondCard() {
    secondCard.style.background =
        'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/comercial.webp)'
    secondCard.style.backgroundRepeat = 'no-repeat'
    secondCard.style.backgroundSize = 'cover'
}

function changeThirdCard() {
    thirdCard.style.background =
        'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/industrial.webp)'
    thirdCard.style.backgroundRepeat = 'no-repeat'
    thirdCard.style.backgroundSize = 'cover'
}

let imagens = document.querySelectorAll('.small_img')
let modal = document.querySelector('.modal')
let modalImg = document.querySelector('#modal_img')
let btClose = document.querySelector('#bt_close')
let srcVal = ''

for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', function() {
        srcVal = imagens[i].getAttribute('src')
        modalImg.setAttribute('src', srcVal)
        modal.classList.toggle('modal_active')
    })
}

btClose.addEventListener('click', function() {
    modal.classList.toggle('modal_active')
})