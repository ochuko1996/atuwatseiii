// profile of oba
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

 export { rulersDetailsContainers}