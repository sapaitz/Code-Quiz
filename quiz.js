//grab all the elements from the html file

var questionEl = document.querySelector("#question-text")
var choicesEl = document.querySelectorAll("li")
var choice1El = document.querySelector(".choice1")
var choice2El = document.querySelector(".choice2")
var choice3El = document.querySelector(".choice3")
var choice4El = document.querySelector(".choice4")
var scoreTextEl = document.querySelector(".score")
var counterEl = document.querySelector("#counter")
var answerDisplay = document.querySelector(".answer-display")
var highScore = document.querySelector(".high-score")
var startBtn = document.querySelector("#start")



// object array that has the questions, choices and the correct answer
var questions = [
    {
        question: "JavaScript is a ____-side programming language:",
        choice1: "Client",
        choice2: "Server",
        choice3: "Both",
        choice4: "None",
        answer: 3
    },
    {
        question: "Which of the following will throw an error?",
        choice1: "var fun = function bar(){}",
        choice2: "var fun = function bar()",
        choice3: "function fun(){}",
        choice4: "function(){}",
        answer: 4
    },
    {
        question: "Which Javascript label catches all the values, except for the ones specified?",
        choice1: "catch",
        choice2: "default",
        choice3: "try",
        choice4: "label",
        answer: 2
    },
    {
        question: "What is the correct if statement to execute if x is equal to 2?", 
        choice2: "if(x == 2)",
        choice3: "if (x = 2)",
        choice4: "if(x 2)",
        answer: 2
    },
    {
        question: "What will the code return? Boolean(3 < 7)",
        choice1: "true",
        choice2: "false",
        choice3: "NaN",
        choice4: "SyntaxError",
        answer: 1
    }
];

// set starting point for quiz
var score = 0 
var selectedQuestion = 0
var endQuestion = questions.length -1
var seconds = 60
var countdown;

// timer that will display the countdown 
function counter() {
    setInterval(function () {
            if(seconds <=0) {
                clearInterval(seconds = 0)
            }
            counterEl.innerHTML = seconds
            seconds -=1
    }, 1000)

    startBtn.addEventListener("click", counter())
    }  

    

// function that will bring up a new question and the choices

function newQuestion () {
    var questionText = questions[selectedQuestion]
    questionEl.innerHTML = questionText.question
    choice1El.innerHTML = questionText.choice1
    choice2El.innerHTML = questionText.choice2
    choice3El.innerHTML = questionText.choice3
    choice4El.innerHTML = questionText.choice4
}




// function that informs user if they answered correctly or not
function userSelect(value) {
        if(value == questions[selectedQuestion].answer) {
        score++
        answerDisplay.innerHTML = "Correct!"
     } else {
        answerDisplay.innerHTML = "Wrong"
        }

    if (selectedQuestion < endQuestion) {
        selectedQuestion++
        newQuestion()
    } else {
        quizOver()
    }

}

// records the score in local storage
function keepScore() {
    localStorage.setItem("high-score", score)
}