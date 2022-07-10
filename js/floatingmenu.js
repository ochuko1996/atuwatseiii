const menuToggle = document.getElementById("menu-toggle");
const menuSection = document.querySelector('.floating-menu-section');
const menuOpenClose = document.querySelector('.menu-open-close');
const iconOpenClose = document.querySelector('.open-close-icon');

const calltogglemenu = ()=>{
    menuSection.classList.toggle("menu-toggle");
    if(menuToggle.classList.contains("fa-caret-down")){
        menuToggle.classList.remove("fa-caret-down");
        menuToggle.classList.add("fa-caret-up");
    }
    else if(menuToggle.classList.contains("fa-caret-up")){
        menuToggle.classList.remove("fa-caret-up");
        menuToggle.classList.add("fa-caret-down");
    }
}

menuToggle.addEventListener("click", ()=>{
    calltogglemenu();
})

iconOpenClose.addEventListener("click", ()=>{
    calltogglemenu();
})

menuOpenClose.addEventListener("click", ()=>{
    calltogglemenu();
})
