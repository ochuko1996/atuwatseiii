let slides = document.querySelectorAll(".carouselImg");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let counter = 0;

const hideAll = ()=>{
    for(let i=0; i<slides.length; i++) {    
        slides[i].classList.add("hideImg")
    }
}

const showCurrent = (slideNum)=>{
    slides[slideNum].classList.remove("hideImg")
}

const nextCounter = ()=>{
    if(counter == slides.length-1){
        counter = 0;
    }else{
        counter++
    }
}    

const prevCounter = ()=>{
    if(counter == 0){
        counter = slides.length-1;
    }else{
        counter--
    }
}    

const showPrevSlider = ()=>{
    hideAll()
    showCurrent(counter)
    prevCounter()
}

const showNextSlider = ()=>{
    hideAll()
    showCurrent(counter)
    nextCounter()
}

const showSlider = ()=>{
    showNextSlider()
}

next.addEventListener("click", ()=>{
    showNextSlider()
})

prev.addEventListener("click", ()=>{
    showPrevSlider()
})


showNextSlider()

setInterval(()=>{
    showSlider()
}, 7000);



