// profile of oba
import { rulingDetails } from "../crest-list.js";

const leftSection = document.getElementById('left-down-section');

for (let i = 0; i < rulingDetails.length; i++) {
    const detailParentContainer = document.createElement("div")
    const imageContainer = document.createElement("div")
    const image = document.createElement("img")
    const mainDetails = document.createElement("div")
    const names = document.createElement("h5")
    const title = document.createElement("p")
    const appellation = document.createElement("p")

// appending
leftSection.appendChild(detailParentContainer);
detailParentContainer.appendChild(imageContainer);
detailParentContainer.appendChild(mainDetails);
imageContainer.appendChild(image);
mainDetails.appendChild(names);
mainDetails.appendChild(title);
mainDetails.appendChild(appellation);


// classList
detailParentContainer.classList.add("child-container");
imageContainer.classList.add("logo-2");
image.classList.add("image-2");
mainDetails.classList.add("description");
names.classList.add("overflow-heading");
title.classList.add("description-para");
appellation.classList.add( "d-none")

// setattribute

image.setAttribute("src", rulingDetails[i].image);
names.innerText =  rulingDetails[i].name;
title.innerHTML = rulingDetails[i].title;
appellation.innerHTML = rulingDetails[i].appellation;

}


const chiefDetailsContainers = document.querySelectorAll('.child-container');
const displayName = document.getElementById('display-name');
const displayTitle = document.getElementById('display-title');
const displayAppellation = document.getElementById('display-appellation');
chiefDetailsContainers.forEach((chiefDetailsContainer)=> {
    chiefDetailsContainer.addEventListener('click' , (e)=> {
        const name = e.currentTarget.lastElementChild.firstElementChild;
        const title = name.nextSibling;
        const appellation = title.nextSibling ;

        displayName.innerText = name.textContent ;
        displayTitle.innerText = title.textContent;
        displayAppellation.innerText = appellation.textContent;
        console.log()
    })
})
export {chiefDetailsContainers}
import { profileOfOba } from "../crest-list.js";
const rulingLeadersList = document.getElementById('ruling-leaders-list');

for (let i = 0; i < profileOfOba.length; i++) {
    const rulerDetail = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const detailscontainer = document.createElement('div');
    const rulerName = document.createElement('h5');
    const rulerLifeSpan = document.createElement('p');
    const reign = document.createElement('h5');
    const container = document.createElement('div');
    const reignStart = document.createElement('p');
    const reignEnd = document.createElement('p');
    const biography = document.createElement('p');
 
    // appendChild
    rulingLeadersList.appendChild(rulerDetail);
    rulerDetail.appendChild(imgContainer);
    imgContainer.appendChild(image);
    rulerDetail.appendChild(detailscontainer);
    detailscontainer.appendChild(rulerName);
    detailscontainer.appendChild(rulerLifeSpan);
    detailscontainer.appendChild(reign);
    detailscontainer.appendChild(container);
    container.appendChild(reignStart);
    container.appendChild(reignEnd);
    detailscontainer.appendChild(biography);
 
    // Add classlist
    rulerDetail.classList.add('d-flex' , 'col-12' , 'rulerDetails');
    imgContainer.classList.add('img-container');
    image.classList.add('img-width');
    detailscontainer.classList.add('col-7');
    rulerName.classList.add('text-bold' , 'font-1' , 'rulername');
    rulerLifeSpan.classList.add('p-1' , 'font-2');
    reign.classList.add('text-bold' , 'font-2' , 'p-top-1');
    container.classList.add('d-flex', 'col-12' , 'p-top-1');
    reignStart.classList.add('font-3' , 'm-r-10');
    reignEnd.classList.add('font-3');
    biography.classList.add('d-none');
 
    // setattribute
    image.setAttribute('src' , profileOfOba[i].image);
    rulerName.innerText =  profileOfOba[i].name;
    rulerLifeSpan.innerText =  profileOfOba[i].span;
    reign.innerText =  profileOfOba[i].reign;
    reignStart.innerHTML =  profileOfOba[i].start;
    reignEnd.innerHTML =  profileOfOba[i].end;   
    biography.innerHTML =  profileOfOba[i]. biography;   
 }
 
 const rulersDetailsContainers = document.querySelectorAll('.rulerDetails');
 const imgDisplay = document.getElementById('img-display');
 const nameDisplay = document.getElementById('name-display');
 const rulerLifeSpan = document.getElementById('ruler-life-span');
 const reignStart = document.getElementById('reign-start');
 const reignEnd = document.getElementById('reign-end');
 const rulerBiography = document.getElementById('ruler-biography');


 rulersDetailsContainers.forEach((rulerDetailsContainer)=> {
    rulerDetailsContainer.addEventListener('click' , (e)=>{
       const img = e.currentTarget.firstChild.firstChild;
       const name = e.currentTarget.firstChild.nextSibling.firstChild;
       const lifeSpan = e.currentTarget.firstChild.nextSibling.firstChild.nextSibling;
       const reignstart = e.currentTarget.lastChild.lastChild.previousElementSibling.firstChild;
       const reignend = e.currentTarget.lastChild.lastChild.previousElementSibling.lastChild;
       const biography = e.currentTarget.lastChild.lastChild;
       imgDisplay.setAttribute('src' , img.src);
       nameDisplay.innerText =  name.textContent;
       rulerLifeSpan.innerText =  lifeSpan.textContent;
       reignStart.innerHTML =  reignstart.innerHTML;
       reignEnd.innerHTML =  reignend.innerHTML;
       rulerBiography.innerText = biography.textContent;
    })
 })

 export {rulersDetailsContainers}
