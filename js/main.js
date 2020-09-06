const header = document.querySelector(`header`)
const menuBtn = document.querySelector(`.menu-btn`)
const navigation = document.querySelector(`.navigation`)
const navLinks = document.querySelectorAll(`.navigation li`)

window.addEventListener(`scroll`, () => header.classList.toggle(`sticky-header`, window.scrollY > 0))

menuBtn.addEventListener(`click`, () => {
    menuBtn.classList.toggle(`open`)
    navigation.classList.toggle(`navigation-active`)

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFadeIn 0.3s ease forwards ${index/4 + 0.3}s`
        }
    });
})