import { topics } from './data.js';

export const topicSelector = document.querySelector('.js-topic-selector');

let htmlContainer = '<option value="">Select a topic...</option>';

Object.entries(topics).forEach(([key, label]) => {
    htmlContainer += `<option value="${label}">${label}</option>`;
});

topicSelector.innerHTML = htmlContainer;