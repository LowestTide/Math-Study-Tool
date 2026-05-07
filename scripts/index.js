import { topics } from './data.js';
import { topicSelector } from './generate.js';


const generateBtn = document.querySelector('.generate-btn');
const displayQuestion = document.querySelector('.display-question');
const gradeSelector = document.querySelector('.grade-level');
const grades = Array.from(gradeSelector.options).map(option => option.value);
const difficultySelector = document.querySelector('.difficulty-level');
const difficulty = Array.from(difficultySelector.options);

let selectedGradeValue = '';
let selectedTopicValue = '';
let selectedDifficultyValue = '';

console.log(grades, typeof difficulty);


grades.forEach( grade => {
    gradeSelector.addEventListener("change", event => {
        selectedGradeValue = event.target.value;
        console.log(selectedGradeValue);
    } )
})

// This code perhaps needs a rewrite since it gets logged 11 times every time a click gets detected, making it not very efficient. 

Object.values(topics).forEach(topic => {
    topicSelector.addEventListener("change", event=> {
        selectedTopicValue = event.target.value;
        console.log(selectedTopicValue);
    })
    
})

Object.values(difficulty).forEach( val => {
    console.log(val);
    difficultySelector.addEventListener("change", event => {
        selectedDifficultyValue = event.target.value;
        console.log(selectedDifficultyValue);
    })
})





async function sendRequest(){
    
}
async function updateDisplay(){
    
}

generateBtn.addEventListener('click', () => {
    if(selectedTopicValue === "" || selectedGradeValue ==='' || selectedDifficultyValue){
        window.alert("Input a valid grade and/or topic. ")
    }
    sendRequest();    
    updateDisplay();
    
})

