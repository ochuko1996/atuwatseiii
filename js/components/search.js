// search filter
import { profileOfOba    } from "../crest-list.js";
const searchInput = document.getElementById('search-input');
const rulerName = document.querySelectorAll('.rulerDetails .rulername');

searchInput.addEventListener('keyup',()=>{
    for (let i = 0 ; i < rulersDetailsContainers.length ; i++){
       if (rulerName[i].innerText.toLowerCase().includes(searchInput.value.toLowerCase())) {
          rulersDetailsContainers[i].classList.remove('d-none');
       }
       else {
          rulersDetailsContainers[i].classList.add('d-none');
       }
   }
 })
 