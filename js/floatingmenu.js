
const log = console.log;
const menuToggle = document.getElementById("menu-toggle");
const menuSection = document.querySelector('.floating-menu-section');

menuToggle.addEventListener("click", ()=>{
    menuSection.classList.toggle("menu-toggle");
    if(menuToggle.classList.contains("fa-caret-down")){
        menuToggle.classList.remove("fa-caret-down");
        menuToggle.classList.add("fa-caret-up");
    }
    else if(menuToggle.classList.contains("fa-caret-up")){
        menuToggle.classList.remove("fa-caret-up");
        menuToggle.classList.add("fa-caret-down");
    }
})
