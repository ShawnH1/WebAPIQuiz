//get our timer element, set a timer for 60 seconds
var timerEl = document.querySelector("#timer")
var secondsLeft = 60
//get our start button
var start = document.querySelector("#startBtn")
// get our questionbox
var quizEl = document.querySelector("#questionBox")
var questionsEl = document.querySelector("#questions")
// get our answerbox
var answersEl = document.querySelector("#answers")
//get our startbox
var introEl = document.querySelector("#startBox")
var currentIndex = 0;
//set our array of object questions
//use .question to pull first question and put in question div.

//use .answers pull from array set 0 to button 1 using a for loop, currentindex.length, create a button inside (only one as it repeats itself)
//add attributes to "class" "buttons", button.setAttribute data- in HTML puts value on an element 
//button.setAttribute create, set, append, to changing innerHTML to answers
//get data-blue is data-blue 
//get the data attribute (like a class or id), addEventListeners that send over the data and then compare that to the correct answer
//for (let i = 0; i < array.length; i++) {
  //  const element = array[i];
    
//}
var questionArray = [
 {
        question : 'What color is the sky?', 
        answers: ['red', 'green', 'blue', 'yellow'],
        correctanswer: 'blue',
    },   

    {
        question : "Whats the dog's name?", 
        answers: ['red', 'Charlie', 'blue', 'yellow'],
        correctanswer: 'Charlie',
    },   
    {
        question : 'What color are bananas?', 
        answers: ['red', 'green', 'blue', 'yellow'],
        correctanswer: 'yellow',
    },   
    {
        question : 'What color are apples?', 
        answers: ['red', 'green', 'blue', 'yellow'],
        correctanswer: 'red',
    }
]

start.addEventListener("click", startQuiz)

function startQuiz () {
    window.location.href = "highscores.html"
    //Remove old startBox
    introEl.setAttribute("class" , "hide" )
    //add new questionBox
    quizEl.removeAttribute("class", "hide")
    //start timer
    time();    
    //set questions, pulled from question array with a for loop
    //setQuestions();
}    
function time() {
    var timer = setInterval(() => {
        secondsLeft-- 
        timerEl.innerHTML= secondsLeft
        if (secondsLeft <= 0){
            clearInterval(timer)
        }
    }, 1000);
 setQuestions()   
} //Use console logs like this to test every step along the way. console.log ("pay attention" , timer)
    
    //add to wrong/right answer tally
    //when question is answered, remove it and replace it with a new one

function setQuestions(){
    //get question div
    questionsEl.removeChild("class", "hide")
    //set to first question (object) for(i > 0)
    answersEl.removeChild("class", "hide")
    //dynamically create button
    // connect answers to buttons 

}

//end game condtion
//save high score to localStorage get/set
//relocate
//create another HTML page with a button to try again