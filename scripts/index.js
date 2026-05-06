export const topicSelector = document.querySelector('.js-topic-selector');
const generateBtn = document.querySelector('.generate-btn');
const displayQuestion = document.querySelector('.display-question');
const gradeSelector = document.querySelector('.grade-level');
const grades = Array.from(gradeSelector.options).map(option => option.value);
const difficultySelector = document.querySelector('.difficulty-level');
const difficulty = Array.from(difficultySelector.options);
const topics = Array.from(topicSelector.options).map(opt => opt.value);

let selectedGradeValue = '';
let selectedTopicValue = '';





grades.forEach( grade => {
    gradeSelector.addEventListener("change", event => {
        selectedGradeValue = event.target.value;
        console.log(selectedGradeValue);
    } )
})

topics.forEach(topic => {
    topicSelector.addEventListener("change", event=> {
        selectedTopicValue = event.target.value;
        console.log(selectedTopicValue);
    })
    
})


console.log(selectedTopicValue);




async function sendRequest(){
    
}
async function updateDisplay(){
    
}

generateBtn.addEventListener('click', () => {
    if(selectedTopicValue === "" || selectedGradeValue ===''){
        window.alert("Input a valid grade and/or topic. ")
    }
    sendRequest();    
    updateDisplay();
    
})

console.log(selectedTopicValue);