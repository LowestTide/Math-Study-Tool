import { topics } from './data.js';

export const topicSelector = document.querySelector('.js-topic-selector');

let htmlContainer;

// The code below generates the html for the available topics. 

Object.values(topics).forEach( topic => {
    htmlContainer += `
        <option value="${topic}">${topic}</option>
    `
})

topicSelector.innerHTML = htmlContainer;



