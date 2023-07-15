const swiper = new Swiper(".thumbnail-slider", {
        spaceBetween: 0,
        slidesPerView: 0,
    });

    const swiper2 = new Swiper(".background-slider", {
        effect:"fade",
        loop:true,
        spaceBetween:0,
        thumbs: {
            swiper: swiper,
        },
        keyboard:true,
        autoplay:{
            delay:3500,
            disableOnInteraction:true,
        }
    });


    // Navigation effect on scroll 

    window.addEventListener('scroll', () => {
        const headerEl = document.querySelector('header')

        headerEl.classList.toggle("sticky", window.scrollY > 0)
    })




const openEl = document.querySelector('.open-menu')
const closeEl = document.querySelector('.close-menu')
const modalEl =  document.querySelector('.modal')
openEl.addEventListener('click', () => {
    modalEl.classList.add('active')
})
modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) modalEl.classList.remove('active')
})

closeEl.addEventListener('click', () => {
    modalEl.classList.remove('active')
})


const navigationBar = document.querySelector('.navbar')

const listEls = navigationBar.querySelectorAll('li')

listEls.forEach( li => {
    li.addEventListener('click', (e) => {
        
        modalEl.classList.remove('active')
    })
})