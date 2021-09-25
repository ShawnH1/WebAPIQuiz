//possible solution?
//for (i = 0; i > quizEl; i++){
// document.generate("button")
//append.child ("id", [i])
//
//}
// https://www.youtube.com/watch?v=Kn06785pkJg

//get our timer element, set a timer for 60 seconds
var timerEl = document.querySelector("#timer")
var secondsLeft = 60
//get our start button
var start = document.querySelector("#startBtn")
// get our questionbox
var quizEl = document.querySelector("#questionBox")

// get our answerbox
var answersEl = document.querySelector("#answers")
//get our startbox
var introEl = document.querySelector("#startBox")
var currentIndex = 0;
//This is an empty container to hold user input upon button click
var userAnswerOne = [];
var correctanswers = 0;
//set our array of object questions

//highscores element
var highScoresEl = document.querySelector("#highScores")
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
        answers: ['red2 ', 'Charlie ', 'blue2 ', ' yellow2'],
        correctanswer: 'Charlie ',
    },
    {
        question: 'What color are bananas?',
        answers: ['red3 ', 'green3 ', 'blue3 ', 'yellow3'],
        correctanswer: 'yellow3',
    },
    {
        question: 'What color are apples?',
        answers: ['red4 ', 'green4 ', 'blue4 ', ' yellow4 '],
        correctanswer: 'red4 ',
    }
]

var random = ["red", "white", "blue"]
for (let i = 0; i < random.length; i++) {
    const element = random[i];
    console.log("element",)
}

start.addEventListener("click", startQuiz)

function startQuiz() {
    //Remove old startBox
    introEl.setAttribute("class", "hide")
    //add new questionBox
    quizEl.removeAttribute("class", "hide")
    //start timer
    time();
    setQuestions(currentIndex)


}
function time() {
    var timer = setInterval(() => {
        secondsLeft--
        timerEl.innerHTML = secondsLeft
        if (secondsLeft <= 0) {
            clearInterval(timer)
        }
    }, 1000);

} //Use console logs like this to test every step along the way. console.log ("pay attention" , timer)

//add to wrong/right answer tally
//when question is answered, remove it and replace it with a new one

//}
//}

highScoresEl.addEventListener("click", function() {

  window.location.href = "highscores.html"
})
    

function setQuestions(question) {

    var questionEl = document.querySelector("#questions")
    //set to first question (object) and cycle through with for(i > 0 
    var currentQuestion = questionArray[currentIndex].question;
    questionEl.innerHTML = currentQuestion

    for (let i = 0; i < questionArray[currentIndex].answers.length; i++) {
        const element = questionArray[currentIndex].answers[i];

        var answerBtnEl = document.createElement("button")
            answerBtnEl.setAttribute("data-response", element)
            answerBtnEl.textContent = element
            
            answerBtnEl.addEventListener("click", function(event) {
                console.log(event)
            console.log(event.target)

                var currentAnswer = event.target.getAttribute("data-response")
                console.log ("currentAnswer", currentAnswer)
            
                var correctBtn = questionArray[currentIndex].correctanswer
                console.log("correct", correctBtn)

                //If they click the correct answer...
                if (currentAnswer === correctBtn) {

                    //clears out the previous answers
                    answersEl.innerHTML = ""

                    //notifies the user that they got the correct answer by...
                    //putting a notification in an "h3"
                    var correct = document.createElement("h3")
                    //this is the text that will pop up notifying them.
                    correct.textContent = "You got question " + [currentIndex + 1] + " correct!  Great job!"
                    //and putting it on the page in the "answers" element
                    answersEl.appendChild(correct)

                    //updates the count so that the next questions and corresponding answers will appear 
                    //the next time this function is run.
                    currentIndex++

                    //repeats this function at the currentIndex, which was just changed.
                    setQuestions(currentIndex)
                
                //if they clicked a wrong answer or something went wrong
                } else {
                    //clears out the previous answers
                    answersEl.innerHTML = ""
                    
                    //notifies the user that they got the wrong answer by...
                    //putting it in a "h3 tag"
                    var incorrect = document.createElement("h3")
                    //this is the text that will pop up notifying them.
                    incorrect.textContent = "You got question " + [currentIndex + 1] + " wrong!  You can do this!"
                    //this adds it to the page in the "answers" section
                    answersEl.appendChild(incorrect)

                    //updates the count that the next questions and corresponding answers will appear
                    //the next time this function is run.
                    currentIndex++

                    //repeats this function at the currentIndex, which was just changed.
                    setQuestions(currentIndex)


                }
                
                //if they clicked the wrong answer...
                if (currentAnswer !== correctBtn) {
                    //10 seconds is taken off of the timer.
                    secondsLeft = secondsLeft - 10
                }

                

            })
            answersEl.appendChild(answerBtnEl)
        console.log("element2", answerBtnEl)
    }
    
    
}


//end game condtion


//save high score to localStorage get/set
//relocate

 //ATTENTION ATTENTION ATTENTION
    //This is the link to switch over the high scores page.  Throw it in the end game function.

//create another HTML page with a button to try again