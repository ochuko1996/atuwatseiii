const hambugerMenu = document.querySelector('.hambuger-menu')
const navPositionStyle = document.querySelector('.nav-position-style')
const arr = [document.querySelector('.hamburger'), document.querySelector('.line')]
const overlay = document.querySelector('.overlay');

arr.forEach(element => {
    element.addEventListener('click', () =>{
        hambugerMenu.classList.toggle('active')
        navPositionStyle.classList.toggle('active')  
        overlay.classList.toggle('active')
    })
});