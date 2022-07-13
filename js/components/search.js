// search filter
import { chiefDetailsContainers } from "./profile.js";
const searchInput = document.querySelector('.input-btn');
const rulerName = document.querySelectorAll('.overflow-heading');

searchInput.addEventListener('keyup',()=>{
    for (let i = 0 ; i < chiefDetailsContainers.length ; i++){
       if (rulerName[i].innerText.toLowerCase().includes(searchInput.value.toLowerCase())) {
         chiefDetailsContainers[i].classList.remove('d-none');
       }
       else {
         chiefDetailsContainers[i].classList.add('d-none');
       }
   }
 })
 
