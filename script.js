// first we will keep the reference of question , button, result div 
const quizContainer=document.getElementById('question')
const submitButton=document.getElementById('submit');
const resultsContainer=document.getElementById('result')

//we have array that contain question of our quiz 
const myQuestions = [
    {
        question: "What is the capital of France?",
        answers: {
        a: "Paris",
        b: "London",
        c: "New York"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest country in the world?",
        answers: {
        a: "Russia",
        b: "China",
        c: "United States"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the currency of Japan?",
        answers: {
        a: "Yuan",
        b: "Euro",
        c: "Yen"
        },
        correctAnswer: "c"
    }
];

//now we create build quiz function 
function buildQuiz(){
    // first we make array that store the question 
    const output= new Array();
    
    //apply loop on myQuestions array
    myQuestions.forEach((currentQuestion,questionNumber)=>{
        const answers=new Array();

        //apply loop on answers
        for(letters in currentQuestion.answers){
            answers.push(`<label><input type='radio' name = 'question${questionNumber}' value='${letters}'/>${letters} : ${currentQuestion.answers[letters]}</label>`)
        }
        // console.log(answers);
        //output
        output.push(`<div class='questions'>${currentQuestion.question}</div><div class='answers'>${answers.join('')}</div>`)
    })
    // console.log(output); 
    // inject on quizContainer 
    quizContainer.innerHTML=output;
}

//now we create showResult function
function showResult(){
    // select all answers that user select 
    const answerContainers=quizContainer.querySelectorAll('.answers')
    console.log(answerContainers);
    
    let answer=0;
    myQuestions.forEach((currentQuestion,questionNumber)=>{
        //find user selected 
        const answerContainer=answerContainers[questionNumber];
        console.log(answerContainer);

        const selector= `input[name=question${questionNumber}]:checked`;
        console.log(selector);
        const user_answer=(answerContainer.querySelector(selector)|| {}).value 
        console.log(user_answer);

        if(user_answer===currentQuestion.correctAnswer){
            answer++;
            answerContainers[questionNumber].style.color='green'
        }else{
            answerContainers[questionNumber].style.color='red'
        }
    })
    resultsContainer.innerHTML=`${answer} out of ${myQuestions.length}`;
}

// call buildQuiz function when application is on 
buildQuiz();
//apply the onclick event on submit button 
submitButton.addEventListener("click",showResult);

