//get our timer element, set a timer for 60 seconds
var timerEl = document.querySelector("#timer")

//set the starting time limit
var secondsLeft = 60

//get our start button
var startBtnEl = document.querySelector("#startBtn")

// get our questionbox
var quizEl = document.querySelector("#questionBox")

// get our answerbox
var answersEl = document.querySelector("#answers")
//get our startbox
var introEl = document.querySelector("#startBox")

//used to select the next questions and answers when cycling through 
var currentIndex = 0;

//variable to keep track of how many answers the user got correct.
var correctUserAnswers = 0;

//calculates the user's final score by multiplying how many answers they got right by the time remaining
var finalScoreEl = correctUserAnswers * secondsLeft

//highscores element
var highScoresEl = document.querySelector("#highScores")

//holding space for user intitials
var userInitEl = ("")

//this is the array of questions and answers
var questionArray = [
    {
        //this is the first question
        question: 'What color is the sky?',
        //these are the possible answers for the first question
        answers: ['red ', 'green ', 'blue ', 'yellow '],
        //this is the correct answer for the first question
        correctanswer: 'blue ',
    },

    {
        //this is the second question
        question: "Whats the dog's name?",
        //these are the possible answers for the second question 
        answers: ['red2 ', 'Charlie ', 'blue2 ', ' yellow2'],
        //this is the correct answer for the second question
        correctanswer: 'Charlie ',
    },

    {
        //this is the third question
        question: 'What color are bananas?',
        //these are the possible answers for the third question
        answers: ['red3 ', 'green3 ', 'blue3 ', 'yellow3'],
        //this is the correct answer for the third question
        correctanswer: 'yellow3',
    },

    {
        //this is the fourth question
        question: 'What color are apples?',
        //these are the possible answers for the fourth question
        answers: ['red4 ', 'green4 ', 'blue4 ', ' yellow4 '],
        //this is the correct answer for the fourth question
        correctanswer: 'red4 ',
    }
]

//adds an event listener to the "Start quiz button" which activates the "startQuiz" function
startBtnEl.addEventListener("click", function () {
    console.log('started')
    startQuiz()
})

//This function starts the quiz.  That means...
function startQuiz() {
    //The startBox with the instructions disappears
    introEl.setAttribute("class", "hide")
    //The questionBox with the questions and answers appears
    quizEl.removeAttribute("class", "hide")
    //The timer function is started
    time();
    //The setQuestions function is started at the currentIndex
    setQuestions(currentIndex)
}

//This function controls the number part of the timer 
function time() {
    //sets the number part of the timer to countdown at a certain interval
    var timer = setInterval(() => {
        //this is the actual number part losing 1 number 
        secondsLeft--
        //this displays the numbers on the page
        timerEl.innerHTML = secondsLeft
        //if time runs out...
        if (secondsLeft <= 0) {
            //this stops the countdown by clearing it instead of it going into the negative
            clearInterval(timer)
            endGame()
        }
        //this sets the speed of the countdown so that a number is removed from the count every second.
    }, 1000);

}

//Use console logs like this to test every step along the way. console.log ("pay attention" , timer)

//add to wrong/right answer tally
//when question is answered, remove it and replace it with a new one

//}
//}

//When the user clicks on "High Scores"...
highScoresEl.addEventListener("click", function () {
    //they are brought to the "High Scores" page
    window.location.href = "highscores.html"
})


//this is the function to display and cycle through the questions
function setQuestions(question) {

    //this targets the question element
    var questionEl = document.querySelector("#questions")

    //if the user has cycled through all of the questions and answers,
    if (currentIndex === 4) {
        //console.log ("endgame")
        //end the game
        endGame()
    } else {
        //this sets the current question to the corresponding one in the array
        var currentQuestion = questionArray[currentIndex].question;

        //this attaches it to the page in the "question" div
        questionEl.innerHTML = currentQuestion


        //this cycles to the next question in the array every time that the function is run.
        //Note: the function needs to be run again for this to work.  It does not automatically cycle to the next question.
        //Above note was added because for loops can be a headache if one runs with the assumption that they work automatically
        //without repeating the entire function itself over again.

        for (let i = 0; i < questionArray[currentIndex].answers.length; i++) {
            const element = questionArray[currentIndex].answers[i];

            //this creates the buttons for the various answers
            var answerBtnEl = document.createElement("button")
            //this assigns an attribute with the corresponding answer so they can be identified later
            answerBtnEl.setAttribute("data-response", element)
            //this assigns the text inside the button to be the corresponding answer
            answerBtnEl.textContent = element
            //When the user clicks on a answer button... 
            answerBtnEl.addEventListener("click", function (event) {
                //Testing, to make sure that the event listener is working
                //console.log(event)
                //console.log(event.target)

                //this tells the computer which button was clicked
                var currentAnswer = event.target.getAttribute("data-response")

                //used for testing, to make sure that the computer knows which button was clicked
                //console.log ("currentAnswer", currentAnswer)

                //this tells the function which button is the correct one.
                var correctBtn = questionArray[currentIndex].correctanswer

                //testing, to make sure that the computer knows when the user clicked the correct button
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

                    //updates the user's score
                    correctUserAnswers++
                    console.log("correct answers" + correctUserAnswers)
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
            //this attaches the button elements
            answersEl.appendChild(answerBtnEl)
            //testing, to make sure that 
            //console.log("element2", answerBtnEl)
        }

    }
}


//end game condtion
function endGame() {

    //Used to test that end game is being re
    console.log("end game function entered")
    //hides quizEl since they are no longer taking the quiz
    quizEl.setAttribute("class", "hide")
    //stop timer or get time at that point

    //get finalTime

    //send to saveScore function
    saveScore()
};

function saveScore() {
    console.log("save score function entered")
    finalScoreEl = correctUserAnswers //* secondsLeft
    console.log("final score", finalScoreEl)

    var highScoresFormEl = document.querySelector("#highScoresForm")
    var userInitialsEl = document.querySelector("#userInitials")

    //shows the High Score Form so they can add in their initials to their score
    highScoresFormEl.removeAttribute("class", "hide")
    var enterScoreEl = document.querySelector("#enterScore")
    enterScoreEl.addEventListener('submit', function () {
        //submit event detected
        userInitEl = userInitialsEl.value

        console.log("userInitialsEl" + userInitEl)
        console.log("form button clicked")
        saveLocalStorage()
    })
}

function saveLocalStorage() {

    console.log("entered save local storage function")
    //save their final score to local storage
    localStorage.setItem('final score', finalScoreEl)
    // //save thier initials to local storage
    localStorage.setItem('userinitials', userInitEl)
    //send the user to the High Score page
    sendtoHS()
}
//when the user submits their score...
function sendToHS() {
    //they are brought to the "High Scores" page
    window.location.href = "highscores.html"
}

//create another HTML page showing the high scores in a table
//arrange high scores from highest to lowest
//DONE - provide a button to try again on HS send back to index.html with window.location.href = "index.html"
//DONE - provide a button to clear localStorage localStorage.clear();
//add CSS to make both pages pretty