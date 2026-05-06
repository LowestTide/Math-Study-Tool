import { topics } from './data.js';
import { topicSelector } from './index.js';

console.log(topicSelector);
console.log(topics, typeof topics);
console.log(topicSelector.innerHTML);

Array.from(topics).forEach( topic => {
    console.log(topic);
})

