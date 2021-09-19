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
//This is an empty container to hold user input upon button click
var userAnswer = [];
//set our array of object questions
//var containerEl = document.querySelector("container")
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
        question: 'What color is the sky?',
        answers: ['red ', 'green ', 'blue ', 'yellow '],
        correctanswer: 'blue ',
    },

    {
        question: "Whats the dog's name?",
        answers: ['red ', 'Charlie ', 'blue ', ' yellow'],
        correctanswer: 'Charlie ',
    },
    {
        question: 'What color are bananas?',
        answers: ['red ', 'green ', 'blue ', 'yellow'],
        correctanswer: 'yellow',
    },
    {
        question: 'What color are apples?',
        answers: ['red ', 'green ', 'blue ', 'yellow'],
        correctanswer: 'red ',
    }
]


start.addEventListener("click", startQuiz)

function startQuiz() {
    //Remove old startBox
    introEl.setAttribute("class", "hide")
    //add new questionBox
    quizEl.removeAttribute("class", "hide")
    //start timer
    time();
}
function time() {
    var timer = setInterval(() => {
        secondsLeft--
        timerEl.innerHTML = secondsLeft
        if (secondsLeft <= 0) {
            clearInterval(timer)
        }
    }, 1000);
    setQuestions()
} //Use console logs like this to test every step along the way. console.log ("pay attention" , timer)

//add to wrong/right answer tally
//when question is answered, remove it and replace it with a new one


function setQuestions() {
    //changed from removeChild to removeAttribute in parent because only the parent had the attribute of '"class = "hide"'
    quizEl.removeAttribute("class", "hide")
    //questionsEl.removeChild("class", "hide")
    //get question div
    questionCycleEl = questionsEl
    //set to first question (object) and cycle through with for(i > 0 
    questionCycleEl.textContent = questionArray[currentIndex].question;

    //get answer div
    answerCycleEl = answersEl
    //answerCycleEl.textContent = questionArray[currentIndex].answers;
    //dynamically create button


    
 // get the element you want to add the button to
var containerEl = document.getElementById("container");
  containerEl.addEventListener("click", (e) => {
    console.log(e.target.id)
  })

// create the button object and add the text to it
var buttonOne = document.createElement("BUTTON");
buttonOne.innerHTML = questionArray[currentIndex].answers[0];
//"Button";

// add the button to the div
containerEl.appendChild(buttonOne);
//unique ID for button one
buttonOne.setAttribute("id", "firstBtn")

//buttonTwo coode
var buttonTwo = document.createElement("BUTTON");
buttonTwo.innerHTML = questionArray[currentIndex].answers[1];
containerEl.appendChild(buttonTwo);
//unique ID for button 2
buttonTwo.setAttribute("id", "secondBtn")

//button 3 code
var buttonThree = document.createElement("BUTTON");
buttonThree.innerHTML = questionArray[currentIndex].answers[2];
containerEl.appendChild(buttonThree);
//unique ID for button 3
buttonThree.setAttribute("id", "thirdBtn")

//button 4 code 
var buttonFour = document.createElement("BUTTON");
buttonFour.innerHTML = questionArray[currentIndex].answers[3];
containerEl.appendChild(buttonFour);
//unique ID for button 3
buttonFour.setAttribute("id", "fourthBtn")

   // var containerEl = document.getElementById("container")
    //containerEl.addEventListener("click", identify())
    //function identify() {
      //  if (buttonOne)
        //console.log("buttonOne was clicked")}
}

//check if answer is right







//end game condtion


//save high score to localStorage get/set
//relocate

 //ATTENTION ATTENTION ATTENTION
    //This is the link to switch over the high scores page.  Throw it in the end game function.
    //window.location.href = "highscores.html"
//create another HTML page with a button to try again