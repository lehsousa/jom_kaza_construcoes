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



