const question= document.getElementById('question');
const choices=Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);

let currentQuestion={};
let acceptingAnswers=true;
let score=0;
let questionCounter=0;
let availableQuestions=[];

let questions=[
    {
        question:'Complete the series 1,6,13,22,33,..',
        choice1:'46',
        choice2:'48',
        choice3:'49',
        choice4:'41',
        answer:1
    },
    {
        question:'Shoe',
        choice1:'Sole',
        choice2:'Leather',
        choice3:'Walking',
        choice4:'Laces',
        answer:1
    },
    {
        question:'At a conference, 12 members shook hands with each other before & after the meeting. How many total number of hand shakes occurred?',
        choice1:'100',
        choice2:'122',
        choice3:'132',
        choice4:'145',
        answer:3
    },
    {
        question:'The day after the day after tomorrow is four days before Monday. What day is it today?',
        choice1:'Monday',
        choice2:'Tuesday',
        choice3:'Wednesday',
        choice4:'Thursday',
        answer:1
    }
];



const correntBonus=10;
const maxQuestions=4;

startGame=() => {
    questionCounter=0;
    score=0;
    availableQuestions=[...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion=() => {
    if(availableQuestions.forEach.length == 0 || questionCounter==maxQuestions){
        return window.location.assign('index.html');
    }
    questionCounter++;
    const questionIndex= Math.floor(Math.random()*availableQuestions.length);
    currentQuestion=availableQuestions[questionIndex];
    question.innerText= currentQuestion.question;

choices.forEach( choice =>{
    const number=choice.dataset['number'];
    choice.innerText=currentQuestion['choice' + number];

});
availableQuestions.splice(questionIndex,1);

acceptingAnswers=true;
};
choices.forEach(choice =>{
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        acceptingAnswers=false;
        const selectedChoice=e.target;
        const selectedAnswer=selectedChoice.dataset['number'];

        const classToApply =
         selectedAnswer==currentQuestion.answer? 'correct' : 'incorrect';

         selectedChoice.parentElement.classList.add(classToApply);
          setTimeout(() => {
              selectedChoice.parentElement.classList.remove(classToApply);
              getNewQuestion();
          }, 1000);

        

    });
});
startGame();