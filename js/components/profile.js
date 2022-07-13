// profile of oba

import {rulingDetails } from "../crest-list.js";

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
